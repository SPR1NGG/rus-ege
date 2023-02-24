export interface Letter {
	task: string;
	isSame: boolean;
}

export const letter: Letter[] = [
	{
		task: 'пл..вчиха, ум..лять (значение), пок..ление',
		isSame: false,
	},
	{
		task: 'ш..рох, реш..тка, ж..лтый',
		isSame: false,
	},
	{
		task: 'возр..стной, изл..гать, рест..врация',
		isSame: true,
	},
	{
		task: 'разув..рять, увл..каться, побл..дневший',
		isSame: true,
	},
	{
		task: 'скр..пучий, зач..натель, зам..реть (от испуга)',
		isSame: false
	},
];
