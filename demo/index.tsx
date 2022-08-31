import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { items } from './mocks';
import { Accordion } from '../dist/index';

const App = () => (
	<>
		<h2>Multiple</h2>

		<Accordion items={items} duration={300} multiple />

		<h2>Single and all closed</h2>

		<Accordion items={items} duration={300} multiple={false} />

		<h2>Single and second open</h2>

		<Accordion items={items} duration={300} multiple={false} open={1} />
	</>
);

ReactDOM.render(<App />, document.getElementById('root'));
