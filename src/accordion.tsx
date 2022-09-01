import * as React from 'react';

import Panel from './panel';

export interface AccordionPanel {
	open?: boolean;
	title: React.ReactNode;
	content: React.ReactNode;
}

export interface AccordionProps {
	open?: number;
	items: ReadonlyArray<AccordionPanel>;
	duration: number;
	multiple: boolean;
}

export const Accordion: React.FunctionComponent<Readonly<AccordionProps>> = ({
	open = -1,
	items,
	duration,
	multiple
}: AccordionProps) => {
	const [activeTab, setActiveTab] = React.useState(open);

	return Array.isArray(items) && items.length ? (
		<div className="accordion" role="tablist">
			{items.map(({ open, title, content }, index) => (
				<Panel
					key={index}
					open={open}
					title={title}
					index={index}
					duration={duration}
					multiple={multiple}
					activeTab={activeTab}
					activatePanel={(i: number): void => {
						if (multiple) {
							return;
						}

						setActiveTab(activeTab === i ? -1 : i);
					}}
				>
					{content}
				</Panel>
			))}
		</div>
	) : null;
};

export default Accordion;
