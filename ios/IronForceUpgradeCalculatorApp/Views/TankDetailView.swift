import SwiftUI

struct TankDetailView: View {
    @StateObject private var viewModel: TankDetailViewModel
    @State private var activeSelection: LevelSelection?

    init(viewModel: TankDetailViewModel) {
        _viewModel = StateObject(wrappedValue: viewModel)
    }

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                header
                medalToggle
                showLevelsToggle
                if viewModel.calculatorState.showTankLevels {
                    levelSection(title: "Potential Levels", isCurrent: false)
                }
                levelSection(title: "Current Levels", isCurrent: true)
                StatBlockView(title: "Potential Stats", stats: viewModel.calculatorState.tankStats)
                StatBlockView(title: "Current Stats", stats: viewModel.calculatorState.currentTankStats)
                CostSummaryView(title: "Potential Cost", cost: viewModel.calculatorState.tankUpgradeCostAndTime)
                CostSummaryView(title: "Current Cost", cost: viewModel.calculatorState.currentTankUpgradeCostAndTime)
                CostSummaryView(title: "Difference", cost: viewModel.calculatorState.timeAndCostFromCurrentToPotentialStats)
            }
            .padding()
        }
        .navigationTitle(viewModel.tank.name)
        .navigationBarTitleDisplayMode(.inline)
        .sheet(item: $activeSelection) { selection in
            LevelPickerSheet(
                title: "\(selection.isCurrent ? "Current" : "Potential") \(selection.component.displayName)",
                availableLevels: levelOptions,
                initialValue: level(for: selection.component, isCurrent: selection.isCurrent)
            ) { newValue in
                viewModel.updateLevel(selection.component, isCurrent: selection.isCurrent, to: newValue)
            }
        }
    }

    private var header: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text(viewModel.tank.name)
                .font(.largeTitle)
                .bold()
            Text("Tier \(viewModel.tank.tier)")
                .font(.headline)
                .foregroundStyle(.secondary)
            HStack(spacing: 16) {
                StatValue(label: "Base Attack", value: viewModel.tank.basicInfo.attack)
                StatValue(label: "Base Armor", value: viewModel.tank.basicInfo.armor)
            }
            HStack(spacing: 16) {
                StatValue(label: "Base Fire Speed", value: viewModel.tank.basicInfo.fireSpeed)
                StatValue(label: "Base Movement", value: viewModel.tank.basicInfo.movement)
            }
        }
    }

    private var medalToggle: some View {
        Toggle(
            "Medal Applied",
            isOn: Binding(
                get: { viewModel.calculatorState.medalUsed },
                set: { viewModel.toggleMedalUsed($0) }
            )
        )
    }

    private var showLevelsToggle: some View {
        Toggle(
            "Show Potential Levels",
            isOn: Binding(
                get: { viewModel.calculatorState.showTankLevels },
                set: { viewModel.toggleShowTankLevels($0) }
            )
        )
    }

    private func levelSection(title: String, isCurrent: Bool) -> some View {
        VStack(alignment: .leading, spacing: 12) {
            Text(title)
                .font(.headline)
            ForEach(UpgradeComponent.allCases) { component in
                LevelRow(
                    label: component.displayName,
                    value: level(for: component, isCurrent: isCurrent)
                ) {
                    activeSelection = LevelSelection(component: component, isCurrent: isCurrent)
                }
            }
        }
        .padding()
        .background(Color(uiColor: .secondarySystemBackground), in: RoundedRectangle(cornerRadius: 12, style: .continuous))
    }

    private func level(for component: UpgradeComponent, isCurrent: Bool) -> Int {
        let levels = isCurrent ? viewModel.calculatorState.currentTankLevels : viewModel.calculatorState.tankLevels
        switch component {
        case .turret:
            return levels.turretLevel
        case .barrel:
            return levels.barrelLevel
        case .armor:
            return levels.armorLevel
        case .engine:
            return levels.engineLevel
        case .trucks:
            return levels.trucksLevel
        }
    }

    private var levelOptions: [Int] {
        var options = viewModel.selectLevelOptions
        options.insert(0, at: 0)
        return options
    }
}

private struct LevelRow: View {
    let label: String
    let value: Int
    let onTap: () -> Void

    var body: some View {
        HStack {
            Text(label)
            Spacer()
            Button(action: onTap) {
                Text("Level \(value)")
            }
            .buttonStyle(.bordered)
        }
    }
}

private struct LevelSelection: Identifiable {
    let component: UpgradeComponent
    let isCurrent: Bool
    let id = UUID()
}

private struct StatValue: View {
    let label: String
    let value: Double

    var body: some View {
        VStack(alignment: .leading) {
            Text(label)
                .font(.caption)
                .foregroundStyle(.secondary)
            Text(value.formatted(.number.precision(.fractionLength(0...1))))
                .font(.headline)
        }
    }
}

#Preview
struct TankDetailView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationStack {
            if let data = try? TankDataService().loadTanks(),
               let tank = data.tanks.first,
               let detail = data.tankDetails[tank.name] {
                TankDetailView(viewModel: TankDetailViewModel(
                    tank: tank,
                    tankDetail: detail,
                    store: UserDefaultsStore(userDefaults: UserDefaults(suiteName: "Preview") ?? .standard),
                    calculatorService: TankCalculationService()
                ))
            } else {
                Text("Preview unavailable")
            }
        }
    }
}
