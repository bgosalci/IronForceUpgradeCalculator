import Foundation

@MainActor
final class TankListViewModel: ObservableObject {
    @Published private(set) var tanks: [Tank] = []
    @Published var errorMessage: String?

    private let dataService: TankDataService
    private let store: UserDefaultsStore
    private let calculatorService: TankCalculationService

    private var tankData: TankData?

    init(dataService: TankDataService, store: UserDefaultsStore, calculatorService: TankCalculationService) {
        self.dataService = dataService
        self.store = store
        self.calculatorService = calculatorService
        load()
    }

    func load() {
        do {
            let data = try dataService.loadTanks()
            tankData = data
            tanks = data.tanks
        } catch {
            errorMessage = error.localizedDescription
        }
    }

    func detailViewModel(for tank: Tank) -> TankDetailViewModel? {
        guard let data = tankData, let detail = data.tankDetails[tank.name] else { return nil }
        return TankDetailViewModel(
            tank: tank,
            tankDetail: detail,
            store: store,
            calculatorService: calculatorService
        )
    }
}
