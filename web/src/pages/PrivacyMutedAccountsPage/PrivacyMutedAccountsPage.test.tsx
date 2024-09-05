import { render } from '@redwoodjs/testing/web'

import PrivacyMutedAccountsPage from './PrivacyMutedAccountsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PrivacyMutedAccountsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrivacyMutedAccountsPage />)
    }).not.toThrow()
  })
})
