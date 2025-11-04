import { render, screen } from '@testing-library/react';
import { Greet } from './greet';

test('Should have the Greeting Adonis Text on the Greet Component', () => {
	render(<Greet />);
	const textElement = screen.getByText('Greetings Adonis');
	expect(textElement).toBeInTheDocument();

	const textElementIgnoreCase = screen.getByText(/greetings adonis/i);
	expect(textElementIgnoreCase).toBeInTheDocument();	
})