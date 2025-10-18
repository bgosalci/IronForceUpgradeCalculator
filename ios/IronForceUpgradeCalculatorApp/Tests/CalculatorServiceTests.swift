import XCTest
@testable import IronForceUpgradeCalculatorApp

final class CalculatorServiceTests: XCTestCase {
    private let service = TankCalculationService()

    func testHydrusCalculationsMatchJavaScriptImplementation() throws {
        let data = try loadTankData()
        guard let tank = data.tanks.first(where: { $0.name == "HYDRUS" }),
              let detail = data.tankDetails[tank.name] else {
            XCTFail("Missing HYDRUS data")
            return
        }

        let targetLevels = UpgradeLevels(turretLevel: 5, barrelLevel: 5, armorLevel: 5, engineLevel: 5, trucksLevel: 5)
        let currentLevels = UpgradeLevels(turretLevel: 2, barrelLevel: 2, armorLevel: 2, engineLevel: 2, trucksLevel: 2)

        let stats = service.calculateTankStats(tank: tank, detail: detail, levels: targetLevels)
        XCTAssertEqual(stats.attack, 66, accuracy: 0.0001)
        XCTAssertEqual(stats.fireSpeed, 13.3, accuracy: 0.0001)
        XCTAssertEqual(stats.armor, 379, accuracy: 0.0001)
        XCTAssertEqual(stats.movement, 62.2, accuracy: 0.0001)

        let totalsTarget = service.calculateTimeAndPriceForTankStats(detail: detail, levels: targetLevels)
        XCTAssertEqual(totalsTarget.totalTime, 145_800)
        XCTAssertEqual(totalsTarget.totalPrice, 147_200)
        XCTAssertEqual(totalsTarget.totalDiamonds, 140)

        let totalsCurrent = service.calculateTimeAndPriceForTankStats(detail: detail, levels: currentLevels)
        XCTAssertEqual(totalsCurrent.totalTime, 4_800)
        XCTAssertEqual(totalsCurrent.totalPrice, 23_600)
        XCTAssertEqual(totalsCurrent.totalDiamonds, 10)

        var state = service.createTankStatData()
        state.tankLevels = targetLevels
        state.currentTankLevels = currentLevels
        state.medalUsed = true

        let adjustedTargetTime = Int(Double(totalsTarget.totalTime) * 0.75)
        let adjustedCurrentTime = Int(Double(totalsCurrent.totalTime) * 0.75)

        state.tankUpgradeCostAndTime = UpgradeCost(
            price: totalsTarget.totalPrice,
            time: adjustedTargetTime,
            displayTime: service.formatTotalTime(adjustedTargetTime),
            diamonds: totalsTarget.totalDiamonds
        )

        state.currentTankUpgradeCostAndTime = UpgradeCost(
            price: totalsCurrent.totalPrice,
            time: adjustedCurrentTime,
            displayTime: service.formatTotalTime(adjustedCurrentTime),
            diamonds: totalsCurrent.totalDiamonds
        )

        service.calculateTimeAndCostFromCurrentToPotential(&state)

        XCTAssertEqual(state.timeAndCostFromCurrentToPotentialStats.price, 123_600)
        XCTAssertEqual(state.timeAndCostFromCurrentToPotentialStats.time, 105_750)
        XCTAssertEqual(state.timeAndCostFromCurrentToPotentialStats.diamonds, 130)
        XCTAssertEqual(state.timeAndCostFromCurrentToPotentialStats.displayTime, "1d 5h 22m")
    }

    func testFormatTotalTimeProducesExpectedStrings() {
        XCTAssertEqual(service.formatTotalTime(0), "0")
        XCTAssertEqual(service.formatTotalTime(60), "1m")
        XCTAssertEqual(service.formatTotalTime(3_600), "1h")
        XCTAssertEqual(service.formatTotalTime(3_660), "1h 1m")
        XCTAssertEqual(service.formatTotalTime(105_750), "1d 5h 22m")
    }

    private func loadTankData() throws -> TankData {
        let bundle = Bundle(for: CalculatorServiceTests.self)
        let decoder = JSONDecoder()

        if let url = bundle.url(forResource: "tanks", withExtension: "json") {
            let data = try Data(contentsOf: url)
            return try decoder.decode(TankData.self, from: data)
        }

        guard let url = Bundle.main.url(forResource: "tanks", withExtension: "json") else {
            throw NSError(domain: "CalculatorServiceTests", code: 0, userInfo: [NSLocalizedDescriptionKey: "Unable to locate tanks.json"])
        }

        let data = try Data(contentsOf: url)
        return try decoder.decode(TankData.self, from: data)
    }
}
