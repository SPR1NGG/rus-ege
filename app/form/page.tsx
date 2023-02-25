'use client';

import Button from '@components/Button';
import Counter from '@components/Counter';
import End from '@components/End';
import useFocus from '@components/hooks/useFocus';
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
	const [inputRef, setInputFocus] = useFocus<HTMLInputElement>();

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

	useEffect(() => {
		setInputFocus();
	}, [active]);

	const check = () => {
		if (task.answer === answer.trim()) {
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
		<div className="flex justify-between items-space h-full flex-col gap-2 sm:gap-10">
			<Counter result={counter} className="relative top-0 right-0 self-end" />

			<div className="flex flex-col gap-10">
				<div className="grid grid-cols-[repeat(auto-fill,_minmax(_300px,_1fr))] justify-center w-full gap-3 items-center xl:max-w-[60vw] auto-rows-[1fr] text-center mx-auto">
					{task.words.map((word, i) => (
						<Sentence
							key={i}
							className="lg:w-auto text-xl sm:text-2xl sm:p-4 p-2 h-full flex items-center justify-center"
						>
							{word}
						</Sentence>
					))}
				</div>
				<div
					className={`grid grid-cols-1 sm:flex sm:flex-wrap justify-center w-full gap-2 ${
						active && 'pointer-events-none'
					}`}
				>
					<TextBox
						value={answer}
						onInput={(e) => dispatch(updateFormAnswer(e.currentTarget.value.toLowerCase()))}
						onEnter={check}
						autoFocus
						autoCapitalize="off"
						autoCorrect="false"
						disabled={active}
						innerRef={inputRef}
					/>
					<Button onClick={check}>Проверить</Button>
				</div>
			</div>

			<ToastContainer />
		</div>
	);
};

export default page;
