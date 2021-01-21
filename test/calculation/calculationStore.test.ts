import {CalculationStore, LocalStorage} from "../../src/history/calculationStore";
import {Calculation} from "../../src/history/calculation";

let storage: LocalStorage
let store: CalculationStore
let addedCalculation: Calculation

beforeEach(() => {
    storage = new MockStorage()
    store = new CalculationStore(storage)
    addedCalculation = new Calculation(0, 1, 2, 3, 4, 5)
})

test("add sends to subscribers", done => {
    store.add(addedCalculation)

    store.subscribe(storedCalculations => {
        expect(storedCalculations).toEqual([addedCalculation])
        done()
    })
}, 100)

test("add saves to local storage", () => {
    store.add(addedCalculation)

    let storedCalculations = JSON.parse(storage.getItem("bookkeeper-calculations") || "[]")
    expect(storedCalculations).toEqual([addedCalculation])
})

class MockStorage implements LocalStorage {
    private storedValue: string | null = null
    private mockKey = "bookkeeper-calculations"

    getItem(key: string): string | null {
        return key == this.mockKey ? this.storedValue : null;
    }

    setItem(key: string, value: string): void {
        if (key == this.mockKey) {
            this.storedValue = value
        }
    }
}
