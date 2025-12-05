// API mocking of the next generation
// setting up msw
// > npx install msw --save-dev
// create a folder named "mocks" in the src directory
// inside the mocks folder, create a file named "handlers.ts" and add the following code:	

// integrate node
// > 
import {render, screen} from '@testing-library/react';
import {rest} from 'msw';
import {Users} from './users';
import {server} from '../../mocks/server';

describe('Users Component', () => {
	it('renders without crashing', () => {
		render(<Users />);
		const textElement = screen.getByText('Users');
		expect(textElement).toBeInTheDocument();
	});

	it('renders a list of users', async () => {
		render(<Users />);
		const userElements = await screen.findAllByRole('listitem');
		expect(userElements).toHaveLength(3);
		expect(userElements[0]).toHaveTextContent('Adonis Doe');
		expect(userElements[1]).toHaveTextContent('Eris Smith');
		expect(userElements[2]).toHaveTextContent('Atenea Perez');
	});

	it('renders error message on fetch failure', async () => {
		// Override the default handler to simulate a server error
		server.use(
			rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
				return res(ctx.status(500));
			})
		);	
		render(<Users />);
		const errorElement = await screen.findByText('Error fetching users');
		expect(errorElement).toBeInTheDocument();
	});
});