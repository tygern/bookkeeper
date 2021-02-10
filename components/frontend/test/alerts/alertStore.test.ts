import {Alert, AlertStore} from "../../src/alerts/alertStore";

jest.useFakeTimers()

let store: AlertStore

beforeEach(() => {
    store = new AlertStore();
})

test("add sends to subscribers", done => {
    store.add("some message")
    store.add("another message")

    let unsubscribe = store.subscribe(alerts => {
        expect(alerts).toEqual([
            new Alert(0, "some message"),
            new Alert(1, "another message"),
        ])
        done()
    })
    unsubscribe()
}, 100)

test("removes messages after two seconds", done => {
    store.add("some message")

    jest.advanceTimersByTime(2_000)

    let unsubscribe = store.subscribe(alerts => {
        expect(alerts).toEqual([])
        done()
    })
    unsubscribe()
}, 100)
