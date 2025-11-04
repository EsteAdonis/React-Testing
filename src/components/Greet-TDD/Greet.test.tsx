// Greet should render the text hello and if a name is passed into the component'
// it should render hello forllowed by the name

import {render, screen } from '@testing-library/react';
import { Greet } from './Greet';

test('Greet rendert correctly', () => {
	render(<Greet  />)
	const textElement = screen.getByText('Greetings')
	expect(textElement).toBeInTheDocument();
})

test('Greet render with a name',() => {
	render(<Greet name='Adonis' />)
	const textElement = screen.getByText('Greetings Adonis');
	expect(textElement).toBeInTheDocument();
})