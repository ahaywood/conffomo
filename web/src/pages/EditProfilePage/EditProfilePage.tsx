import { routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import EditProfileFormCell from 'src/components/EditProfileFormCell'

const EditProfilePage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <Metadata title="EditProfile" description="EditProfile page" />

      <EditProfileFormCell id={currentUser.id} />
    </>
  )
}

export default EditProfilePage
