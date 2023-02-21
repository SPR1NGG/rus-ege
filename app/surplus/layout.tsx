import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex justify-center items-center h-full flex-col mx-auto p-1 w-max max-w-[96vw] sm:max-w-[80vw]">
			{children}
		</div>
	);
};

export default layout;
