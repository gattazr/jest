import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputText from './InputText';

describe('InputText', () => {
  test('renders an input field', () => {
    render(<InputText name="test" />);
    const inputElement = screen.getByRole('textbox', { name: /test/i });
    expect(inputElement).toBeInTheDocument();
  });

  test('displays the text that is passed', () => {
    render(<InputText name="test" text="hello" />);
    const inputElement = screen.getByRole('textbox', { name: /test/i });
    expect(inputElement.value).toBe("hello");
  });

  test('triggers the onChange handler if the value of the input is updated', () => {
    let handlerValue = undefined;
    const handlerFn = (newValue: string) => handlerValue = newValue;
    render(<InputText name="test" text="hello" onChange={handlerFn} />);
    const inputElement = screen.getByRole('textbox', { name: /test/i });
    fireEvent.change(inputElement, {target: {value: 'world'}});
    expect(handlerValue).toBe("world");
  });
});
