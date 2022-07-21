import reducer, { increment, incrementByAmount } from "./customCounterSlice";

describe("Reducer of Redux toolkit", () => {
    describe("increment action", () => {
        let initialState = {
            mode: 0,
            value: 1,
            username: ""
        }
        it("should increment by 1 with mode 0", () => {
            const action = { type: increment.type }
            const state = reducer(initialState, action)
            expect(state.value).toEqual(2)
        })
        it("should increment by 100 with mode 1", () => {
            let initialState = {
                mode: 1,
                value: 1,
                username: ""
            }
            const action = { type: increment.type }
            const state = reducer(initialState, action)
            expect(state.value).toEqual(101)
        })
        it("should increment by 10000 with mode 2", () => {
            let initialState = {
                mode: 2,
                value: 1,
                username: ""
            }
            const action = { type: increment.type }
            const state = reducer(initialState, action)
            expect(state.value).toEqual(10001)
        })
    })

    describe("increment by amount action", () => {
        let initialState = {
            mode: 0,
            value: 1,
            username: ""
        }
        it("should increment by payload value with mode 0", () => {
            const action = { type: incrementByAmount.type, payload: 10 }
            const state = reducer(initialState, action)
            expect(state.value).toEqual(11)
        })
        it("should increment by 100 * payload value with mode 1", () => {
            let initialState = {
                mode: 1,
                value: 1,
                username: ""
            }
            const action = { type: incrementByAmount.type, payload: 10 }
            const state = reducer(initialState, action)
            expect(state.value).toEqual(1001)
        })
        it("should increment by 10000 * payload value with mode 0", () => {
            let initialState = {
                mode: 2,
                value: 1,
                username: ""
            }
            const action = { type: incrementByAmount.type, payload: 10 }
            const state = reducer(initialState, action)
            expect(state.value).toEqual(100001)
        })
    })
})