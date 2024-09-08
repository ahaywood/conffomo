import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

import AvatarStack from '../AvatarStack/AvatarStack'
import Icon from '../Icon/Icon'
import UserMetaDataActionButtons from '../UserMetaDataActionButtons/UserMetaDataActionButtons'

interface UserMetaDataProps {
  user: {
    id: number
    username: string
    first_name: string
    last_name: string
    avatar: string
    location: string
    bio: string
    link: string
    following: {}
    followingCount: number
    followers: {}
    followersCount: number
  }
  isFollowing?: boolean
}

const UserMetaData = ({ user, isFollowing = false }: UserMetaDataProps) => {
  const { currentUser } = useAuth()

  return (
    <div className="relative">
      <div className="absolute right-0 top-0">
        {currentUser?.id === user.id ? (
          <Link
            to={routes.editProfile()}
            className="rounded-full border-2 border-black px-8 py-2 font-bold hover:border-veryLightBlue hover:text-veryLightBlue"
          >
            Edit Profile
          </Link>
        ) : (
          <UserMetaDataActionButtons
            userId={user.id}
            username={user.username}
            isFollowing={isFollowing}
          />
        )}
      </div>
      <h2 className="font-serif text-[94px] font-bold leading-none text-gabbleGreen">
        {user.first_name}
        <br />
        {user.last_name}
      </h2>
      <p className="mb-8">@{user.username}</p>
      <p className="mb-8 leading-normal">{user.bio}</p>
      <div className="mb-8 grid grid-cols-2 gap-x-5 gap-y-3">
        <div className="meta-data-item">
          <Icon id="location" /> {user.location}
        </div>
        <a
          href={user.link}
          target="_blank"
          rel="noopener noreferrer"
          className="meta-data-item font-bold underline hover:text-veryLightBlue"
        >
          <Icon id="link" /> {user.link}
        </a>
        {/* TODO: Make the Following and Follower count links */}
        <div className="meta-data-item">
          <Icon id="profile" /> <strong>{user.followingCount}</strong> Following
        </div>
        <div className="meta-data-item">
          <Icon id="profile" /> <strong>{user.followersCount}</strong> Followers
        </div>
      </div>
      <AvatarStack stack={[]} size={32} /> Followed by James Q Quick and
      {user.followersCount - 1} others
    </div>
  )
}

export default UserMetaData
