'use client';

import Counter from '@components/Counter';
import End from '@components/End';
import { useEffect } from 'react';
import { resetCounter } from 'store/slices/counterSlice';
import { newWord } from 'store/slices/emphasisSlice';
import { useAppDispatch, useAppSelector } from 'store/store';
import { words } from './emphasis.constants';
import Word from './Word';

export default function page() {
	const dispatch = useAppDispatch();
	const { word } = useAppSelector((state) => state.emphasis);
	const { counter } = useAppSelector((state) => state);

	useEffect(() => {
		dispatch(newWord());
		dispatch(resetCounter());
	}, []);

	const updateWord = () => {
		dispatch(newWord());
	};

	if (words.length === 0) {
		return <End result={counter} />;
	}

	return (
		<div className="flex justify-center items-center h-full relative">
			<Counter result={counter} />
			<Word updateWord={updateWord} word={word} />
		</div>
	);
}
