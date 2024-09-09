import { render } from '@redwoodjs/testing/web'

import EventMetaData from './EventMetaData'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EventMetaData', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventMetaData />)
    }).not.toThrow()
  })
})
