import classNames from 'classnames';
import { ReactNode, useState } from 'react';

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
