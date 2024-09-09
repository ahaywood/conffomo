import { Metadata } from '@redwoodjs/web'

import ProfileCell from 'src/components/ProfileCell/ProfileCell'

const ProfilePage = ({ username }: { username: string }) => {
  console.log({ username })
  return (
    <>
      <Metadata title="Profile" description="Profile page" />

      <ProfileCell username={username} />
    </>
  )
}

export default ProfilePage
