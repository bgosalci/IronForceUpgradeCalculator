import Foundation

struct UpgradeLevels: Codable, Equatable {
    var turretLevel: Int
    var barrelLevel: Int
    var armorLevel: Int
    var engineLevel: Int
    var trucksLevel: Int
}

struct TankStats: Codable, Equatable {
    var attack: Double
    var fireSpeed: Double
    var armor: Double
    var movement: Double
}

struct UpgradeCost: Codable, Equatable {
    var price: Int
    var time: Int
    var displayTime: String
    var diamonds: Int
}

struct UpgradeCalculatorState: Codable, Equatable {
    var version: String
    var showTankLevels: Bool
    var medalUsed: Bool
    var tankLevels: UpgradeLevels
    var currentTankLevels: UpgradeLevels
    var tankStats: TankStats
    var currentTankStats: TankStats
    var tankUpgradeCostAndTime: UpgradeCost
    var currentTankUpgradeCostAndTime: UpgradeCost
    var timeAndCostFromCurrentToPotentialStats: UpgradeCost

    static let currentVersion = "0.0.6"
}
