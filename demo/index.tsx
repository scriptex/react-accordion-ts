import * as React from 'react';
import { createRoot } from 'react-dom/client';

import { items } from './mocks';
import { Accordion } from '../dist/index';

const elements = [
	{
		hint: '<Accordion items={items} duration={300} multiple />',
		title: 'Multiple',
		content: <Accordion items={items} duration={300} multiple />
	},
	{
		hint: '<Accordion items={items} duration={300} multiple={false} />',
		title: 'Single and all closed',
		content: <Accordion items={items} duration={300} multiple={false} />
	},
	{
		hint: '<Accordion items={items} duration={300} multiple={false} open={1} />',
		title: 'Single and second open',
		content: <Accordion items={items} duration={300} multiple={false} open={1} />
	}
];

const App = () => (
	<>
		{elements.map(({ hint, title, content }, index) => (
			<React.Fragment key={index}>
				<div>
					<h2>{title}</h2>

					<code>{hint}</code>
				</div>

				{content}
			</React.Fragment>
		))}
	</>
);

createRoot(document.getElementById('root')!).render(<App />);
