import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Accordion from '../src/accordion';

const mock = [
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

describe('Accordion', () => {
	const items = mock.map(({ date, title, content }) => ({
		title: <h2>{date + ' - ' + title}</h2>,
		content: <p>{content}</p>
	}));

	it('should render properly', () => {
		const tree = renderer.create(<Accordion items={items} duration={300} multiple={true} /> as any).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render properly', () => {
		const tree = renderer.create(<Accordion items={[]} duration={0} multiple={false} /> as any).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
