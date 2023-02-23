import classNames from 'classnames';
import { InputHTMLAttributes, RefObject } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	onEnter?: () => void;
	innerRef?: RefObject<HTMLInputElement>;
	value: string;
}

const TextBox = ({ className, onEnter, innerRef, ...props }: Props) => {
	return (
		<input
			{...props}
			ref={innerRef}
			onKeyDown={(e) => {
				if (e.key === 'Enter' && onEnter) {
					onEnter();
				}
			}}
			className={classNames(
				'border-blue-900 border outline-none text-center rounded bg-slate-800 text-2xl p-2',
				className,
			)}
		/>
	);
};

export default TextBox;
