import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const ContactPage = () => {
  return (
    <>
      <Metadata title="Contact" description="Contact page" />

      <h1>ContactPage</h1>
      <p>
        Find me in <code>./web/src/pages/ContactPage/ContactPage.tsx</code>
      </p>
      <p>
        My default route is named <code>contact</code>, link to me with `
        <Link to={routes.contact()}>Contact</Link>`
      </p>
    </>
  )
}

export default ContactPage
