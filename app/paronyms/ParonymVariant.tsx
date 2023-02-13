import classNames from 'classnames';
import React, { ReactNode, useState } from 'react';

interface Props {
	onClick: () => void;
	children: ReactNode;
	status: boolean;
}

export default function ParonymVariant({ onClick, children, status }: Props) {
	const [clicked, setClicked] = useState(false);

	return (
		<button
			className={classNames('text-black p-2 rounded transition text-2xl', {
				'bg-white': !clicked,
				'bg-green-500 text-white': clicked && status,
				'bg-red-500 text-white': clicked && !status,
			})}
			onClick={() => {
				onClick();
				setClicked(true);
			}}
		>
			{children}
		</button>
	);
}
