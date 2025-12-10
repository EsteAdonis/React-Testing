import { render, screen } from '@testing-library/react'
import { Application } from './application'

// Priority Order for Queries
// Your test should resemble how users interact with your code (component, page, etc.) as much as possible.
// 1. getByRole
// 2. getByLabelText
// 3. getByPlaceHolderText
// 4. getByText
// 5. getByDisplayValue
// 6. getByAltText
// 7. getByTitle
// 8. getByTestId

describe('Testing Application', () => {
  it('Should the application component runs well', () => {
    render(<Application />)

    const pageHeading = screen.getByRole('heading', {
      name: 'Job Application form',
    })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', { name: 'Section 1' })
    expect(sectionHeading).toBeInTheDocument()

    const headingL2 = screen.getByRole('heading', { level: 2 })
    expect(headingL2).toBeInTheDocument()

    const textBox = screen.getByRole('textbox', { name: 'Name' })
    expect(textBox).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', { name: 'Bio' })
    expect(bioElement).toBeInTheDocument()

    const comboBox = screen.getByRole('combobox')
    expect(comboBox).toBeInTheDocument()

    const checkBox = screen.getByRole('checkbox')
    expect(checkBox).toBeInTheDocument()

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()




		
		expect(button).toBeDisabled()

    const labelTag = screen.getByLabelText('Name', { selector: 'input' })
    expect(labelTag).toBeInTheDocument()

    const labelAgree = screen.getByLabelText(
      'I agree to the terms and conditions',
    )
    expect(labelAgree).toBeInTheDocument()

    const placeHolder = screen.getByPlaceholderText('Type your name')
    expect(placeHolder).toBeInTheDocument()

    const paragraphElment = screen.getByText('All fields are mandatory')
    expect(paragraphElment).toBeInTheDocument()

    const elementDisplay = screen.getByDisplayValue('Adonis Perseo')
    expect(elementDisplay).toBeInTheDocument()

    const imageElement = screen.getByAltText('a person with a laptop')
    expect(imageElement).toBeInTheDocument()

    const closeElement = screen.getByTitle('close')
    expect(closeElement).toBeInTheDocument()

    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()
  })
})

// npx unlighthouse --site
