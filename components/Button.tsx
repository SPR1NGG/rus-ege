import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: 'green' | 'blue' | 'red';
	className?: string;
	children: ReactNode;
}

export default function Button({ children, color = 'blue', className, ...props }: Props) {
	return (
		<button {...props} className={twMerge(`px-4 py-3 rounded bg-blue-500 bg-${color}-500 ${className}`)}>
			{children}
		</button>
	);
}
