import {writable} from 'svelte/store';

export const alertStore = () => {
    const store = writable([])
    let id = 0;

    return {
        subscribe: store.subscribe,
        add: message => {
            let alert = new Alert(id++, message);
            store.update(list => [...list, alert])

            setTimeout(() => store.update(list => list.filter(a => a !== alert)), 2_000)
        }
    }
}

export class Alert {
    constructor(id, message) {
        this.id = id;
        this.message = message;
    }
}
