import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PrivacyDirectMessagesPage = () => {
  return (
    <>
      <Metadata
        title="PrivacyDirectMessages"
        description="PrivacyDirectMessages page"
      />

      <h1>PrivacyDirectMessagesPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/PrivacyDirectMessagesPage/PrivacyDirectMessagesPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>privacyDirectMessages</code>, link to me
        with `
        <Link to={routes.privacyDirectMessages()}>PrivacyDirectMessages</Link>`
      </p>
    </>
  )
}

export default PrivacyDirectMessagesPage
