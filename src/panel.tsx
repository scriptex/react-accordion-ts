import * as React from 'react';
import { findDOMNode } from 'react-dom';

export interface PanelProps {
	index: number;
	title: React.ReactNode;
	duration: number;
	multiple: boolean;
	children?: React.ReactNode;
	activeTab: number;
	activatePanel(index: number): void;
}

// codebeat:disable[LOC]
export const Panel: React.FunctionComponent<Readonly<PanelProps>> = (props: Readonly<PanelProps>) => {
	const ref = React.useRef(null);
	const [height, setHeight] = React.useState(0);
	const [active, setActive] = React.useState(false);
	const { index, title, multiple, children, activeTab, activatePanel } = props;
	const isActive = multiple ? active : activeTab === index;
	const innerStyle = {
		height: `${isActive ? height : 0}px`
	};

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			const el = findDOMNode(ref.current) as HTMLDivElement;
			const newHeight = el?.querySelector('.panel__body')?.scrollHeight;

			setHeight(newHeight || height);
		}, props.duration || 300);

		return () => {
			clearTimeout(timeout);
		};
	});

	return (
		<div className="panel" role="tabpanel" aria-expanded={isActive} ref={ref}>
			<button
				role="tab"
				className="panel__head"
				onClick={() => {
					multiple ? setActive(!active) : activatePanel(index);
				}}
			>
				{title}
			</button>

			<div style={innerStyle} className="panel__body" aria-hidden={!isActive}>
				<div className="panel__content">{children}</div>
			</div>
		</div>
	);
};
// codebeat:enable[LOC]

export default Panel;
