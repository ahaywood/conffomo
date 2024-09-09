import { render } from '@redwoodjs/testing/web'

import ModalWrapper from './ModalWrapper'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ModalWrapper', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ModalWrapper />)
    }).not.toThrow()
  })
})
