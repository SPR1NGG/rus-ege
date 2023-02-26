import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
	children: ReactNode;
	className?: string;
}

const Hint = ({ children, className }: Props) => {
	return (
		<div
			className={twMerge(
				`bg-white mb-4 text-black rounded-md py-1 px-4 self-start w-max ${className}`,
			)}
		>
			{children}
		</div>
	);
};

export default Hint;
