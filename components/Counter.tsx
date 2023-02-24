import { twMerge } from 'tailwind-merge';

interface Props {
	result: {
		right: number;
		wrong: number;
	};
	className?: string;
}
export default function Counter({ result: { right, wrong }, className }: Props) {
	return (
		<div
			className={twMerge(
				`absolute font-semibold right-4 top-4 bg-white p-3 rounded-md ${className}`,
			)}
		>
			<p className="text-green-500">Правильно: {right}</p>
			<p className="text-red-500">Неправильно: {wrong}</p>
		</div>
	);
}
