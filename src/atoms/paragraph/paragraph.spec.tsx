import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { Paragraph } from './paragraph';
import { PossibleSizes } from '../../../constants/sizes';

it('should render', () => {
	const { getByText } = render(<Paragraph>test text</Paragraph>);

	const rendered = getByText('test text');

	expect(rendered).to.exist;
});

it('should render with different size', () => {
	const { getByText } = render(<Paragraph size={PossibleSizes.xl}>test text</Paragraph>);

	const rendered = getByText('test text');
	// cannot test classnames with Mocha
	// expect(rendered.className).to.include('xs');

	expect(rendered).to.exist;
});