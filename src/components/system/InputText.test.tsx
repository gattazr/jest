import React from 'react';
import { render, screen } from '@testing-library/react';
import InputText from './InputText';

describe('InputText', () => {
  test('renders an input field', () => {
    render(<InputText name="test" />);
    const inputElement = screen.getByRole('textbox', { name: /test/i });
    expect(inputElement).toBeInTheDocument();
  });
});
