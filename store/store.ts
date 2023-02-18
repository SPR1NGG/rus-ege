import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { TypedUseSelectorHook } from 'react-redux/es/types';
import commasSlice from './slices/commasSlice';
import counterSlice from './slices/counterSlice';

export const store = configureStore({
	reducer: {
		counterSlice,
		commasSlice
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
