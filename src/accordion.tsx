import * as React from 'react';
import Panel from './panel';

interface AccordionItem {
	date: string;
	title: string;
	content: string | Array<string>;
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

	public renderBody = (body: string | Array<string>) => {
		if (typeof body === 'string') {
			return <p>{body}</p>;
		} else if (Array.isArray(body)) {
			return <ul>{body.map((item, i) => <li key={i}>{item}</li>)}</ul>;
		} else {
			throw new TypeError('The body is neither string nor array.');
		}
	}

	public render(): React.ReactNode {
		const { activeTab } = this.state;
		const { items, duration } = this.props;

		return (
			<div className="accordion" role="tablist">
				{Array.isArray(items)
					? items.map(({ date, title, content }, index) => {
						const header = date ? (
							<React.Fragment>
								<time>{date}</time>
								<small>-</small>
								<strong>{title}</strong>
							</React.Fragment>
						) : (
								<strong>{title}</strong>
							);

						return (
							<Panel
								key={index}
								title={header}
								index={index}
								duration={duration}
								activeTab={activeTab}
								activatePanel={this.activatePanel}
							>
								{this.renderBody(content)}
							</Panel>
						);
					})
					: ''}
			</div>
		);
	}
}

export default Accordion;
