/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render } from '@testing-library/react';

import { items } from '../demo/mocks';
import { Accordion } from '../src/accordion';

describe('Accordion', () => {
	it('should render properly with items', () => {
		const { asFragment } = render(<Accordion items={items} duration={300} multiple />);

		expect(asFragment()).toMatchSnapshot();
	});

	it('should render properly without items', () => {
		const { asFragment } = render(<Accordion items={[]} duration={0} multiple={false} />);

		expect(asFragment()).toMatchSnapshot();
	});
});
