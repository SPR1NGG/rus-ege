'use client';

import { words } from './emphasis.constants';
import getRandomElement from '@helpers/getRandomElement';
import Word from './Word';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@components/Button';
import End from '@components/End';

export default function page() {
	const [word, setWord] = useState('');
	const [counter, setCounter] = useState({
		right: 0,
		wrong: 0,
	});

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
			<Word counter={counter} setCounter={setCounter} updateWord={updateWord} word={word} />
		</div>
	);
}
