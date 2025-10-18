import Foundation

enum TankDataServiceError: Error {
    case resourceNotFound
    case failedToDecode(Error)
}

final class TankDataService {
    private lazy var decoder: JSONDecoder = {
        let decoder = JSONDecoder()
        return decoder
    }()

    func loadTanks() throws -> TankData {
        guard let url = Bundle.main.url(forResource: "tanks", withExtension: "json") else {
            throw TankDataServiceError.resourceNotFound
        }
        do {
            let data = try Data(contentsOf: url)
            return try decoder.decode(TankData.self, from: data)
        } catch {
            throw TankDataServiceError.failedToDecode(error)
        }
    }
}
