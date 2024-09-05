import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const NotificationsPage = () => {
  return (
    <>
      <Metadata title="Notifications" description="Notifications page" />

      <h1>NotificationsPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/NotificationsPage/NotificationsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>notifications</code>, link to me with `
        <Link to={routes.notifications()}>Notifications</Link>`
      </p>
    </>
  )
}

export default NotificationsPage
