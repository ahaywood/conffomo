import { render } from '@redwoodjs/testing/web'

import GuestDashboardPage from './GuestDashboardPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GuestDashboardPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GuestDashboardPage />)
    }).not.toThrow()
  })
})
