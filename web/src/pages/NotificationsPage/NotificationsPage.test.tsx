import { render } from '@redwoodjs/testing/web'

import NotificationsPage from './NotificationsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NotificationsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotificationsPage />)
    }).not.toThrow()
  })
})
