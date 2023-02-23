import { toast, ToastOptions } from 'react-toastify';

const toastSucces = (options?: ToastOptions<{}> | undefined) => {
	const audio = new Audio('/sounds/correctAnswer.wav');
	audio.play();

	toast.success('Правильно! 😃', {
		position: 'bottom-left',
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		theme: 'light',
		pauseOnFocusLoss: false,
		...options,
	});
};

export default toastSucces;
