import { render, screen } from '@testing-library/react';
import App from './App';


test ('renders text MyPicture', () => {
  render(<App />)
  const nameElement = screen.getByText(/VincentS972/i)
  expect(nameElement).toBeInTheDocument()
});
