export interface Together {
	sentence: string;
	isTogether: boolean;
}

export const together: Together[] = [
	{
		sentence:
			'Будущих пенсионеров, (НЕ)ОПРЕДЕЛИВШИХСЯ с выбором негосударственного пенсионного фонда, журналист назвал «молчунами».',
		isTogether: false,
	},
	{
		sentence: 'XXI век станет эпохой битвы за (НЕ)ВОЗОБНОВЛЯЕМЫЕ природные ресурсы.',
		isTogether: true,
	},
	{
		sentence: 'Мотивы его поступка отнюдь (НЕ)БЛАГОРОДНЫ.',
		isTogether: false,
	},
	{
		sentence:
			'(В)ПРОДОЛЖЕНИЕ всего разговора сестра улыбнулась один раз, (ЗА)ТО её улыбка поразила всех.',
		isTogether: false,
	},
	{
		sentence: 'Я ТО(ЖЕ) опустил руку в ручей, (ПРИ)ЧЁМ вода показалась мне ледяной',
		isTogether: true,
	},
];
