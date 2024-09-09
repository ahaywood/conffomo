import { render } from '@redwoodjs/testing/web'

import Breadcrumbs from './Breadcrumbs'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Breadcrumbs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Breadcrumbs />)
    }).not.toThrow()
  })
})
