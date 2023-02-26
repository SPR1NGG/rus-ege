import getRandomElement from '@helpers/getRandomElement';
import removeElement from '@helpers/removeElement';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { place, Place } from 'app/place/place.constants';

interface initialState {
	place: Place[];
	task: Place;
	answer: number[];
}

const initialState: initialState = {
	place,
	task: {
		sentence: '',
		answer: [],
	},
	answer: [],
};

const placeSlice = createSlice({
	name: 'place',
	initialState,
	reducers: {
		setPlace: (state) => {
			const newPlace = getRandomElement(state.place);
			state.task = newPlace;
			state.place.splice(state.place.indexOf(newPlace), 1);
			state.answer = [];
		},
		addPlaceAnswer: (state, action: PayloadAction<number>) => {
			state.answer.push(action.payload);
		},
		removePlaceAnswer: (state, action: PayloadAction<number>) => {
			removeElement(state.answer, action.payload);
		},
		resetPlace: () => initialState,
	},
});

export const { resetPlace, setPlace, addPlaceAnswer, removePlaceAnswer } = placeSlice.actions;
export default placeSlice;
