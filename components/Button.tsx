import classNames from 'classnames';
import { ReactNode } from 'react';

interface Props {
	color?: '';
	children: ReactNode;
}

export default function Button({ children, color }: Props) {
	return <button className={classNames('p-4 bg-blue-500 rounded')}>{children}</button>;
}
