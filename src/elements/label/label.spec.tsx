import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { Label } from './label';

it('should render correct text in Label', () => {
	const { getByText } = render(<Label>label</Label>);
	const rendered = getByText('label');
	expect(rendered).to.exist;
});

it('should apply background color', () => {
	const { getByText } = render(<Label color="blue">label</Label>);
	const rendered = getByText('label');

	const styles = window.getComputedStyle(rendered);

	expect(styles.background).to.equal('blue');
});
