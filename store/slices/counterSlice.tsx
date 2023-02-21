import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
	right: number;
	wrong: number;
}

const initialState: CounterState = {
	right: 0,
	wrong: 0,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		resetCounter: () => initialState,
		right: (state) => {
			state.right++;
		},
		wrong: (state) => {
			state.wrong++;
		},
	},
});

export const { right, wrong, resetCounter } = counterSlice.actions;
export default counterSlice;
