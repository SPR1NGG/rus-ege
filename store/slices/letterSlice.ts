import getRandomElement from '@helpers/getRandomElement';
import { createSlice } from '@reduxjs/toolkit';
import { letter, Letter } from 'app/letter/letter.constants';

interface initialState {
	letter: Letter[];
	task: Letter;
}

const initialState: initialState = {
	letter,
	task: {
		task: '',
		isSame: false,
	},
};

const letterSlice = createSlice({
	name: 'letter',
	initialState,
	reducers: {
		setLetter: (state) => {
			const newLetter = getRandomElement(state.letter);
			state.letter.splice(state.letter.indexOf(newLetter), 1);
			state.task = newLetter;
		},
		resetLetter: () => initialState,
	},
});

export const { setLetter, resetLetter } = letterSlice.actions;
export default letterSlice;
