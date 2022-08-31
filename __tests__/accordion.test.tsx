import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { items } from '../demo/mocks';
import Accordion from '../src/accordion';

describe('Accordion', () => {
	it('should render properly with items', () => {
		const tree = renderer.create((<Accordion items={items} duration={300} multiple />) as any).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render properly without items', () => {
		const tree = renderer.create((<Accordion items={[]} duration={0} multiple={false} />) as any).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
