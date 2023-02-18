import classNames from 'classnames';
import { ReactNode, useState } from 'react';
import { pushAnswer, removeAnswer } from 'store/slices/commasSlice';
import { useAppDispatch, useAppSelector } from 'store/store';

interface Props {
	children: ReactNode;
}

export default function Variant({ children }: Props) {
	const dispatch = useAppDispatch();
	const answer = useAppSelector((state) => state.commasSlice.answer);
	const [active, setActive] = useState(false);

	const changeAnswer = () => {
		if (!active) {
			dispatch(pushAnswer(+children!));
		} else {
			dispatch(removeAnswer(+children!));
		}
	};

	return (
		<div
			onClick={() => {
				setActive((prev) => !prev);
				changeAnswer();
			}}
			className={classNames(
				'p-4 flex  text-2xl justify-center  rounded transition-all cursor-pointer h-[60px] w-[60px]',
				{
					'bg-white text-black': !active,
					'bg-blue-400 text-white': active,
				},
			)}
		>
			{children}
		</div>
	);
}
