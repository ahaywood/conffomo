import { render } from '@redwoodjs/testing/web'

import IndividualPostPage from './IndividualPostPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('IndividualPostPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IndividualPostPage />)
    }).not.toThrow()
  })
})
