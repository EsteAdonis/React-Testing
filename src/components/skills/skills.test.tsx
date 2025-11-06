import {render, screen, logRoles} from '@testing-library/react';
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

	test('Render login button', () => {
		render(<Skills skills={skills} />);
		const loginButton = screen.getByRole("button", {name: "Login"});
		expect(loginButton).toBeInTheDocument();
	});

	// queryBy
	// Returns the matching node for a query, and return if no elements match
	// Useful for asserting and element that is not present
	test('Start Learning button is not render', () => {
		render(<Skills skills={skills} />);
		const stratLearningButton = screen.queryByRole('button', {
			name: 'Start Learning'
		})
		expect(stratLearningButton).not.toBeInTheDocument();
	});

	// findByRole returns a promise
	test('Start learning button is eventually displayed', async () => {
		const view = render(<Skills skills={skills} />);
		logRoles(view.container);
		const startLearning = await screen.findByRole('button', {name: 'Start Learning'}, {timeout: 2000});
		expect(startLearning).toBeInTheDocument();
	});
})	