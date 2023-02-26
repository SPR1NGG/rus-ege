'use client';
import Counter from '@components/Counter';
import End from '@components/End';
import toastError from '@helpers/toastError';
import toastSucces from '@helpers/toastSuccess';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { resetCounter, right, wrong } from 'store/slices/counterSlice';
import { newSurplus, resetSurplus, updateAnswer } from 'store/slices/surplusSlice';
import { useAppDispatch, useAppSelector } from 'store/store';
import Exclude from './Exclude';
import Hint from '../../components/Hint';
import Replace from './Replace';

const page = () => {
	const dispatch = useAppDispatch();
	const { sentence } = useAppSelector((state) => state.surplus);
	const { counter } = useAppSelector((state) => state);
	const [active, setActive] = useState(false);

	useEffect(() => {
		dispatch(resetCounter());
		dispatch(resetSurplus());
		dispatch(newSurplus());
	}, []);

	const onRight = () => {
		setActive(true);
		dispatch(right());
		toastSucces({
			onClose: () => {
				setActive(false);
				dispatch(newSurplus());
				dispatch(updateAnswer(''));
			},
		});
	};

	const onWrong = () => {
		dispatch(wrong());
		toastError();
	};

	if (sentence?.sentence === undefined) {
		return <End result={counter} />;
	}

	if (sentence.isReplace) {
		return (
			<>
				<Counter result={counter} />
				<Hint>Замените лишнее слово</Hint>
				<Replace onRight={onRight} onWrong={onWrong} active={active} />
				<ToastContainer pauseOnFocusLoss={false} />
			</>
		);
	}

	return (
		<>
			<Counter result={counter} />
			<Hint>Исключите лишнее слово</Hint>
			<Exclude onRight={onRight} onWrong={onWrong} active={active} />
			<ToastContainer pauseOnFocusLoss={false} />
		</>
	);
};

export default page;
