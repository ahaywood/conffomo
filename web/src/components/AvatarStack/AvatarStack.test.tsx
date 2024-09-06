import { render } from '@redwoodjs/testing/web'

import AvatarStack from './AvatarStack'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AvatarStack', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AvatarStack />)
    }).not.toThrow()
  })
})
