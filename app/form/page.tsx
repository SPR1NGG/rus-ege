'use client';

import Button from '@components/Button';
import Counter from '@components/Counter';
import End from '@components/End';
import Sentence from '@components/Sentence';
import TextBox from '@components/TextBox';
import toastError from '@helpers/toastError';
import toastSucces from '@helpers/toastSuccess';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { resetCounter, right, wrong } from 'store/slices/counterSlice';
import { resetForm, setForm, updateFormAnswer } from 'store/slices/formSlice';
import { useAppDispatch, useAppSelector } from 'store/store';

const page = () => {
	const dispatch = useAppDispatch();
	const { task, answer } = useAppSelector((state) => state.form);
	const { counter } = useAppSelector((state) => state);
	const [active, setActive] = useState(false);

	useEffect(() => {
		dispatch(resetForm());
		dispatch(setForm());
		dispatch(resetCounter());
		const unsubscribe = toast.onChange((payload) => {
			if (payload.status === 'removed' && payload.type === toast.TYPE.SUCCESS) {
				setActive(false);
				dispatch(setForm());
			}
		});

		return () => unsubscribe();
	}, []);

	const check = () => {
		if (task.answer === answer) {
			dispatch(right());
			setActive(true);
			toastSucces();
		} else {
			dispatch(wrong());
			toastError();
		}
	};

	if (!task) {
		return <End result={counter} />;
	}

	return (
		<div className="flex justify-center items-center h-full flex-col gap-10">
			<Counter result={counter} />

			<div className="grid grid-cols-3 gap-[20px] items-center w-max">
				{task.words.map((word, i) => (
					<Sentence key={i} className="lg:w-auto text-xl text-center">
						{word}
					</Sentence>
				))}
			</div>

			<div className={`flex gap-4 ${active && 'pointer-events-none'}`}>
				<TextBox
					value={answer}
					onInput={(e) => dispatch(updateFormAnswer(e.currentTarget.value))}
					onEnter={check}
					autoFocus
					autoCapitalize="off"
					disabled={active}
				/>
				<Button onClick={check}>Проверить</Button>
			</div>

			<ToastContainer />
		</div>
	);
};

export default page;
