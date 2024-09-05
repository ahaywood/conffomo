import { render } from '@redwoodjs/testing/web'

import TabbedNav from './TabbedNav'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TabbedNav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TabbedNav />)
    }).not.toThrow()
  })
})
