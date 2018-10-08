import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Accordion from '../dist/accordion';

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
	it('should render properly', () => {
		const tree = renderer
			.create(<Accordion items={mock} duration={300} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render properly', () => {
		const tree = renderer.create(<Accordion items={mock} duration={0} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render no items', () => {
		const tree = renderer
			.create(<Accordion items={[]} duration={300} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render no items', () => {
		const tree = renderer
			.create(<Accordion items={} duration={300} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render no items', () => {
		const tree = renderer
			.create(<Accordion items={{}} duration={300} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render no items', () => {
		const tree = renderer
			.create(<Accordion items={false} duration={300} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render no items', () => {
		const tree = renderer.create(<Accordion items={undefined} duration={500} />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
