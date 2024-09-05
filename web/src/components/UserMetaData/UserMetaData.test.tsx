import { render } from '@redwoodjs/testing/web'

import UserMetaData from './UserMetaData'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserMetaData', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserMetaData />)
    }).not.toThrow()
  })
})
