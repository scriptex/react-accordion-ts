import * as React from 'react';

import Panel from './panel';

export interface AccordionItem {
	title: React.ReactNode;
	content: React.ReactNode;
}

export interface AccordionProps {
	items: ReadonlyArray<AccordionItem>;
	duration: number;
	multiple: boolean;
}

export const Accordion: React.FunctionComponent<Readonly<AccordionProps>> = (props: Readonly<AccordionProps>) => {
	const [activeTab, setActiveTab] = React.useState(-1);
	const { items, duration, multiple } = props;

	const Items = () => (
		<>
			{items.map(({ title, content }, index) => (
				<div className="accordion" role="tablist" key={index}>
					<Panel
						key={index}
						title={title}
						index={index}
						duration={duration}
						multiple={multiple}
						activeTab={activeTab}
						activatePanel={(i: number): void => {
							if (props.multiple) {
								return;
							}

							setActiveTab(activeTab === i ? -1 : i);
						}}
					>
						{content}
					</Panel>
				</div>
			))}
		</>
	);

	return Array.isArray(items) && items.length ? <Items /> : null;
};

export default Accordion;
