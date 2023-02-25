'use client';

import Button from '@components/Button';
import Counter from '@components/Counter';
import End from '@components/End';
import toastError from '@helpers/toastError';
import toastSucces from '@helpers/toastSuccess';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { resetCounter, right, wrong } from 'store/slices/counterSlice';
import { resetLetter, setLetter } from 'store/slices/letterSlice';
import { useAppDispatch, useAppSelector } from 'store/store';

const page = () => {
	const dispatch = useAppDispatch();
	const { task } = useAppSelector((state) => state.letter);
	const { counter } = useAppSelector((state) => state);
	const [active, setActive] = useState(false);

	useEffect(() => {
		dispatch(resetLetter());
		dispatch(resetCounter());
		dispatch(setLetter());
		const unsubscribe = toast.onChange((payload) => {
			if (payload.status === 'removed') {
				dispatch(setLetter());
				setActive(false);
			}
		});

		return () => unsubscribe();
	}, []);

	const check = (same: boolean) => {
		setActive(true);
		if (task.isSame === same) {
			dispatch(right());
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
		<div className="flex flex-col justify-center items-center h-full">
			<Counter result={counter} />

			<div className="flex flex-wrap justify-center w-full gap-[20px] container">
				{task.task.split(',').map((word, i) => (
					<div
						key={i}
						className="bg-white sm:py-6 p-4 text-black rounded text-center flex-auto text-2xl"
					>
						{word}
					</div>
				))}
			</div>
			<div
				className={classNames('grid grid-cols-2 gap-5 mt-8', {
					'pointer-events-none': active,
				})}
			>
				<Button color="green" className="text-xl sm:text-2xl" onClick={() => check(true)}>
					Одинаковые
				</Button>
				<Button color="blue" className="text-xl sm:text-2xl" onClick={() => check(false)}>
					Разные
				</Button>
			</div>

			<ToastContainer />
		</div>
	);
};

export default page;
