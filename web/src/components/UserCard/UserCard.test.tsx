import { render } from '@redwoodjs/testing/web'

import UserCard from './UserCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserCard />)
    }).not.toThrow()
  })
})
