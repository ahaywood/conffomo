import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const MessagesPage = () => {
  return (
    <>
      <Metadata title="Messages" description="Messages page" />

      <h1>MessagesPage</h1>
      <p>
        Find me in <code>./web/src/pages/MessagesPage/MessagesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>messages</code>, link to me with `
        <Link to={routes.messages()}>Messages</Link>`
      </p>
    </>
  )
}

export default MessagesPage
