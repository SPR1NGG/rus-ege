import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import Header from './Header';
import Providers from './Providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<head />
			<body className="bg-slate-900 h-screen grid grid-rows-site text-white">
				<Providers>
					<Header />
					<div className="relative">{children}</div>
				</Providers>
			</body>
		</html>
	);
}
