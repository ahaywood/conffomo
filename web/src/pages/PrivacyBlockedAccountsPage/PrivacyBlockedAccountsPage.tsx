import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PrivacyBlockedAccountsPage = () => {
  return (
    <>
      <Metadata
        title="PrivacyBlockedAccounts"
        description="PrivacyBlockedAccounts page"
      />

      <h1>PrivacyBlockedAccountsPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/PrivacyBlockedAccountsPage/PrivacyBlockedAccountsPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>privacyBlockedAccounts</code>, link to
        me with `
        <Link to={routes.privacyBlockedAccounts()}>PrivacyBlockedAccounts</Link>
        `
      </p>
    </>
  )
}

export default PrivacyBlockedAccountsPage
