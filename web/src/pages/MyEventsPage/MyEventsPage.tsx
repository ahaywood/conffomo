import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const MyEventsPage = () => {
  return (
    <>
      <Metadata title="MyEvents" description="MyEvents page" />

      <h1>MyEventsPage</h1>
      <p>
        Find me in <code>./web/src/pages/MyEventsPage/MyEventsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>myEvents</code>, link to me with `
        <Link to={routes.myEvents()}>MyEvents</Link>`
      </p>
    </>
  )
}

export default MyEventsPage
