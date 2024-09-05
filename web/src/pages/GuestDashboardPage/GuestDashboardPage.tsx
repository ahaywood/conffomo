import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const GuestDashboardPage = () => {
  return (
    <>
      <Metadata title="GuestDashboard" description="GuestDashboard page" />

      <h1>GuestDashboardPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/GuestDashboardPage/GuestDashboardPage.tsx</code>
      </p>
      <p>
        My default route is named <code>guestDashboard</code>, link to me with `
        <Link to={routes.guestDashboard()}>GuestDashboard</Link>`
      </p>
    </>
  )
}

export default GuestDashboardPage
