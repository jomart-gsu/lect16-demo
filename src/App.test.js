import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button exists', () => {
  render(<App />);
  const addButton = screen.getByText("Add an item");
  expect(addButton).toBeInTheDocument();
});

test('item is added to list', () => {
  render(<App />);
  const addButton = screen.getByText("Add an item");
  expect(addButton).toBeInTheDocument();
  const inputEl = screen.getByTestId("input-field");
  fireEvent.change(inputEl, {target: {value: "Coffee"}});
  fireEvent.click(addButton);

  const newItem = screen.getByText("Coffee");
  expect(newItem).toBeInTheDocument();
});
