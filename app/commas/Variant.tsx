import classNames from 'classnames';
import { ReactNode, useState } from 'react';

interface Props {
	children: ReactNode;
	answer: any[];
}

export default function Variant({ children, answer }: Props) {
	const [active, setActive] = useState(false);

	const changeAnswer = () => {
		if (!active) {
			answer.push(+children!);
		} else {
			answer.splice(answer.indexOf(+children!), 1);
		}
	};

	return (
		<div
			onClick={() => {
				setActive((prev) => !prev);
				changeAnswer();
			}}
			className={classNames(
				'p-4 flex  text-2xl justify-center h-[60px] w-[60px] rounded transition-all cursor-pointer',
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
