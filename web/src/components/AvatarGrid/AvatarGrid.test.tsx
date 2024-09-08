import { render } from '@redwoodjs/testing/web'

import AvatarGrid from './AvatarGrid'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AvatarGrid', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AvatarGrid />)
    }).not.toThrow()
  })
})
