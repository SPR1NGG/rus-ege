import { Metadata } from 'next';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import Header from './Header';
import Providers from './Providers';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'RusEge',
		icons: {
			icon: '/favicon-32x32.png',
			apple: '/apple-touch-icon.png',
		},
	};
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru">
			<head />
			<body className="bg-slate-900 h-screen grid grid-rows-site text-white">
				<Providers>
					<Header />
					<div className="relative p-4 max-w-[100vw]">{children}</div>
				</Providers>
			</body>
		</html>
	);
}
