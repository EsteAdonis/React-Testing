import {render, screen} from '@testing-library/react';
import { CounterTwo } from './counter-two';
import user from '@testing-library/user-event';

describe('CounterTwo Component', () => {
	test("renders correctly", () => {
		render(<CounterTwo count={5} />);
		const textElement = screen.getByText("Counter Two");
		console.log(textElement);
		expect(textElement).toBeInTheDocument();
	})

	it('should handlers are called', async () => {
		user.setup();
		const incrementHandler = jest.fn();
		const decrementHandler = jest.fn();
		render(
			<CounterTwo 
				count={10} 
				handleIncrement={ incrementHandler } 
				handleDecrement={ decrementHandler } 
			/>
		);

		const incrementButton = screen.getByRole('button', {name: 'Increment'});
		const decrementButton = screen.getByRole('button', {name: 'Decrement'});		
		await user.click(incrementButton);
		await user.click(decrementButton);
		expect(incrementHandler).toHaveBeenCalledTimes(1);
		expect(decrementHandler).toHaveBeenCalledTimes(1);
	})
})