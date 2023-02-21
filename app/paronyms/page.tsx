'use client';

import Counter from '@components/Counter';
import End from '@components/End';
import Sentence from '@components/Sentence';
import toastError from '@helpers/toastError';
import toastSucces from '@helpers/toastSuccess';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { resetCounter, right, wrong } from 'store/slices/counterSlice';
import { newParonym } from 'store/slices/paronymSlice';
import { useAppDispatch, useAppSelector } from 'store/store';
import ParonymVariant from './ParonymVariant';

export default function page() {
	const dispatch = useAppDispatch();
	const { counter } = useAppSelector((state) => state);
	const { sentence } = useAppSelector((state) => state.paronyms);
	const [active, setActive] = useState(false);

	useEffect(() => {
		dispatch(newParonym());
		dispatch(resetCounter());
	}, []);

	const rightAnswer = () => {
		dispatch(right());
		setActive(true);

		toastSucces({
			onClose: () => {
				dispatch(newParonym());
				setActive(false);
			},
		});
	};

	const wrongAnswer = () => {
		dispatch(wrong());
		setActive(true);

		toastError({
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
