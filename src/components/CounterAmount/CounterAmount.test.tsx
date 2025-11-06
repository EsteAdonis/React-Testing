import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { CounterAmount } from './CounterAmount';

describe('CounterAmount Testing', () => {
	it('renders a count of 10 after clicking the set button', async () => {
		user.setup();
		render(<CounterAmount />);
		const amountInput = screen.getByRole('spinbutton');
		await user.type(amountInput, '10');
		const setButton = screen.getByRole("button", {name: 'Set'});
		await user.click(setButton);
		const countElement = screen.getByRole("heading")
		expect(countElement).toHaveTextContent('10');
	});

	it('elements are focused in trhe right order', async() => {
		user.setup();
		render(<CounterAmount />);
		const amountInput = screen.getByRole('spinbutton');
		const setButton = screen.getByRole('button', {name: 'Set'});
		const incrementButton = screen.getByRole('button', {name: 'Increment'});
		await user.tab();
		expect(incrementButton).toHaveFocus();
		await user.tab();
		expect(amountInput).toHaveFocus();
		await user.tab();
		expect(setButton).toHaveFocus();
	})
})