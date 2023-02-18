import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Counter {
	right: number;
	wrong: number;
}

export interface CounterState {
	right: number;
	wrong: number;
}

const initialState: CounterState = {
	right: 0,
	wrong: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		right: (state) => {
			state.right++;
		},

		wrong: (state) => {
			state.wrong++;
		}
	}
})

export const {right,wrong} = counterSlice.actions
export default counterSlice.reducer;