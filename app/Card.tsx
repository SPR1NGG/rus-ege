import Image from 'next/image';
import Link from 'next/link';

interface Props {
	href: string;
	alt: string;
	src: string;
}

function Card({ href, alt, src }: Props) {
	return (
		<div>
			<div className="bg-white shadow-lg rounded text-black p-4">
				<Link href={href} className="flex justify-center items-center w-full h-full">
					<Image src={src} alt={alt} width={200} height={200}></Image>
				</Link>
			</div>
			<div className="text-xl font-sans text-center">Ударение</div>
		</div>
	);
}

export default Card;
