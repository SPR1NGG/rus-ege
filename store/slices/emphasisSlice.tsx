import getRandomElement from '@helpers/getRandomElement';
import { createSlice } from '@reduxjs/toolkit';
import { words } from 'app/emphasis/emphasis.constants';

interface EmphasisState {
	word: string;
}

const initialState: EmphasisState = {
	word: '',
};

const emphasisSlice = createSlice({
	name: 'emphasis',
	initialState,
	reducers: {
		newWord: (state) => {
			const newWord = getRandomElement(words);
			words.splice(words.indexOf(newWord), 1);
			state.word = getRandomElement(words);
		},
	},
});

export const { newWord } = emphasisSlice.actions;
export default emphasisSlice;
