import SwiftUI

struct CostSummaryView: View {
    let title: String
    let cost: UpgradeCost

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text(title)
                .font(.headline)
            HStack {
                CostValueView(label: "Price", value: cost.price.formatted(.number))
                Spacer()
                CostValueView(label: "Diamonds", value: cost.diamonds.formatted())
            }
            CostValueView(label: "Time", value: cost.displayTime)
        }
        .padding()
        .background(Color(uiColor: .secondarySystemBackground), in: RoundedRectangle(cornerRadius: 12, style: .continuous))
    }
}

private struct CostValueView: View {
    let label: String
    let value: String

    var body: some View {
        VStack(alignment: .leading, spacing: 4) {
            Text(label)
                .font(.caption)
                .foregroundColor(.secondary)
            Text(value)
                .font(.body)
                .bold()
        }
    }
}

#Preview
struct CostSummaryView_Previews: PreviewProvider {
    static var previews: some View {
        CostSummaryView(title: "Total Cost", cost: UpgradeCost(price: 147200, time: 109350, displayTime: "1d 6h", diamonds: 140))
            .padding()
            .previewLayout(.sizeThatFits)
    }
}
