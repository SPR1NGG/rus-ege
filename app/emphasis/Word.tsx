'use client';
import toastError from '@helpers/toastError';
import toastSucces from '@helpers/toastSuccess';
import classNames from 'classnames';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { right, wrong } from 'store/slices/counterSlice';
import { useAppDispatch } from 'store/store';
import { vowels } from './emphasis.constants';

interface Props {
	word: string;
	updateWord: () => void;
}

export default function Word({ word, updateWord }: Props) {
	const dispatch = useAppDispatch();
	const [active, setActive] = useState(false);
	const data = word.match(/[А-ЯЁ]/)!;
	const rest = word.slice(word.indexOf(' '));
	const currentWord = word.includes(' ') ? word.slice(0, word.indexOf(' ')) : word;

	const rightAnswer = () => {
		setActive(true);
		dispatch(right());
		toastSucces({
			onClose: () => {
				setActive(false);
				updateWord();
			},
		});
	};

	const wrongAnswer = () => {
		setActive(true);
		dispatch(wrong());
		toastError({
			onClose: () => {
				setActive(false);
				updateWord();
			},
		});
	};

	return (
		<div>
			<div className="bg-white rounded p-2 sm:p-4 flex flex-wrap justify-center text-gray-900">
				{[...currentWord].map((letter, index) => {
					return (
						<div
							key={index}
							className={classNames(
								'md:text-4xl md:w-[56px] md:h-[70px] text-XL w-[30px] h-[38px] m-1 rounded p-1 cursor-pointer aspect-square  flex items-center justify-center leading-none',
								{
									'pointer-events-none': active,
									'bg-green-600': index === data.index && active,
									'bg-red-500': active && data.index !== index && vowels.includes(letter),
									'bg-slate-200': !active,
									'bg-gray-200 opacity-75':
										active && !vowels.includes(letter) && data.index !== index,
								},
							)}
							onClick={
								vowels.includes(letter.toLowerCase())
									? index === data.index
										? rightAnswer
										: wrongAnswer
									: undefined
							}
						>
							{letter.toLowerCase()}
						</div>
					);
				})}
				<ToastContainer pauseOnFocusLoss={false} />
			</div>
			{word.includes(' ') && <span className="text-gray-400 absolute text-xl">{rest}</span>}
		</div>
	);
}
