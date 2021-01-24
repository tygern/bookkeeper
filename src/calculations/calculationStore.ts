import {Readable, Writable, writable} from "svelte/store"
import type {Calculation} from "./calculation"

export interface Storage {
    getItem(key: string): string | null
    setItem(key: string, value: string): void;
}

export class CalculationStore implements Readable<Calculation[]> {
    private readonly key = "bookkeeper-calculations"
    private readonly storage: Storage;
    private readonly retrievedValue: Calculation[]
    private readonly store: Writable<Calculation[]>

    subscribe: (run: Subscriber<Calculation[]>, invalidate?: Invalidator<Calculation[]>) => Unsubscriber;

    constructor(storage: Storage) {
        this.storage = storage;
        this.retrievedValue = JSON.parse(this.storage.getItem(this.key) || "[]")
        this.store = writable(this.retrievedValue)
        this.subscribe = this.store.subscribe
    }


    add(calculation: Calculation) {
        this.store.update(list => {
            let updatedList = [calculation, ...list]
            this.storage.setItem(this.key, JSON.stringify(updatedList))
            return updatedList
        })
    }

    clear() {
        this.storage.setItem(this.key, JSON.stringify([]))
        this.store.set([])
    }
}
