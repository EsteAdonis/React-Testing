import {render, screen} from '@testing-library/react';
import { Skills } from './skills';

describe ('Skills', () => {
	const skills = ['HTML', 'CSS', 'JavaScript'];

	test('renders correctly  list skill[]', () => {
		render(<Skills skills={skills} />);
		const listElement = screen.getByRole('list');
		expect(listElement).toBeInTheDocument();
	})

	test('Render a list of skills', () => {
		render(<Skills skills={skills} />);
		const listItemselements = screen.getAllByRole('listitem');
		expect(listItemselements).toHaveLength(skills.length);
	})
})	