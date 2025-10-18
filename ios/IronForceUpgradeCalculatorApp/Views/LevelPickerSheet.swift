import SwiftUI

struct LevelPickerSheet: View {
    let title: String
    let availableLevels: [Int]
    let initialValue: Int
    let onSelection: (Int) -> Void

    @Environment(\.dismiss) private var dismiss
    @State private var selection: Int

    init(title: String, availableLevels: [Int], initialValue: Int, onSelection: @escaping (Int) -> Void) {
        self.title = title
        self.availableLevels = availableLevels
        self.initialValue = initialValue
        self.onSelection = onSelection
        _selection = State(initialValue: initialValue)
    }

    var body: some View {
        NavigationStack {
            Form {
                Picker("Level", selection: $selection) {
                    ForEach(availableLevels, id: \.self) { level in
                        Text(String(level)).tag(level)
                    }
                }
                .pickerStyle(.wheel)
            }
            .navigationTitle(title)
            .toolbar {
                ToolbarItem(placement: .confirmationAction) {
                    Button("Done") {
                        onSelection(selection)
                        dismiss()
                    }
                }
                ToolbarItem(placement: .cancellationAction) {
                    Button("Cancel") { dismiss() }
                }
            }
        }
    }
}

struct LevelPickerSheet_Previews: PreviewProvider {
    static var previews: some View {
        LevelPickerSheet(title: "Turret Level", availableLevels: Array(0...5), initialValue: 2) { _ in }
    }
}
