import Link from 'next/link';

interface Props {
	href: string;
	title: string;
	label: string;
}

function Card({ href, title, label }: Props) {
	return (
		<div className="grid grid-rows-[1fr,_auto]">
			<Link href={href} className="w-full text-center">
				<div className="bg-white shadow-lg rounded text-black px-8 p-4 h-full flex justify-center items-center ">
					<span className="text-purple-500 font-mono font-bold text-4xl first-letter:capitalize">
						{label}
					</span>
				</div>
			</Link>
			<div className="text-xl font-sans text-center capitalize leading-[2]">{title}</div>
		</div>
	);
}

export default Card;
