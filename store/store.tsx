import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import commasSlice from './slices/commasSlice';
import counterSlice from './slices/counterSlice';
import emphasisSlice from './slices/emphasisSlice';
import paronymSlice from './slices/paronymSlice';

export const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		emphasis: emphasisSlice.reducer,
		commas: commasSlice.reducer,
		paronyms: paronymSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
