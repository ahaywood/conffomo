import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PrivacyMutedAccountsPage = () => {
  return (
    <>
      <Metadata
        title="PrivacyMutedAccounts"
        description="PrivacyMutedAccounts page"
      />

      <h1>PrivacyMutedAccountsPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/PrivacyMutedAccountsPage/PrivacyMutedAccountsPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>privacyMutedAccounts</code>, link to me
        with `
        <Link to={routes.privacyMutedAccounts()}>PrivacyMutedAccounts</Link>`
      </p>
    </>
  )
}

export default PrivacyMutedAccountsPage
