import getRandomElement from '@helpers/getRandomElement';
import { createSlice } from '@reduxjs/toolkit';
import { together, Together } from 'app/together/together.constants';

interface initialState {
	together: Together[];
	task: Together;
}

const initialState: initialState = {
	together,
	task: {
		sentence: '',
		isTogether: false,
	},
};

const togetherSlice = createSlice({
	name: 'together',
	initialState,
	reducers: {
		setTogether: (state) => {
			const newTogether = getRandomElement(state.together);
			state.together.splice(state.together.indexOf(newTogether), 1);
			state.task = newTogether;
		},
	},
});

export const { setTogether } = togetherSlice.actions;
export default togetherSlice;
