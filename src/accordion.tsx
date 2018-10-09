import * as React from 'react';
import Panel from './panel';

interface AccordionItem {
	title: React.ReactNode;
	content: React.ReactNode;
}

interface AccordionState {
	activeTab: number;
}

interface Props {
	items: Array<AccordionItem>;
	duration: number;
}

class Accordion extends React.Component<Props> {
	public state: AccordionState = {
		activeTab: -1
	};

	constructor(props: Props) {
		super(props);
	}

	public activatePanel = (index: number): void => {
		this.setState((prev: AccordionState) => ({
			activeTab: prev.activeTab === index ? -1 : index
		}));
	}

	public render(): React.ReactNode {
		const { activeTab } = this.state;
		const { items, duration } = this.props;

		return (
			<div className="accordion" role="tablist">
				{Array.isArray(items) && items.length ? items.map(({ title, content }, index) => (
					<Panel
						key={index}
						title={title}
						index={index}
						duration={duration}
						activeTab={activeTab}
						activatePanel={this.activatePanel}
					>
						{content}
					</Panel>
				)) : ''}
			</div>
		);
	}
}

export default Accordion;
