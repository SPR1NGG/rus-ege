export interface Surplus {
	sentence: string;
	answer: string[];
	isReplace?: boolean;
}

export const surplus: Surplus[] = [
	{
		sentence:
			'Компании, причастные к инциденту с разливом нефти в Мексиканском заливе, сделали ряд решений по предотвращению подобных случаев в дальнейшем.',
		answer: ['приняли', 'шагов'],
		isReplace: true,
	},
	{
		sentence: 'Андрей бросил беглый глаз на гостя - тот был аккуратно одет, причёсан.',
		answer: ['взгляд'],
		isReplace: true,
	},
	{
		sentence:
			'С самого начала произведения автор ведёт взаимный диалог с читателем, показывает отношение к описываемым событиям.',
		answer: ['взаимный'],
		isReplace: false,
	},
];
