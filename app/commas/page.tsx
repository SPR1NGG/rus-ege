'use client';

import Counter from '@components/Counter';
import Sentence from '@components/Sentence';
import compareArrays from '@helpers/compareArrays';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { right, setSentence, wrong } from 'store/slices/commasSlice';
import { useAppDispatch, useAppSelector } from 'store/store';
import Variant from './Variant';

const time = 2500;

export default function page() {
	const dispatch = useAppDispatch();
	const counter = useAppSelector((state) => state.counterSlice);
	const { active, answer, sentence } = useAppSelector((state) => state.commasSlice);

	// const [active, setActive] = useState(false);
	// const answer = useRef([]);

	const rightAnswer = () => {
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
				dispatch(right());
			},
		});
	};

	const wrongAnswer = () => {
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

	useEffect(() => {
		dispatch(setSentence());
	}, []);

	return (
		<>
			<Counter result={counter} />
			<div className="h-full flex flex-col d gap-10 justify-center items-center p-4">
				<Sentence>{sentence.sentence}</Sentence>
				<div className="flex gap-5 justify-center flex-wrap">
					{!active && (
						<>
							{[...Array(+sentence.maximum! || 5)].map((_, i) => (
								<Variant key={i}>{i + 1}</Variant>
							))}
						</>
					)}
				</div>
				<button
					onClick={() => {
						if (compareArrays(answer, sentence.answer)) {
							rightAnswer();
						} else {
							wrongAnswer();
						}
					}}
					className="bg-emerald-600 transition-all text-white p-4 rounded font-medium disabled:opacity-10"
					disabled={active}
				>
					Проверить
				</button>
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
