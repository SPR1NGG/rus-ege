'use client';

import Button from '@components/Button';
import Counter from '@components/Counter';
import Sentence from '@components/Sentence';
import compareArrays from '@helpers/compareArrays';
import toastError from '@helpers/toastError';
import toastSucces from '@helpers/toastSuccess';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { addAnswer, newComma, removeAnswer, resetAnswer } from 'store/slices/commasSlice';
import { resetCounter, right, wrong } from 'store/slices/counterSlice';
import { useAppDispatch, useAppSelector } from 'store/store';
import Variant from '../../components/Variant';

export default function page() {
	const dispatch = useAppDispatch();
	const { answer, sentence } = useAppSelector((state) => state.commas);
	const { counter } = useAppSelector((state) => state);
	const [active, setActive] = useState(false);

	const rightAnswer = () => {
		dispatch(right());

		toastSucces({
			onClose: () => {
				setActive(false);
				dispatch(newComma());
				dispatch(resetAnswer());
			},
		});
	};

	const wrongAnswer = () => {
		dispatch(wrong());
		toastError();
	};

	const addVariant = (variant: number) => {
		dispatch(addAnswer(variant));
	};

	const removeVariant = (variant: number) => {
		dispatch(removeAnswer(variant));
	};

	useEffect(() => {
		dispatch(newComma());
		dispatch(resetCounter());
	}, []);

	return (
		<>
			<Counter result={counter} />
			<div className="h-full flex flex-col gap-10 justify-center items-center">
				<Sentence className="text-xl sm:text-2xl">{sentence.sentence}</Sentence>
				<div className="flex gap-5 justify-center flex-wrap">
					{!active && (
						<>
							{[...Array(+sentence.maximum! || 5)].map((_, i) => (
								<Variant addAnswer={addVariant} removeAnswer={removeVariant} key={i}>
									{i + 1}
								</Variant>
							))}
						</>
					)}
				</div>
				<Button
					className="text-xl"
					onClick={() => {
						if (compareArrays(answer, sentence.answer)) {
							rightAnswer();
							setActive(true);
						} else {
							wrongAnswer();
						}
					}}
				>
					Проверить
				</Button>
			</div>
			<ToastContainer pauseOnFocusLoss={false} />
		</>
	);
}
