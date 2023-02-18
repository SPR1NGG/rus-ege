'use client';

import Counter from '@components/Counter';
import End from '@components/End';
import getRandomElement from '@helpers/getRandomElement';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/store';
import { words } from './emphasis.constants';
import Word from './Word';

export default function page() {
	const [word, setWord] = useState('');
	const dispatch = useAppDispatch();
	const counter = useAppSelector((state) => state.counterSlice);

	useEffect(() => {
		const newWord = getRandomElement(words);
		setWord(newWord);
	}, []);

	const updateWord = () => {
		words.splice(words.indexOf(word), 1);
		const newWord = getRandomElement(words);
		setWord(newWord);
	};

	if (words.length === 0) {
		return (
			<End result={counter}/>
		);
	}

	return (
		<div className="flex justify-center items-center h-full relative">
			<Counter result={counter} />
			<Word updateWord={updateWord} word={word} />
		</div>
	);
}
