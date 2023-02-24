import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex justify-center items-center h-full flex-col mx-auto w-max max-w-full">
			{children}
		</div>
	);
};

export default layout;
