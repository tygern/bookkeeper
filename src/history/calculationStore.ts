import {Readable, writable} from "svelte/store"
import type {Calculation} from "./calculation"

export class CalculationStore implements Readable<Calculation[]> {
    private key = "bookkeeper-calculations"
    private retrievedValue: Calculation[] = JSON.parse(localStorage.getItem(this.key) || "[]")
    private store = writable(this.retrievedValue)

    subscribe = this.store.subscribe

    add(calculation: Calculation) {
        this.store.update(list => {
            let updatedList = [calculation, ...list]
            localStorage.setItem(this.key, JSON.stringify(updatedList))
            return updatedList
        })
    }

    clear() {
        localStorage.setItem(this.key, JSON.stringify([]))
        this.store.set([])
    }
}
