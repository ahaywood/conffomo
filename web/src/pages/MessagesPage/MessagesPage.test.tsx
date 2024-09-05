import { render } from '@redwoodjs/testing/web'

import MessagesPage from './MessagesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MessagesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MessagesPage />)
    }).not.toThrow()
  })
})
