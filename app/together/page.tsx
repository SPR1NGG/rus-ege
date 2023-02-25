'use client';

import Button from '@components/Button';
import Counter from '@components/Counter';
import End from '@components/End';
import Sentence from '@components/Sentence';
import toastError from '@helpers/toastError';
import toastSucces from '@helpers/toastSuccess';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { right, wrong } from 'store/slices/counterSlice';
import { setTogether } from 'store/slices/togetherSlice';
import { useAppDispatch, useAppSelector } from 'store/store';

const page = () => {
	const dispatch = useAppDispatch();
	const { task } = useAppSelector((state) => state.together);
	const { counter } = useAppSelector((state) => state);

	useEffect(() => {
		dispatch(setTogether());

		const unsub = toast.onChange((payload) => {
			if (payload.status === 'removed') {
				dispatch(setTogether());
			}
		});

		return () => unsub();
	}, []);

	const check = (together: boolean) => {
		if (task.isTogether === together) {
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
		<div className="flex flex-col gap-5 items-center justify-center h-full">
			<Counter result={counter} />

			<Sentence>{task.sentence}</Sentence>

			<div className="flex gap-5">
				<Button color="green" className="text-xl" onClick={() => check(true)}>
					Слитно
				</Button>
				<Button color="blue" className="text-xl" onClick={() => check(false)}>
					Раздельно
				</Button>
			</div>

			<ToastContainer />
		</div>
	);
};

export default page;
