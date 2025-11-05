import { render, screen } from '@testing-library/react';
import { Application } from './application';

describe('Testing Application', () => {
	it('Should the application component runs well', () => {
		render(<Application />);

		const pageHeading = screen.getByRole('heading', {name: 'Job Application form'})
		expect(pageHeading).toBeInTheDocument();

		const sectionHeading = screen.getByRole('heading', {name: 'Section 1'})
		expect(sectionHeading).toBeInTheDocument();		

		const headingL2 = screen.getByRole('heading', {level: 2})
		expect(headingL2).toBeInTheDocument();		


		const textBox = screen.getByRole('textbox', {name: "Name"});
		expect(textBox).toBeInTheDocument();

		const bioElement = screen.getByRole('textbox', {name: 'Bio'});
		expect(bioElement).toBeInTheDocument();

		const comboBox = screen.getByRole('combobox');
		expect(comboBox).toBeInTheDocument();

		const checkBox = screen.getByRole('checkbox');
		expect(checkBox).toBeInTheDocument();
		
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
		
		const labelTag = screen.getByLabelText('Name', {selector: "input"});
		expect(labelTag).toBeInTheDocument();

		const labelAgree = screen.getByLabelText('I agree to the terms and conditions');
		expect(labelAgree).toBeInTheDocument();
	})
})

// npx unlighthouse --site