import getRandomElement from '@helpers/getRandomElement';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { surplus, Surplus } from 'app/surplus/surplus.constants';

interface initialState {
	surplus: Surplus[];
	sentence: Surplus;
	answer: string;
}

const initialState: initialState = {
	surplus,
	sentence: {
		sentence: '',
		answer: [],
	},
	answer: '',
};

// export const updateAnswer = createAsyncThunk('surplus/getAllUsers', async (word: string) => {
// 	return word;
// });

const surplusSlice = createSlice({
	name: 'surplus',
	initialState,
	reducers: {
		newSurplus: (state) => {
			const newSurplus = getRandomElement(state.surplus);
			state.surplus.splice(state.surplus.indexOf(newSurplus), 1);
			state.sentence = newSurplus;
		},
		updateAnswer: (state, action: PayloadAction<string>) => {
			state.answer = action.payload;
		},
		resetSurplus: () => initialState,
	},
	// extraReducers(builder) {
	// 	builder.addCase(updateAnswer.fulfilled, (state, action) => {
	// 		state.answer = action.payload;
	// 	});
	// },
});

export const { newSurplus, resetSurplus, updateAnswer } = surplusSlice.actions;
export default surplusSlice;
