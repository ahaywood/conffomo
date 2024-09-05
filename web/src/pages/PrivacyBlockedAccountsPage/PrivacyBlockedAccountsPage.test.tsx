import { render } from '@redwoodjs/testing/web'

import PrivacyBlockedAccountsPage from './PrivacyBlockedAccountsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PrivacyBlockedAccountsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrivacyBlockedAccountsPage />)
    }).not.toThrow()
  })
})
