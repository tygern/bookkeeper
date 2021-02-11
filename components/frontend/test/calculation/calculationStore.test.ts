import {CalculationRepository, CalculationStore} from "../../src/calculations/calculationStore";
import {Calculation} from "../../src/calculations/calculation";

let store: CalculationStore
let addedCalculation: Calculation
let repo: CalculationRepository

beforeEach(() => {
    repo = new FakeCalculationRepository()
    store = new CalculationStore(repo)
    addedCalculation = new Calculation(0, 1, 2, 3, 4, 5)
})

test("add sends to subscribers", done => {
    store.add(addedCalculation)

    let unsubscribe = store.subscribe(storedCalculations => {
        expect(storedCalculations).toEqual([addedCalculation])
        done()
    })

    unsubscribe()
}, 100)

test("add updates the repo", () => {
    store.add(addedCalculation)

    expect(repo.list()).toEqual([addedCalculation])
})

test("clear", done => {
    store.add(addedCalculation)
    store.clear()

    let unsubscribe = store.subscribe(storedCalculations => {
        expect(storedCalculations).toEqual([])
        done()
    })

    unsubscribe()
}, 100)

class FakeCalculationRepository implements CalculationRepository {
    private calculationList: Calculation[] = []

    add(calculation: Calculation): void {
        this.calculationList.push(calculation)
    }

    clear(): void {
        this.calculationList = []
    }

    list(): Calculation[] {
        return this.calculationList;
    }
}
