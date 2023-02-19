'use client';

import Counter from '@components/Counter';
import End from '@components/End';
import Sentence from '@components/Sentence';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { right, wrong } from 'store/slices/counterSlice';
import { newParonym } from 'store/slices/paronymSlice';
import { useAppDispatch, useAppSelector } from 'store/store';
import paronyms from './paronym.constants';
import ParonymVariant from './ParonymVariant';

const time = 2000;

export default function page() {
	const dispatch = useAppDispatch();
	const { counter } = useAppSelector((state) => state);
	const { sentence, paronyms } = useAppSelector((state) => state.paronyms);
	const [active, setActive] = useState(false);

	useEffect(() => {
		dispatch(newParonym());
	}, []);

	const rightAnswer = () => {
		dispatch(right());
		setActive(true);

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
				dispatch(newParonym());
				setActive(false);
			},
		});
	};

	const wrongAnswer = () => {
		dispatch(wrong());
		setActive(true);

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
				dispatch(newParonym());
				setActive(false);
			},
		});
	};

	if (sentence === undefined) {
		return <End result={counter} />;
	}
	
	return (
		<>
			<Counter result={counter} />
			<div className="flex justify-center items-center h-full relative flex-col p-4">
				<Sentence>{sentence.sentence}</Sentence>

				<div
					className={classNames('flex gap-10 justify-center flex-wrap w-full mt-4', {
						'pointer-events-none': active,
					})}
				>
					{sentence.variants.map((variant) => (
						<ParonymVariant
							key={variant}
							status={variant.toLowerCase() === sentence.answer.toLowerCase()}
							onClick={
								variant.toLowerCase() === sentence.answer.toLowerCase() ? rightAnswer : wrongAnswer
							}
						>
							{variant}
						</ParonymVariant>
					))}
				</div>

				<ToastContainer />
			</div>
		</>
	);
}
