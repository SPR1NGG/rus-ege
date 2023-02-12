import Link from 'next/link';

export default function Header() {
	return (
		<header className="border-b border-sky-900 text-slate-200 p-4">
			<Link href="/">
				<span className="font-bold tracking-wider text-2xl">ЕГЭ</span>
			</Link>
		</header>
	);
}
