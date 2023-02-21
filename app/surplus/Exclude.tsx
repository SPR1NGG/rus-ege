import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { updateAnswer } from 'store/slices/surplusSlice';
import { useAppDispatch, useAppSelector } from 'store/store';
import Word from './Word';

interface Props {
	onRight: () => void;
	onWrong: () => void;
	active: boolean;
}

const Exclude = ({ onRight, onWrong, active }: Props) => {
	const dispatch = useAppDispatch();
	const { answer, sentence } = useAppSelector((state) => state.surplus);
	const didMountRef = useRef(false);

	useEffect(() => {
		if (didMountRef.current) {
			if (sentence.answer.includes(answer)) {
				onRight();
			} else {
				onWrong();
			}
		}

		didMountRef.current = true;
	}, [answer]);

	return (
		<div
			className={classNames('bg-white flex gap-1 gap-y-2 p-2 rounded flex-wrap justify-center', {
				'pointer-events-none': active,
			})}
		>
			{sentence.sentence.split(' ').map((word, i) => (
				<Word
					word={word}
					right={sentence.answer.includes(word.replace(',', ''))}
					key={i}
					active={active}
					onClick={() => dispatch(updateAnswer(word.replace(',', '')))}
				/>
			))}
		</div>
	);
};

// <span
// 	key={i}
// 	onClick={() => {
// 		dispatch(updateAnswer(word.replace(',', '')));
// 	}}
// 	className={classNames(' p-2 rounded-md  cursor-pointer', {
// 		'bg-slate-200 text-black':
// 			!active || (active && !sentence.answer.includes(word.replace(',', ''))),
// 		// 'bg-slate-200': active && !sentence.answer.includes(word.replace(',', '')),
// 		'bg-green-500 text-white': active && sentence.answer.includes(word.replace(',', '')),
// 	})}
// >
// 	{word}
// </span>;

export default Exclude;
