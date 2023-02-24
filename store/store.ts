import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import commasSlice from './slices/commasSlice';
import counterSlice from './slices/counterSlice';
import emphasisSlice from './slices/emphasisSlice';
import formSlice from './slices/formSlice';
import letterSlice from './slices/letterSlice';
import paronymSlice from './slices/paronymSlice';
import surplusSlice from './slices/surplusSlice';

export const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		emphasis: emphasisSlice.reducer,
		commas: commasSlice.reducer,
		paronyms: paronymSlice.reducer,
		surplus: surplusSlice.reducer,
		form: formSlice.reducer,
		letter: letterSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
