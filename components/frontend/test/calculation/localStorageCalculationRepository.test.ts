import {Calculation} from "../../src/calculations/calculation";
import {LocalStorageCalculationRepository, Storage} from "../../src/calculations/localStorageCalculationRepository";

let storage: Storage
let repo: LocalStorageCalculationRepository
let calculation: Calculation

beforeEach(() => {
    storage = new FakeStorage()
    repo = new LocalStorageCalculationRepository(storage)
    calculation = new Calculation(0, 1, 2, 3, 4, 5)
})

test("add", () => {
    repo.add(calculation)

    expect(repo.list()).toEqual([calculation])
})

test("clear", () => {
    repo.add(calculation)
    repo.clear()

    expect(repo.list()).toEqual([])
})

test("starts empty", () => {
    expect(repo.list()).toEqual([])
})

class FakeStorage implements Storage {
    private map: Map<string, string> = new Map<string, string>()

    getItem(key: string): string | null {
        return this.map.get(key) || null
    }

    setItem(key: string, value: string): void {
        this.map.set(key, value)
    }
}
