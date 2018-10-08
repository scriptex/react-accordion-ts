import * as React from 'react';
import { findDOMNode } from 'react-dom';

interface Props {
	index: number;
	title: JSX.Element;
	duration: number;
	children?: React.ReactChild;
	activeTab: number;
	activatePanel(index: number): void;
}

interface PanelState {
	height: number;
}

interface ExtendedElement extends Element {
	querySelector(selector: string): HTMLElement;
}

class Panel extends React.Component<Props> {
	public state: PanelState = {
		height: 0
	};

	constructor(props: Props) {
		super(props);
	}

	public componentDidMount(): void {
		setTimeout(() => {
			const el = findDOMNode(this);
			const height = (el as ExtendedElement).querySelector('.panel__body')
				.scrollHeight;

			this.setState({ height });
		}, this.props.duration || 300);
	}

	public render(): React.ReactNode {
		const { title, children, activeTab, index, activatePanel } = this.props;
		const isActive = activeTab === index;
		const innerStyle = {
			height: `${isActive ? this.state.height : 0}px`
		};

		return (
			<div className="panel" role="tabpanel" aria-expanded={isActive}>
				<button
					role="tab"
					className="panel__head"
					onClick={_ => activatePanel(index)}
				>
					{title}
				</button>

				<div
					style={innerStyle}
					className="panel__body"
					aria-hidden={!isActive}
				>
					<div className="panel__content">{children}</div>
				</div>
			</div>
		);
	}
}

export default Panel;
