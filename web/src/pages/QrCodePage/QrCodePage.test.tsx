import { render } from '@redwoodjs/testing/web'

import QrCodePage from './QrCodePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('QrCodePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<QrCodePage />)
    }).not.toThrow()
  })
})
