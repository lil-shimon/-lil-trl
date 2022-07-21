import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from '../../app/store';
import axios from "axios"

export const MODE_TYPE = {
    NORMAL: 0,
    HUNDRED: 1,
    TEN_THOUSAND: 2,
} as const

const sleep = (msec: number) => {
    const start = new Date()
    while (Number(new Date()) - Number(start) < msec) ;
}

export const fetchDummy = createAsyncThunk("fetch/dummy", async (num: number) => {
    await sleep(2000)
    return num;
})

export const fetchJSON = createAsyncThunk("fetch/api", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1")
    const { username } = res.data
    return username
})

interface CustomCounterState {
    mode: number;
    value: number;
    username: string
}

const initialState: CustomCounterState = {
    mode: MODE_TYPE.NORMAL,
    value: 0,
    username: ""
}

export const customCounterSlice = createSlice({
    name: "customCounter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            switch (state.mode) {
                case MODE_TYPE.NORMAL:
                    state.value += 1;
                    break
                case MODE_TYPE.HUNDRED:
                    state.value += 100;
                    break
                case MODE_TYPE.TEN_THOUSAND:
                    state.value += 10000;
                    break;
                default:
                    break
            }
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            switch (state.mode) {
                case MODE_TYPE.NORMAL:
                    state.value += action.payload
                    break;
                case MODE_TYPE.HUNDRED:
                    state.value += 100 * action.payload
                    break;
                case MODE_TYPE.TEN_THOUSAND:
                    state.value += 10000 * action.payload
                    break;
                default:
                    break;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDummy.fulfilled, (state, action) => {
            state.value = 100 + action.payload
        });
        builder.addCase(fetchDummy.rejected, (state, action) => {
            state.value = 100 - Number(action.payload)
        });
        builder.addCase(fetchJSON.fulfilled, (state, action) => {
            state.username = action.payload
        });
    }
})

export const { increment, decrement, incrementByAmount } = customCounterSlice.actions;
export default customCounterSlice.reducer;

export const customCounterState = (state: RootState) => state.customCounter;
export const usernameState = (state: RootState) => state.customCounter.username;