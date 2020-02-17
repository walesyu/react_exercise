import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {BrowserRouter, Switch} from "react-router-dom";

test('renders learn react link', () => {
  const { getByText } = render(<BrowserRouter><Switch><App /></Switch></BrowserRouter>);
  const linkElement = getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});
