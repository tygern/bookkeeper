import {writable} from 'svelte/store';

export const calculationStore = () => {
    const key = "bookkeeper-calculations"

    const retrievedValue = JSON.parse(localStorage.getItem(key)) || []
    const store = writable(retrievedValue)

    return {
        subscribe: store.subscribe,
        add: calculation => {
            store.update(list => {
                let updatedList = [calculation, ...list];
                localStorage.setItem(key, JSON.stringify(updatedList));
                return updatedList;
            })
        },
        clear: () => {
            localStorage.setItem(key, JSON.stringify([]));
            store.set([])
        }
    }
}
