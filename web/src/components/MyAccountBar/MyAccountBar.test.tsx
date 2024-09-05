import { render } from '@redwoodjs/testing/web'

import MyAccountBar from './MyAccountBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MyAccountBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyAccountBar />)
    }).not.toThrow()
  })
})
