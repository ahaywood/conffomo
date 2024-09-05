import { render } from '@redwoodjs/testing/web'

import IndividualEventPage from './IndividualEventPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('IndividualEventPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IndividualEventPage />)
    }).not.toThrow()
  })
})
