'use client';

import { words } from './emphasis.constants';
import getRandomElement from '@helpers/getRandomElement';
import Word from './Word';
import { useEffect, useState } from 'react';

export default function page() {
	const [word, setWord] = useState('');

	useEffect(() => {
		setWord(getRandomElement(words));
	}, []);

	const updateWord = () => {
		const word = getRandomElement(words);
		setWord(word);
		console.log(word);
	};

	return (
		<div className="flex justify-center items-center h-full relative">
			<Word updateWord={updateWord} word={word} />
		</div>
	);
}
