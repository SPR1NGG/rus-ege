'use client';

import Button from '@components/Button';
import Counter from '@components/Counter';
import End from '@components/End';
import Sentence from '@components/Sentence';
import compareArrays from '@helpers/compareArrays';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { addAnswer, newComma, removeAnswer, resetAnswer } from 'store/slices/commasSlice';
import { resetCounter, right, wrong } from 'store/slices/counterSlice';
import { useAppDispatch, useAppSelector } from 'store/store';
import Variant from './Variant';

const time = 2000;

export default function page() {
	const dispatch = useAppDispatch();
	const { answer, sentence } = useAppSelector((state) => state.commas);
	const { counter } = useAppSelector((state) => state);
	const [active, setActive] = useState(false);

	const rightAnswer = () => {
		dispatch(right());

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
				setActive(false);
				dispatch(newComma());
				dispatch(resetAnswer());
			},
		});
	};

	const wrongAnswer = () => {
		dispatch(wrong());
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
			<div className="h-full flex flex-col gap-10 justify-center items-center p-4">
				<Sentence>{sentence.sentence}</Sentence>
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
