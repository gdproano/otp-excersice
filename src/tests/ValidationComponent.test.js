import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ValidationComponent from '../components/ValidationCodeComponent';

test('RETURN true when text is inside a component', () => {
  const { getByText } = render(<ValidationComponent />);
  const linkElement = getByText(/Reenviar código/i);
  expect(linkElement).toBeInTheDocument();
});

test('RETURN true if continue button is disabled, when inputs are not filled', () => {
  render(<ValidationComponent />);
  const getByRole = screen.getByRole('button', { name: /Continuar/i })
  expect(getByRole).toHaveAttribute('disabled');
});

test('RETURN true if FIRST input is changed to value 2', () => {
  const utils = render(<ValidationComponent />)
  const input = utils.getByLabelText('0')
  fireEvent.change(input, { target: { value: '2' } })
  expect(input.value).toBe('2')
});

test('RETURN true if ALL inputs are filled', () => {
  const utils = render(<ValidationComponent />)
  const ids = ['0', '1', '2', '3', '4', '5']
  const inputs = ids.map(item => utils.getByLabelText(item))
  inputs.forEach(input => {
    fireEvent.change(input, { target: { value: '2' } })
  })
  const getByRole = screen.getByRole('button', { name: /Continuar/i })
  expect(getByRole).not.toHaveAttribute('disabled');
});