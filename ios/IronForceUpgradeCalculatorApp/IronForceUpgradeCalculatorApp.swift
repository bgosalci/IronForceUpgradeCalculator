import SwiftUI

@main
struct IronForceUpgradeCalculatorApp: App {
    private let dataService = TankDataService()
    private let store = UserDefaultsStore()

    var body: some Scene {
        WindowGroup {
            NavigationStack {
                TankListView(viewModel: TankListViewModel(
                    dataService: dataService,
                    store: store,
                    calculatorService: TankCalculationService()
                ))
            }
        }
    }
}
