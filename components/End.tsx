import Link from 'next/link';
import Button from './Button';

interface Props {
	result: {
		right: number;
		wrong: number;
	};
}

export default function End({ result: { right, wrong } }: Props) {
	const sum = right + wrong;
	return (
		<div className="flex justify-center items-center h-full relative flex-col">
			<p className="text-4xl bg-slate-100 text-black p-4 rounded">
				Молодец ты полностью закончил тринажер! 🥳
			</p>
			<Link href="/" className="mt-4">
				<Button>Можешь попробовать другие тринажеры</Button>
			</Link>
			<div className="flex flex-col bg-gray-50 rounded mt-4 p-4 shadow font-medium">
				<p className="text-black">Твой результат:</p>
				<span className="text-green-500">
					Правильно: {Math.round((right / sum) * 100)}% ({right})
				</span>
				<span className="text-red-500">
					Неравильно: {Math.round((wrong / sum) * 100)}% ({wrong})
				</span>
			</div>
		</div>
	);
}
