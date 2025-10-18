import Foundation

enum UpgradeComponent: String, CaseIterable, Identifiable {
    case turret
    case barrel
    case armor
    case engine
    case trucks

    var id: String { rawValue }

    var displayName: String {
        rawValue.capitalized
    }
}

@MainActor
final class TankDetailViewModel: ObservableObject {
    @Published private(set) var calculatorState: UpgradeCalculatorState
    @Published private(set) var selectLevelOptions: [Int]

    let tank: Tank
    let tankDetail: TankDetail

    private let store: UserDefaultsStore
    private let calculatorService: TankCalculationService

    init(tank: Tank, tankDetail: TankDetail, store: UserDefaultsStore, calculatorService: TankCalculationService) {
        self.tank = tank
        self.tankDetail = tankDetail
        self.store = store
        self.calculatorService = calculatorService

        store.selectedTank = tank.name

        if let stored = store.loadCalculatorState(forTank: tank.name), stored.version == UpgradeCalculatorState.currentVersion {
            calculatorState = stored
        } else {
            calculatorState = calculatorService.createTankStatData()
        }

        selectLevelOptions = calculatorService.setSelectLevelOptions(levels: tankDetail.turret?.count ?? 0)
        recalculateAll()
    }

    func toggleMedalUsed(_ value: Bool) {
        calculatorState.medalUsed = value
        recalculateAll()
    }

    func toggleShowTankLevels(_ value: Bool) {
        calculatorState.showTankLevels = value
        persistState()
    }

    func updateLevel(_ component: UpgradeComponent, isCurrent: Bool, to level: Int) {
        var levels = isCurrent ? calculatorState.currentTankLevels : calculatorState.tankLevels

        switch component {
        case .turret:
            levels.turretLevel = level
        case .barrel:
            levels.barrelLevel = level
        case .armor:
            levels.armorLevel = level
        case .engine:
            levels.engineLevel = level
        case .trucks:
            levels.trucksLevel = level
        }

        if isCurrent {
            calculatorState.currentTankLevels = levels
        } else {
            calculatorState.tankLevels = levels
        }

        recalculateAll()
    }

    private func recalculateAll() {
        calculatorState.tankStats = calculatorService.calculateTankStats(tank: tank, detail: tankDetail, levels: calculatorState.tankLevels)
        calculatorState.currentTankStats = calculatorService.calculateTankStats(tank: tank, detail: tankDetail, levels: calculatorState.currentTankLevels)

        let potentialTotals = calculatorService.calculateTimeAndPriceForTankStats(detail: tankDetail, levels: calculatorState.tankLevels)
        calculatorState.tankUpgradeCostAndTime = createCost(from: potentialTotals)

        let currentTotals = calculatorService.calculateTimeAndPriceForTankStats(detail: tankDetail, levels: calculatorState.currentTankLevels)
        calculatorState.currentTankUpgradeCostAndTime = createCost(from: currentTotals)

        calculatorService.calculateTimeAndCostFromCurrentToPotential(&calculatorState)
        persistState()
    }

    private func createCost(from totals: TankUpgradeTotals) -> UpgradeCost {
        let multiplier = calculatorState.medalUsed ? 0.75 : 1.0
        let adjustedTime = Int(Double(totals.totalTime) * multiplier)
        let displayTime = calculatorService.formatTotalTime(adjustedTime)
        return UpgradeCost(price: totals.totalPrice, time: adjustedTime, displayTime: displayTime, diamonds: totals.totalDiamonds)
    }

    private func persistState() {
        store.saveCalculatorState(calculatorState, forTank: tank.name)
    }
}
