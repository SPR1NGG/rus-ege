import Button from '@components/Button';
import useFocus from '@components/hooks/useFocus';
import Sentence from '@components/Sentence';
import TextBox from '@components/TextBox';
import classNames from 'classnames';
import { useEffect } from 'react';
import { updateAnswer } from 'store/slices/surplusSlice';
import { useAppDispatch, useAppSelector } from 'store/store';

interface Props {
	onRight: () => void;
	onWrong: () => void;
	active: boolean;
}

const Replace = ({ active, onRight, onWrong }: Props) => {
	const dispatch = useAppDispatch();
	const { sentence, answer } = useAppSelector((state) => state.surplus);
	const [inputRef, setInputFocus] = useFocus<HTMLInputElement>();

	useEffect(() => {
		setInputFocus();
	}, [active]);

	const check = () => {
		if (sentence.answer.includes(answer)) {
			onRight();
		} else {
			onWrong();
		}
	};

	return (
		<>
			<Sentence>{sentence.sentence}</Sentence>
			<div
				className={classNames('flex gap-4 justify-center mt-10 flex-wrap', {
					'pointer-events-none': active,
				})}
			>
				<TextBox
					onInput={(e) => dispatch(updateAnswer(e.currentTarget.value.toLowerCase()))}
					onEnter={check}
					disabled={active}
					value={answer}
					autoFocus
					autoCapitalize='off'
					innerRef={inputRef}
				/>
				<Button onClick={check}>Проверить</Button>
			</div>
		</>
	);
};

export default Replace;
