import { render } from '@redwoodjs/testing/web'

import EventListCard from './EventListCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EventListCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventListCard />)
    }).not.toThrow()
  })
})
