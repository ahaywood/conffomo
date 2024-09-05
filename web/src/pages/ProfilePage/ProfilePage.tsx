import { Metadata } from '@redwoodjs/web'

const ProfilePage = ({ username }: { username: string }) => {
  console.log({ username })
  return (
    <>
      <Metadata title="Profile" description="Profile page" />

      <h1>ProfilePage</h1>
      <p>
        Find me in <code>./web/src/pages/ProfilePage/ProfilePage.tsx</code>
      </p>
    </>
  )
}

export default ProfilePage
