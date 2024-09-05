import { render } from '@redwoodjs/testing/web'

import NavMyEvent from './NavMyEvent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NavMyEvent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavMyEvent />)
    }).not.toThrow()
  })
})
