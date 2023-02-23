import getRandomElement from '@helpers/getRandomElement';
import { createSlice } from '@reduxjs/toolkit';
import paronyms, { Paronym } from 'app/paronyms/paronym.constants';

interface initialState {
	paronyms: Paronym[];
	sentence: Paronym;
}

const initialState: initialState = {
	paronyms,
	sentence: {
		sentence: '',
		answer: '',
		variants: [],
	},
};

const paronymSlice = createSlice({
	name: 'paronym',
	initialState,
	reducers: {
		newParonym: (state) => {
			const newSentence = getRandomElement(state.paronyms);
			const index = state.paronyms.indexOf(newSentence);
			if (index > -1) state.paronyms.splice(index, 1);
			state.sentence = newSentence;
		},
	},
});

export const { newParonym } = paronymSlice.actions;
export default paronymSlice;
