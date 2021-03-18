import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputNumber from './InputNumber';

describe('InputNumber', () => {
  test('renders an input', () => {
    render(<InputNumber name="test" />);
    const inputElement = screen.getByRole('textbox', { name: /test/i });
    expect(inputElement).toBeInTheDocument();
  });

  test('displays the number that is passed', () => {
    render(<InputNumber name="test" number={42} />);
    const inputElement = screen.getByRole('textbox', { name: /test/i });
    expect(inputElement.value).toBe("42");
  });

  test('triggers the onChange handler if the value of the input is updated', () => {
    let handlerValue = undefined;
    const handlerFn = (newValue: number) => handlerValue = newValue;
    render(<InputNumber name="test" number={42} onChange={handlerFn} />);
    const inputElement = screen.getByRole('textbox', { name: /test/i });
    fireEvent.change(inputElement, {target: {value: '1337'}});
    expect(handlerValue).toBe(1337);
  });

  test('returns 0 if the value in the field is not a number', () => {
    let handlerValue = undefined;
    const handlerFn = (newValue: number) => handlerValue = newValue;
    render(<InputNumber name="test" number={42} onChange={handlerFn} />);
    const inputElement = screen.getByRole('textbox', { name: /test/i });
    fireEvent.change(inputElement, {target: {value: 'hello'}});
    expect(handlerValue).toBe(0);
  });
});
