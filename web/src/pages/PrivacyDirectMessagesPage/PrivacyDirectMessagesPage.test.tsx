import { render } from '@redwoodjs/testing/web'

import PrivacyDirectMessagesPage from './PrivacyDirectMessagesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PrivacyDirectMessagesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrivacyDirectMessagesPage />)
    }).not.toThrow()
  })
})
