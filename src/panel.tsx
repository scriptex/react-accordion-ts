import * as React from 'react';
import { findDOMNode } from 'react-dom';

interface Props {
	index: number;
	title: React.ReactNode;
	duration: number;
	multiple: boolean;
	children?: React.ReactNode;
	activeTab: number;
	activatePanel(index: number): void;
}

interface PanelState {
	height: number;
	isActive: boolean;
}

interface ExtendedElement extends Element {
	querySelector(selector: string): HTMLElement;
}

class Panel extends React.Component<Props> {
	public state: PanelState = {
		height: 0,
		isActive: false
	};

	constructor(props: Props) {
		super(props);
	}

	public componentDidMount(): void {
		setTimeout(() => {
			const el = findDOMNode(this);
			const height = (el as ExtendedElement).querySelector('.panel__body').scrollHeight;

			this.setState({ height });
		}, this.props.duration || 300);
	}

	public render(): React.ReactNode {
		const { index, title, multiple, children, activeTab, activatePanel } = this.props;

		const isActive = multiple ? this.state.isActive : activeTab === index;

		const innerStyle = {
			height: `${isActive ? this.state.height : 0}px`
		};

		return (
			<div className="panel" role="tabpanel" aria-expanded={isActive}>
				<button
					role="tab"
					className="panel__head"
					onClick={_ => {
						multiple ? this.setState({ isActive: !this.state.isActive }) : activatePanel(index);
					}}
				>
					{title}
				</button>

				<div style={innerStyle} className="panel__body" aria-hidden={!isActive}>
					<div className="panel__content">{children}</div>
				</div>
			</div>
		);
	}
}

export default Panel;
