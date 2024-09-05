import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const EditAccountPage = () => {
  return (
    <>
      <Metadata title="EditAccount" description="EditAccount page" />

      <h1>EditAccountPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/EditAccountPage/EditAccountPage.tsx</code>
      </p>
      <p>
        My default route is named <code>editAccount</code>, link to me with `
        <Link to={routes.editAccount()}>EditAccount</Link>`
      </p>
    </>
  )
}

export default EditAccountPage
