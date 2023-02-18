import getRandomElement from '@helpers/getRandomElement';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import sentences, { Comma } from 'app/commas/commas.constants';
import { toast } from 'react-toastify';

export interface CommasState {
	sentence: Comma;
	active: boolean;
	answer: number[];
}

const initialState: CommasState = {
	active: false,
	answer: [],
	sentence: {
		answer: [],
		sentence: 'Тест',
	},
};

const time = 2500;

export const commasSlice = createSlice({
	name: 'commas',
	initialState,
	reducers: {
		setSentence: (state) => {
			state.sentence = getRandomElement(sentences);
		},
		right: (state) => {
			state.active = false;
			state.answer = [];
		},
		wrong: () => {

		},
		pushAnswer: (state, action: PayloadAction<number>) => {
			state.answer.push(action.payload);
		},
		removeAnswer: (state, action: PayloadAction<number>) => {
			state.answer.splice(state.answer.indexOf(action.payload), 1);
		},
	},
});

export const { setSentence, right, wrong, pushAnswer, removeAnswer } = commasSlice.actions;
export default commasSlice.reducer;
