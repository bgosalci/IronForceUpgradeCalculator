import SwiftUI

struct StatBlockView: View {
    let title: String
    let stats: TankStats

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text(title)
                .font(.headline)
            HStack {
                StatValueView(label: "Attack", value: stats.attack)
                Spacer()
                StatValueView(label: "Fire Speed", value: stats.fireSpeed)
            }
            HStack {
                StatValueView(label: "Armor", value: stats.armor)
                Spacer()
                StatValueView(label: "Movement", value: stats.movement)
            }
        }
        .padding()
        .background(.thinMaterial, in: RoundedRectangle(cornerRadius: 12, style: .continuous))
    }
}

private struct StatValueView: View {
    let label: String
    let value: Double

    var body: some View {
        VStack(alignment: .leading) {
            Text(label)
                .font(.caption)
                .foregroundStyle(.secondary)
            Text(value.formatted(.number.precision(.fractionLength(0...1))))
                .font(.title3)
                .bold()
        }
    }
}

#Preview
struct StatBlockView_Previews: PreviewProvider {
    static var previews: some View {
        StatBlockView(
            title: "Potential Stats",
            stats: TankStats(attack: 120, fireSpeed: 11.2, armor: 450, movement: 60)
        )
        .padding()
        .previewLayout(.sizeThatFits)
    }
}
