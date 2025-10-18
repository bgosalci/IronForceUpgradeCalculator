import Foundation

struct TankUpgradeTotals: Equatable {
    let totalTime: Int
    let totalPrice: Int
    let totalDiamonds: Int
}

final class TankCalculationService {
    func setSelectLevelOptions(levels: Int) -> [Int] {
        guard levels > 0 else { return [] }
        return Array(1...levels)
    }

    func createTankStatData() -> UpgradeCalculatorState {
        UpgradeCalculatorState(
            version: UpgradeCalculatorState.currentVersion,
            showTankLevels: false,
            medalUsed: true,
            tankLevels: UpgradeLevels(turretLevel: 0, barrelLevel: 0, armorLevel: 0, engineLevel: 0, trucksLevel: 0),
            currentTankLevels: UpgradeLevels(turretLevel: 0, barrelLevel: 0, armorLevel: 0, engineLevel: 0, trucksLevel: 0),
            tankStats: TankStats(attack: 0, fireSpeed: 0, armor: 0, movement: 0),
            currentTankStats: TankStats(attack: 0, fireSpeed: 0, armor: 0, movement: 0),
            tankUpgradeCostAndTime: UpgradeCost(price: 0, time: 0, displayTime: "0", diamonds: 0),
            currentTankUpgradeCostAndTime: UpgradeCost(price: 0, time: 0, displayTime: "0", diamonds: 0),
            timeAndCostFromCurrentToPotentialStats: UpgradeCost(price: 0, time: 0, displayTime: "0", diamonds: 0)
        )
    }

    func calculateTankStats(tank: Tank, detail: TankDetail, levels: UpgradeLevels) -> TankStats {
        let attack = calculatePotentialAttack(detail: detail, turretLevel: levels.turretLevel, barrelLevel: levels.barrelLevel) + tank.basicInfo.attack
        let fireSpeed = calculatePotentialFireSpeed(detail: detail, turretLevel: levels.turretLevel, barrelLevel: levels.barrelLevel) + tank.basicInfo.fireSpeed
        let armor = calculatePotentialArmor(detail: detail, armorLevel: levels.armorLevel, trucksLevel: levels.trucksLevel) + tank.basicInfo.armor
        let movement = calculatePotentialMovement(detail: detail, armorLevel: levels.armorLevel, engineLevel: levels.engineLevel, trucksLevel: levels.trucksLevel) + tank.basicInfo.movement
        return TankStats(attack: attack, fireSpeed: fireSpeed, armor: armor, movement: movement)
    }

    func calculateTimeAndPriceForTankStats(detail: TankDetail, levels: UpgradeLevels) -> TankUpgradeTotals {
        let components: [((UpgradeLevels) -> Int, [UpgradeLevel]?)] = [
            ({ $0.turretLevel }, detail.turret),
            ({ $0.barrelLevel }, detail.barrel),
            ({ $0.armorLevel }, detail.armor),
            ({ $0.engineLevel }, detail.engine),
            ({ $0.trucksLevel }, detail.trucks)
        ]

        var totalTime = 0
        var totalPrice = 0
        var totalDiamonds = 0

        for (levelKey, list) in components {
            guard let upgrades = list else { continue }
            let count = min(max(levelKey(levels), 0), upgrades.count)
            guard count > 0 else { continue }
            for upgrade in upgrades.prefix(count) {
                totalTime += upgrade.calcTime ?? 0
                totalPrice += upgrade.price ?? 0
                totalDiamonds += upgrade.diamonds ?? 0
            }
        }

        return TankUpgradeTotals(totalTime: totalTime, totalPrice: totalPrice, totalDiamonds: totalDiamonds)
    }

    func calculateTimeAndCostFromCurrentToPotential(_ state: inout UpgradeCalculatorState) {
        let current = state.currentTankUpgradeCostAndTime
        let potential = state.tankUpgradeCostAndTime
        var delta = state.timeAndCostFromCurrentToPotentialStats

        delta.time = max(potential.time - current.time, 0)
        delta.diamonds = max(potential.diamonds - current.diamonds, 0)
        delta.price = max(potential.price - current.price, 0)
        delta.displayTime = formatTotalTime(delta.time)

        state.timeAndCostFromCurrentToPotentialStats = delta
    }

    func formatTotalTime(_ time: Int) -> String {
        guard time > 0 else { return "0" }
        var remaining = time
        let day = 86_400
        let hour = 3_600
        let minute = 60

        let days = remaining / day
        remaining -= days * day
        let hours = remaining / hour
        remaining -= hours * hour
        let minutes = remaining / minute

        var components: [String] = []
        if days > 0 { components.append("\(days)d") }
        if hours > 0 { components.append("\(hours)h") }
        if minutes > 0 { components.append("\(minutes)m") }

        return components.joined(separator: " ")
    }

    func calculateTotalTime(detail: TankDetail, levels: [Int]? = nil) -> Int {
        calculateTotalValues(detail: detail, levels: levels, value: { $0.calcTime ?? 0 })
    }

    func calculateTotalPrice(detail: TankDetail, levels: [Int]? = nil) -> Int {
        calculateTotalValues(detail: detail, levels: levels, value: { $0.price ?? 0 })
    }

    func calculateTotalDiamonds(detail: TankDetail, levels: [Int]? = nil) -> Int {
        calculateTotalValues(detail: detail, levels: levels, value: { $0.diamonds ?? 0 })
    }

    func calculateTotalAttack(detail: TankDetail) -> Double {
        calculateTotalValues(detail: detail, levelKeyPaths: [\.turret, \.barrel], value: { $0.attack ?? 0 })
    }

    func calculateTotalFireSpeed(detail: TankDetail) -> Double {
        calculateTotalValues(detail: detail, levelKeyPaths: [\.turret, \.barrel], value: { $0.fireSpeed ?? 0 })
    }

    func calculateTotalArmor(detail: TankDetail) -> Double {
        calculateTotalValues(detail: detail, levelKeyPaths: [\.armor, \.trucks], value: { $0.armor ?? 0 })
    }

    func calculateTotalMovement(detail: TankDetail) -> Double {
        calculateTotalValues(detail: detail, levelKeyPaths: [\.armor, \.engine, \.trucks], value: { $0.movement ?? 0 })
    }

    private func calculatePotentialAttack(detail: TankDetail, turretLevel: Int, barrelLevel: Int) -> Double {
        potentialValue(detail.turret, level: turretLevel, transform: { $0.attack }) +
        potentialValue(detail.barrel, level: barrelLevel, transform: { $0.attack })
    }

    private func calculatePotentialFireSpeed(detail: TankDetail, turretLevel: Int, barrelLevel: Int) -> Double {
        potentialValue(detail.turret, level: turretLevel, transform: { $0.fireSpeed }) +
        potentialValue(detail.barrel, level: barrelLevel, transform: { $0.fireSpeed })
    }

    private func calculatePotentialArmor(detail: TankDetail, armorLevel: Int, trucksLevel: Int) -> Double {
        potentialValue(detail.armor, level: armorLevel, transform: { $0.armor }) +
        potentialValue(detail.trucks, level: trucksLevel, transform: { $0.armor })
    }

    private func calculatePotentialMovement(detail: TankDetail, armorLevel: Int, engineLevel: Int, trucksLevel: Int) -> Double {
        potentialValue(detail.armor, level: armorLevel, transform: { $0.movement }) +
        potentialValue(detail.engine, level: engineLevel, transform: { $0.movement }) +
        potentialValue(detail.trucks, level: trucksLevel, transform: { $0.movement })
    }

    private func calculateTotalValues(detail: TankDetail, levels: [Int]? = nil, value: (UpgradeLevel) -> Int) -> Int {
        let components: [([UpgradeLevel]?, Int?)] = [
            (detail.turret, levels?.element(at: 0)),
            (detail.barrel, levels?.element(at: 1)),
            (detail.armor, levels?.element(at: 2)),
            (detail.engine, levels?.element(at: 3)),
            (detail.trucks, levels?.element(at: 4))
        ]

        var total = 0
        for (upgrades, limit) in components {
            guard let upgrades else { continue }
            let count = min(max(limit ?? upgrades.count, 0), upgrades.count)
            guard count > 0 else { continue }
            total += upgrades.prefix(count).reduce(into: 0) { $0 += value($1) }
        }
        return total
    }

    private func calculateTotalValues(detail: TankDetail, levelKeyPaths: [KeyPath<TankDetail, [UpgradeLevel]?>>, value: (UpgradeLevel) -> Double) -> Double {
        var total = 0.0
        for keyPath in levelKeyPaths {
            guard let upgrades = detail[keyPath: keyPath] else { continue }
            for upgrade in upgrades {
                total += value(upgrade)
            }
        }
        return total
    }

    private func potentialValue(_ upgrades: [UpgradeLevel]?, level: Int, transform: (UpgradeLevel) -> Double?) -> Double {
        guard let upgrades else { return 0 }
        let count = min(max(level, 0), upgrades.count)
        guard count > 0 else { return 0 }
        return upgrades.prefix(count).reduce(0) { partial, upgrade in
            partial + (transform(upgrade) ?? 0)
        }
    }
}

private extension Array {
    func element(at index: Int) -> Element? {
        guard indices.contains(index) else { return nil }
        return self[index]
    }
}
