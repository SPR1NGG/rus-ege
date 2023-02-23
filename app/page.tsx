import Card from './Card';

export default function page() {
	return (
		<div className="grid gap-8 p-8 grid-cols-[repeat(auto-fill,_minmax(_250px,_1fr))] auto-rows-[250px] grid-flow-row w-full">
			<Card href="/emphasis" label="сло́во" title="ударение" />
			<Card href="/commas" label="предложение," title="запятые" />
			<Card href="/paronyms" label="Лесистая" title="паронимы" />
			<Card href="/surplus" label="ряд решений" title="лишнее слово" />
			<Card href="/form" label="пять ПИХТ" title="форма слова" />
		</div>
	);
}
