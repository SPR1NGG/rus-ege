import classNames from 'classnames';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: 'green';
	children: ReactNode;
}

export default function Button({ children, color, ...props }: Props) {
	return (
		<button
			{...props}
			className={classNames('px-4 py-3 bg-blue-500 rounded', {
				'bg-green-500': color === 'green',
			})}
		>
			{children}
		</button>
	);
}
