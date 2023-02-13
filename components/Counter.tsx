interface Props {
	result: {
		right: number;
		wrong: number;
	}
}
export default function Counter({result: {right, wrong}}: Props) {
	return (
		<div className="absolute font-semibold right-4 top-4">
			<p className="text-green-500">Правильно: {right}</p>
			<p className="text-red-500">Неправильно: {wrong}</p>
		</div>
	);
}
