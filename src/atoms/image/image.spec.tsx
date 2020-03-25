import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { BaseImage } from './image';

it('should render', () => {
	const { getByTestId } = render(
		<BaseImage data-testid="test-img" alt="alt world" src="https://bit.dev" />
	);
	const rendered = getByTestId('test-img');

	expect(rendered.tagName).to.equal('IMG');
	expect(rendered.getAttribute('alt')).to.equal('alt world');
	expect(rendered.getAttribute('src')).to.equal('https://bit.dev');
});

it('should pass classname', () => {
	const { getByTestId } = render(
		<BaseImage data-testid="test-img" className="testclass" alt="alt" src="https://" />
	);
	const rendered = getByTestId('test-img');

	expect(rendered.className).to.include('testclass');
});
