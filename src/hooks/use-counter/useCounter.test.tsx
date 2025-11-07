import { renderHook } from '@testing-library/react';
import { useCounter } from './useCounter';

describe ('useCounter', () => {
	it('should render the intital count', () => {
		const { result } = renderHook(useCounter);
		expect(result.current.count).toBe(0);
	})

	it('should accept and render the same inital count', () => {
		const { result } = renderHook(useCounter, { initialProps: { initialCount: 10},})
		expect(result.current.count).toBe(10);
	})
})