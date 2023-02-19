import getRandomElement from '@helpers/getRandomElement';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import sentences, { Comma } from 'app/commas/commas.constants';

interface initialState {
	sentence: Comma;
	answer: number[];
}

const initialState: initialState = {
	answer: [],
	sentence: {
		sentence: '',
		answer: [],
	},
};

const commasSlice = createSlice({
	name: 'commas',
	initialState,
	reducers: {
		newComma: (state) => {
			state.sentence = getRandomElement(sentences);
		},
		addAnswer: (state, action: PayloadAction<number>) => {
			state.answer.push(action.payload);
		},
		removeAnswer: ({ answer }, action: PayloadAction<number>) => {
			answer.splice(answer.indexOf(+action.payload), 1);
		},
		resetAnswer: (state) => {
			state.answer = [];
		},
	},
});

export const { addAnswer, newComma, removeAnswer, resetAnswer } = commasSlice.actions;
export default commasSlice;
