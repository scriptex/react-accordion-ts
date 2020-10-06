import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Accordion } from '../dist/index';

const news = [
	{
		date: '12-10-2018',
		title: 'Awesome title',
		content: 'Fantastic content'
	},
	{
		date: '13-10-2018',
		title: 'Awesome title',
		content: 'Fantastic content'
	},
	{
		date: '13-10-2018',
		title: 'Awesome title',
		content: 'Fantastic content'
	}
];

const items = news.map(({ date, title, content }) => ({
	title: <h2>{date + ' - ' + title}</h2>,
	content: <p>{content}</p>
}));

const App = () => {
	return <Accordion items={items} duration={300} multiple />;
};

ReactDOM.render(<App />, document.getElementById('root'));
