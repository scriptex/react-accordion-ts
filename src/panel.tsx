import * as React from 'react';

export interface PanelProps {
	open?: boolean;
	index: number;
	title: React.ReactNode;
	duration: number;
	multiple: boolean;
	children?: React.ReactNode;
	activeTab: number;
	activatePanel(index: number): void;
}

export const Panel: React.FunctionComponent<Readonly<PanelProps>> = ({
	open,
	index,
	title,
	duration,
	multiple,
	children,
	activeTab,
	activatePanel
}: PanelProps) => {
	const ref: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
	const [height, setHeight] = React.useState(0);
	const [active, setActive] = React.useState(!!open);

	const isActive = multiple ? active : activeTab === index;
	const style: React.CSSProperties = {
		height: `${isActive ? height : 0}px`
	};

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			const el = ref.current;
			const newHeight = el?.querySelector('.panel__body')?.scrollHeight;

			setHeight(newHeight || height);
		}, duration || 300);

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

			<div style={style} className="panel__body" aria-hidden={!isActive}>
				<div className="panel__content">{children}</div>
			</div>
		</div>
	);
};
