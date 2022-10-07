import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', {
        name: /next\.js \+ typescript \+ styled components/i
      })
    ).toBeInTheDocument()
  })
})
