import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export default function Sentence({ children }: Props) {
	return (
		<div className="bg-white text-gray-900 text-2xl lg:w-[50vw] w-[100%] p-4 rounded shadow">
			{children}
		</div>
	);
}
