import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { items } from './mocks';
import { Accordion } from '../dist/index';

const App = () => {
	return <Accordion items={items} duration={300} multiple />;
};

ReactDOM.render(<App />, document.getElementById('root'));
