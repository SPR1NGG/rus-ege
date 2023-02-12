import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<head />
			<body className="bg-slate-900 h-screen grid grid-rows-site text-white">
				<Header />
				<div className="relative">{children}</div>
			</body>
		</html>
	);
}
