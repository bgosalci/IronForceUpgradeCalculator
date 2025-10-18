import Foundation

final class UserDefaultsStore {
    private let storeName = "iForce"
    private let userDefaults: UserDefaults
    private let encoder = JSONEncoder()
    private let decoder = JSONDecoder()

    init(userDefaults: UserDefaults = .standard) {
        self.userDefaults = userDefaults
    }

    var selectedTank: String? {
        get { value(forKey: "selectedTank") }
        set { setValue(newValue, forKey: "selectedTank") }
    }

    func saveCalculatorState(_ state: UpgradeCalculatorState, forTank tank: String) {
        guard let data = try? encoder.encode(state) else { return }
        userDefaults.set(data, forKey: namespacedKey("\(tank).upgradeCalculator"))
    }

    func loadCalculatorState(forTank tank: String) -> UpgradeCalculatorState? {
        guard let data = userDefaults.data(forKey: namespacedKey("\(tank).upgradeCalculator")) else { return nil }
        return try? decoder.decode(UpgradeCalculatorState.self, from: data)
    }

    private func value(forKey key: String) -> String? {
        userDefaults.string(forKey: namespacedKey(key))
    }

    private func setValue(_ value: String?, forKey key: String) {
        userDefaults.set(value, forKey: namespacedKey(key))
    }

    private func namespacedKey(_ key: String) -> String {
        "\(storeName).\(key)"
    }
}
