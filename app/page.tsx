import Card from './Card';

export default function page() {
	return (
		<div className="grid gap-8 p-8 grid-cols-[repeat(auto-fill,_minmax(_250px,_1fr))] auto-rows-[250px] grid-flow-row w-full">
			<Card href="/emphasis" label="сло́во" title="ударение" />
			<Card href="/commas" label="предложение," title="Расставить запятые" />
		</div>
	);
}
