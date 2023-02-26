import classNames from 'classnames';
import { useState } from 'react';

interface Props {
	children: number;
	addAnswer: (variant: number) => void;
	removeAnswer: (variant: number) => void;
}

export default function Variant({ children, addAnswer, removeAnswer }: Props) {
	const [active, setActive] = useState(false);

	const changeAnswer = () => {
		if (!active) {
			addAnswer(children);
		} else {
			removeAnswer(children);
		}
	};

	return (
		<div
			onClick={() => {
				setActive((prev) => !prev);
				changeAnswer();
			}}
			className={classNames(
				'flex text-xl justify-center items-center rounded transition-all cursor-pointer h-[40px] w-[40px] sm:text-xl sm:h-[60px] sm:w-[60px]',
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
