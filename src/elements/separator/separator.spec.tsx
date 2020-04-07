import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { Separator } from './separator';

it('should render', () => {
	const { getByTestId } = render(<Separator data-testid="test-sep" />);
	const rendered = getByTestId('test-sep');

	expect(rendered).to.exist;
});

it('should pass classname', () => {
	const { getByTestId } = render(<Separator data-testid="test-sep" className="separata" />);
	const rendered = getByTestId('test-sep');

	expect(rendered.className).to.include('separata');
});

// css-modules tests are not available in mocha yet

// it('should be horizontal by default', () => {
// 	const { getByTestId } = render(<Separator data-testid="test-sep" />);
// 	const rendered = getByTestId('test-sep');

// 	expect(rendered.className).to.include('horizontal');
// });

// it('should be vertical when set', () => {
// 	const { getByTestId } = render(
// 		<Separator data-testid="test-sep" layout="vertical" />
// 	);
// 	const rendered = getByTestId('test-sep');

// 	expect(rendered.className).to.include('vertical');
// });
