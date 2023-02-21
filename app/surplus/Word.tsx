import classNames from 'classnames';
import { HTMLAttributes, useState } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement> {
	word: string;
	right: boolean;
	active: boolean;
}

const Word = ({ word, right, active, onClick, ...props }: Props) => {
	const [clicked, setClicked] = useState(false);

	return (
		<span
			className={classNames('p-[6px] rounded-md  cursor-pointer transition', {
				'bg-slate-200 text-black': !active || (active && !right && !clicked),
				'bg-green-500 text-white': active && right,
				'bg-red-300 text-white': clicked && !right,
			})}
			onClick={(e) => {
				setClicked(true);
				onClick && onClick(e);
			}}
			{...props}
		>
			{word}
		</span>
	);
};

export default Word;
