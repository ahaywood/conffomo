import { routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import Breadcrumbs from 'src/components/Breadcrumbs/Breadcrumbs'
import EditAccountFormCell from 'src/components/EditAccountFormCell'

const EditAccountPage = () => {
  const { currentUser } = useAuth()
  return (
    <>
      <Metadata title="EditAccount" description="EditAccount page" />

      <div className="grid grid-cols-9 gap-5">
        <div className="col-span-6 px-10">
          <Breadcrumbs label="Feed" link={routes.dashboard()} />
          <h1 className="page-title mb-8">My Account</h1>

          <EditAccountFormCell id={currentUser.id} />
        </div>
      </div>
    </>
  )
}

export default EditAccountPage
