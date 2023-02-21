import { toast, ToastOptions } from 'react-toastify';

const toastError = (options?: ToastOptions<{}> | undefined) => {
	const audio = new Audio('/sounds/wrongAnswer.mp3');
	audio.play();

	toast.error('Неправильно 😔', {
		position: 'bottom-left',
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		theme: 'light',
		...options,
	});
};

export default toastError;
