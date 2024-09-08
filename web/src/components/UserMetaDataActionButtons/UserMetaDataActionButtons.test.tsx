import { render } from '@redwoodjs/testing/web'

import UserMetaDataActionButtons from './UserMetaDataActionButtons'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserMetaDataActionButtons', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserMetaDataActionButtons />)
    }).not.toThrow()
  })
})
