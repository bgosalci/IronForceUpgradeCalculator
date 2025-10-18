import SwiftUI

struct TankListView: View {
    @StateObject private var viewModel: TankListViewModel

    init(viewModel: TankListViewModel) {
        _viewModel = StateObject(wrappedValue: viewModel)
    }

    var body: some View {
        List(viewModel.tanks) { tank in
            NavigationLink(value: tank) {
                TankRowView(tank: tank)
            }
        }
        .navigationTitle("Tanks")
        .navigationDestination(for: Tank.self) { tank in
            if let detailViewModel = viewModel.detailViewModel(for: tank) {
                TankDetailView(viewModel: detailViewModel)
            } else {
                Text("Unable to load details")
            }
        }
        .overlay(alignment: .center) {
            if let errorMessage = viewModel.errorMessage {
                Text(errorMessage)
                    .foregroundColor(.red)
                    .multilineTextAlignment(.center)
                    .padding()
            }
        }
    }
}

private struct TankRowView: View {
    let tank: Tank

    var body: some View {
        HStack {
            VStack(alignment: .leading, spacing: 4) {
                Text(tank.name)
                    .font(.headline)
                Text("Tier \(tank.tier)")
                    .font(.subheadline)
                    .foregroundColor(.secondary)
            }
            Spacer()
            VStack(alignment: .trailing, spacing: 2) {
                Text(tank.price)
                    .font(.subheadline)
                if !tank.payType.isEmpty {
                    Text(tank.payType)
                        .font(.caption)
                        .foregroundColor(.secondary)
                }
            }
        }
        .padding(.vertical, 8)
    }
}

struct TankListView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationStack {
            TankListView(viewModel: TankListViewModel(
                dataService: TankDataService(),
                store: UserDefaultsStore(userDefaults: UserDefaults(suiteName: "Preview") ?? .standard),
                calculatorService: TankCalculationService()
            ))
        }
    }
}
