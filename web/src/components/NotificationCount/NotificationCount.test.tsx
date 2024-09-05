import { render } from '@redwoodjs/testing/web'

import NotificationCount from './NotificationCount'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NotificationCount', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotificationCount />)
    }).not.toThrow()
  })
})
