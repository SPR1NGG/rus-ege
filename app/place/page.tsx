'use client';

import Button from '@components/Button';
import Counter from '@components/Counter';
import End from '@components/End';
import Hint from '@components/Hint';
import Sentence from '@components/Sentence';
import Variant from '@components/Variant';
import compareArrays from '@helpers/compareArrays';
import toastError from '@helpers/toastError';
import toastSucces from '@helpers/toastSuccess';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { resetCounter, right, wrong } from 'store/slices/counterSlice';
import { addPlaceAnswer, removePlaceAnswer, resetPlace, setPlace } from 'store/slices/placeSlice';
import { useAppDispatch, useAppSelector } from 'store/store';

const page = () => {
	const dispatch = useAppDispatch();
	const { task, answer } = useAppSelector((state) => state.place);
	const { counter } = useAppSelector((state) => state);
	const [active, setActive] = useState(false);

	useEffect(() => {
		const unsub = toast.onChange((payload) => {
			if (payload.status === 'removed') {
				setActive(false);
			}

			if (payload.type === toast.TYPE.SUCCESS && payload.status === 'removed') {
				dispatch(setPlace());
			}
		});

		dispatch(resetPlace());
		dispatch(resetCounter());
		dispatch(setPlace());

		return () => unsub();
	}, []);

	const check = () => {
		if (compareArrays(task.answer, answer)) {
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
		<div className="flex flex-col justify-between h-full ">
			<Counter result={counter} className="relative top-0 right-0 self-end" />

			<div className="flex flex-col gap-5 items-center mx-auto w-max max-w-full">
				<Hint className="mb-0 text-lg">
					Вставьте на месте цифр <span className="font-medium ">{task.isSingle ? 'Н' : 'НН'}</span>
				</Hint>
				<Sentence>{task.sentence}</Sentence>
				<div className="flex gap-2">
					{!active &&
						[...Array(task.sentence.match(/\d+/g)?.length)].map((_, i) => (
							<Variant
								key={i}
								addAnswer={(val) => dispatch(addPlaceAnswer(val))}
								removeAnswer={(val) => dispatch(removePlaceAnswer(val))}
							>
								{i + 1}
							</Variant>
						))}
				</div>
				<Button className="text-xl" disabled={active} onClick={check}>
					Проверить
				</Button>
			</div>

			<ToastContainer />
		</div>
	);
};

export default page;
