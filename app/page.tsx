import Card from './Card';

interface App {
	href: string;
	label: string;
	title: string;
}

const apps: App[] = [
	{ href: 'emphasis', label: 'сло́во', title: 'ударение' },
	{ href: 'commas', label: 'предложение,', title: 'запятые' },
	{ href: 'paronyms', label: 'Лесистая Лесная', title: 'паронимы' },
	{ href: 'surplus', label: 'Приняли ряд решений', title: 'лишнее слово' },
	{ href: 'form', label: 'задача более ЛЕГЧЕ', title: 'форма слова' },
	{ href: 'letter', label: 'Пловчиха Умалять Поколение', title: 'одна буква' },
	{ href: 'together', label: '(НЕ)БЛАГОРОДНЫ', title: 'слитно' },
	{ href: 'place', label: 'НН/Н', title: 'вставить букву' },
];

export default function page() {
	return (
		<div className="grid gap-8 grid-cols-[repeat(auto-fill,_minmax(_300px,_1fr))] auto-rows-[250px] grid-flow-row w-full">
			{apps.map((app) => (
				<Card key={app.href} {...app} />
			))}
		</div>
	);
}
