import {Readable, Writable, writable} from "svelte/store"

export class AlertStore implements Readable<Alert[]> {
    private store: Writable<Alert[]> = writable([])
    private id = 0

    subscribe = this.store.subscribe

    add(message: string) {
        let alert = new Alert(this.id++, message)
        this.store.update(list => [...list, alert])

        setTimeout(() => this.store.update(list => list.filter(a => a !== alert)), 2_000)
    }
}

class Alert {
    constructor(readonly id: number, readonly message: string) {
    }
}
