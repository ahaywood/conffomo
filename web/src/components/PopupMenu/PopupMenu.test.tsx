import { render } from '@redwoodjs/testing/web'

import PopupMenu from './PopupMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PopupMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PopupMenu />)
    }).not.toThrow()
  })
})
