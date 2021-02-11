import {Readable, Writable, writable} from "svelte/store"
import type {Calculation} from "./calculation"

export interface CalculationRepository {
    list(): Calculation[]
    add(calculation: Calculation): void
    clear(): void
}

export class CalculationStore implements Readable<Calculation[]> {
    private readonly repo: CalculationRepository;
    private readonly store: Writable<Calculation[]>

    subscribe: (run: Subscriber<Calculation[]>, invalidate?: Invalidator<Calculation[]>) => Unsubscriber;

    constructor(repo: CalculationRepository) {
        this.repo = repo;
        this.store = writable(this.repo.list())
        this.subscribe = this.store.subscribe
    }

    add(calculation: Calculation) {
        this.repo.add(calculation)
        this.store.set(this.repo.list())
    }

    clear() {
        this.repo.clear()
        this.store.set([])
    }
}
