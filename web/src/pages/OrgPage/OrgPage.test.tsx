import { render } from '@redwoodjs/testing/web'

import OrgPage from './OrgPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('OrgPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrgPage />)
    }).not.toThrow()
  })
})
