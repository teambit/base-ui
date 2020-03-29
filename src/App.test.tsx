import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).that.exist;
});
