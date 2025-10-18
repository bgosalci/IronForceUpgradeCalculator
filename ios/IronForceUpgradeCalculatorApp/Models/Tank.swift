import Foundation

struct TankData: Codable {
    let tanks: [Tank]
    let tankDetails: [String: TankDetail]
}

struct Tank: Codable, Identifiable, Hashable {
    struct BasicInfo: Codable, Equatable, Hashable {
        let attack: Double
        let armor: Double
        let fireSpeed: Double
        let movement: Double
    }

    let name: String
    let tier: Int
    let price: String
    let payType: String
    let image: String
    let basicInfo: BasicInfo

    var id: String { name }

    init(name: String, tier: Int, price: String, payType: String, image: String, basicInfo: BasicInfo) {
        self.name = name
        self.tier = tier
        self.price = price
        self.payType = payType
        self.image = image
        self.basicInfo = basicInfo
    }

    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        name = try container.decode(String.self, forKey: .name)
        tier = try container.decode(Int.self, forKey: .tier)
        payType = try container.decodeIfPresent(String.self, forKey: .payType) ?? ""
        image = try container.decodeIfPresent(String.self, forKey: .image) ?? ""
        basicInfo = try container.decode(BasicInfo.self, forKey: .basicInfo)

        if let numericPrice = try? container.decode(Double.self, forKey: .price) {
            if numericPrice.truncatingRemainder(dividingBy: 1) == 0 {
                price = String(format: "%.0f", numericPrice)
            } else {
                price = String(numericPrice)
            }
        } else if let intPrice = try? container.decode(Int.self, forKey: .price) {
            price = String(intPrice)
        } else {
            price = try container.decode(String.self, forKey: .price)
        }
    }
}

struct UpgradeLevel: Codable, Identifiable {
    let level: Int
    let attack: Double?
    let fireSpeed: Double?
    let armor: Double?
    let movement: Double?
    let time: String?
    let calcTime: Int?
    let price: Int?
    let diamonds: Int?

    var id: Int { level }
}

struct TankDetail: Codable {
    let turret: [UpgradeLevel]?
    let barrel: [UpgradeLevel]?
    let armor: [UpgradeLevel]?
    let engine: [UpgradeLevel]?
    let trucks: [UpgradeLevel]?
    let max: TankMax?
}

struct TankMax: Codable {
    let allMax: TankStatTotals?
    let maxMovementFireSpeed: TankStatBlock?
}

struct TankStatTotals: Codable {
    let attack: Double?
    let fireSpeed: Double?
    let armor: Double?
    let movement: Double?
    let levels: Int?
    let totalPrice: Double?
    let totalTime: Double?
    let totalDiamonds: Double?
    let days: Double?
}

struct TankStatBlock: Codable {
    let attack: Double?
    let fireSpeed: Double?
    let armor: Double?
    let movement: Double?
}
