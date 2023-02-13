export interface Paronym {
	sentence: string;
	variants: string[];
	answer: string;
}

const paronyms: Paronym[] = [
	{
		sentence: 'Давно наступили весенние сумерки, тёмные от ДОЖДЕВЫХ туч.',
		variants: ['дождевых', 'дождливых'],
		answer: 'дождевых',
	},
	{
		sentence: 'На фронте шли ЖЕСТОКИЕ, незатихающие наетупательные бои.',
		variants: ['жестокие', 'жёсткие'],
		answer: 'жестокие',
	},
	{
		sentence:
			'Поднявшись на небольшой холмик, откуда начиналась едва заметная ЛЕСИСТАЯ тропинка, путник оглянулся.',
		variants: ['лесистая', 'лесная'],
		answer: 'лесная',
	},
];

export default paronyms;
