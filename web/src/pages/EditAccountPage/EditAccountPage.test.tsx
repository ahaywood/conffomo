import { render } from '@redwoodjs/testing/web'

import EditAccountPage from './EditAccountPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EditAccountPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditAccountPage />)
    }).not.toThrow()
  })
})
