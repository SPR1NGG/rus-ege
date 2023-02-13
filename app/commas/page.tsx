'use client';

import Counter from '@components/Counter';
import Sentence from '@components/Sentence';
import getRandomElement from '@helpers/getRandomElement';
import { useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import sentences, { Comma } from './commas.constants';
import Variant from './Variant';

const time = 2000;

export default function page() {
	const [sentence, setSentence] = useState<Comma>({ answer: [], sentence: '' });
	const [active, setActive] = useState(false);
	const [counter, setCounter] = useState({
		right: 0,
		wrong: 0,
	});
	const answer = useRef([]);

	const right = () => {
		setCounter((prev) => ({ ...prev, right: prev.right + 1 }));

		toast.success('Правильно! 😃', {
			position: 'bottom-left',
			autoClose: time,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
			onClose: () => {
				setSentence(getRandomElement(sentences));
				setActive(false);
				answer.current = [];
			},
		});
	};

	const wrong = () => {
		setCounter((prev) => ({ ...prev, wrong: prev.wrong + 1 }));
		toast.error('Неправильно 😔', {
			position: 'bottom-left',
			autoClose: time,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
	};

	useEffect(() => {
		setSentence(getRandomElement(sentences));
	}, []);

	return (
		<>
			<Counter result={counter} />
			<div className="h-full flex flex-col gap-10 justify-center items-center p-4">
				<Sentence>{sentence.sentence}</Sentence>
				<div className="flex gap-5 justify-center flex-wrap">
					{!active && (
						<>
							{[...Array(+sentence.maximum! || 5)].map((_, i) => (
								<Variant answer={answer.current} key={i}>
									{i + 1}
								</Variant>
							))}
						</>
					)}
				</div>
				<button
					onClick={() => {
						if (JSON.stringify(answer.current.sort()) === JSON.stringify(sentence.answer.sort())) {
							right();
							setActive(true);
						} else {
							wrong();
						}
					}}
					className="bg-emerald-600 transition-all text-white p-4 rounded font-medium disabled:opacity-10"
					disabled={active}
				>
					Проверить
				</button>
			</div>
			<ToastContainer
				position="bottom-left"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
				theme="light"
				limit={2}
			/>
		</>
	);
}
