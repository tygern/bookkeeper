import type {CalculationRepository} from "./calculationStore";
import type {Calculation} from "./calculation";

export interface Storage {
    getItem(key: string): string | null
    setItem(key: string, value: string): void;
}

export class LocalStorageCalculationRepository implements CalculationRepository {
    private readonly key = "bookkeeper-calculations"
    private readonly storage: Storage

    constructor(storage: Storage) {
        this.storage = storage;
    }

    add(calculation: Calculation): void {
        let updatedList = [calculation, ...this.list()]
        this.storage.setItem(this.key, JSON.stringify(updatedList))
    }

    clear(): void {
        this.storage.setItem(this.key, "[]")
    }

    list(): Calculation[] {
        return JSON.parse(this.storage.getItem(this.key) || "[]");
    }
}
