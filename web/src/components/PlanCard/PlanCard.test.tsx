import { render } from '@redwoodjs/testing/web'

import PlanCard from './PlanCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlanCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlanCard />)
    }).not.toThrow()
  })
})
