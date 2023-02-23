import getRandomElement from '@helpers/getRandomElement';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { form, Form } from 'app/form/form.constants';

interface initialState {
	form: Form[];
	task: Form;
	answer: string;
}

const initialState: initialState = {
	form,
	task: {
		answer: '',
		words: [],
	},
	answer: '',
};

const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		setForm: (state) => {
			const newTask = getRandomElement(state.form);
			state.form.splice(state.form.indexOf(newTask), 1);
			state.task = newTask;
			state.answer = '';
		},
		updateFormAnswer: (state, action: PayloadAction<string>) => {
			state.answer = action.payload;
		},
		resetForm: () => initialState,
	},
});

export const { setForm, updateFormAnswer, resetForm } = formSlice.actions;
export default formSlice;
