import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
	children: ReactNode;
	className?: string;
}

export default function Sentence({ children, className }: Props) {
	return (
		<div
			className={twMerge(
				`bg-white text-gray-900 text-2xl lg:w-[50vw] w-[100%] p-4 rounded shadow ${className}`,
			)}
		>
			{children}
		</div>
	);
}
