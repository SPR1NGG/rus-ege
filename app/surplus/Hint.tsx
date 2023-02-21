import { ReactNode } from "react";

const Hint = ({children}: {children: ReactNode}) => {
	return (
		<div className="bg-white mb-4 text-black rounded-md py-1 px-4 self-start w-max">
			{children}
		</div>
	);
}

export default Hint