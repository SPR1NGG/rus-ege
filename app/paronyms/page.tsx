'use client';

import Counter from '@components/Counter';
import End from '@components/End';
import Sentence from '@components/Sentence';
import getRandomElement from '@helpers/getRandomElement';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import paronyms, { Paronym } from './paronym.constants';
import ParonymVariant from './ParonymVariant';

const time = 2000;

export default function page() {
	const [sentence, setSentence] = useState<Paronym>({ answer: '', sentence: '', variants: [] });
	const [counter, setCounter] = useState({
		right: 0,
		wrong: 0,
	});

	const setNewSentence = () => {
		const index = paronyms.indexOf(sentence);
		if (index > -1) {
			paronyms.splice(paronyms.indexOf(sentence), 1);
		}
		const newSentence = getRandomElement(paronyms);
		setSentence(newSentence);
	};

	useEffect(() => {
		setNewSentence();
	}, []);

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
				setNewSentence();
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
			onClose: () => {
				setNewSentence();
			},
		});
	};

	if (paronyms.length === 0) {
		return <End result={counter} />;
	}

	return (
		<>
			<Counter result={counter} />
			<div className="flex justify-center items-center h-full relative flex-col p-4">
				<Sentence>{sentence.sentence}</Sentence>

				<div className="flex gap-10 justify-center flex-wrap w-full mt-4">
					{sentence.variants.map((variant) => (
						<ParonymVariant
							key={variant}
							status={variant.toLowerCase() === sentence.answer.toLowerCase()}
							onClick={variant.toLowerCase() === sentence.answer.toLowerCase() ? right : wrong}
						>
							{variant}
						</ParonymVariant>
					))}
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
			</div>
		</>
	);
}
