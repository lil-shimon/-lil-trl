import reducer, { fetchDummy, MODE_TYPE } from "./customCounterSlice";

describe("extra reducers", () => {
    const initialState = {
        mode: MODE_TYPE.NORMAL,
        value: 0,
        username: ""
    }
    it("should output 100 + payload when fulfilled", () => {
        const action = { type: fetchDummy.fulfilled.type, payload: 3 }
        const state = reducer(initialState, action)
        expect(state.value).toEqual(103)
    })
    it("should output 100 - payload when rejected", () => {
        const action = { type: fetchDummy.rejected.type, payload: 3 }
        const state = reducer(initialState, action)
        expect(state.value).toEqual(97)
    })
})