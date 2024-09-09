import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

import AvatarStack from '../AvatarStack/AvatarStack'
import Icon from '../Icon/Icon'
import UserMetaDataActionButtons from '../UserMetaDataActionButtons/UserMetaDataActionButtons'

interface UserMetaDataProps {
  event: {
    id: number
    slug: string
    avatar: string
    location: string
    description: string
    website: string
    following: {}
    followingCount: number
    followers: {}
    followersCount: number
  }
  isFollowing?: boolean
}

const EventMetaData = ({ event, isFollowing = false }: UserMetaDataProps) => {
  const { currentUser } = useAuth()

  return (
    <div className="relative">
      <h2 className="font-serif text-[94px] font-bold leading-none text-gabbleGreen">
        {event.name}
      </h2>
      <p className="mb-8">@{event.slug}</p>
      <p className="mb-8 leading-normal">{event.description}</p>
      <div className="mb-8 grid grid-cols-2 gap-x-5 gap-y-3">
        <div className="meta-data-item">
          <Icon id="location" /> {event.location}
        </div>
        <a
          href={event.website}
          target="_blank"
          rel="noopener noreferrer"
          className="meta-data-item font-bold underline hover:text-veryLightBlue"
        >
          <Icon id="link" /> Website
        </a>
        {/* TODO: Make the Following and Follower count links */}
        {/* <div className="meta-data-item">
          <Icon id="profile" /> <strong>{event.followingCount}</strong>{' '}
          Following
        </div>
        <div className="meta-data-item">
          <Icon id="profile" /> <strong>{event.followersCount}</strong>{' '}
          Followers
        </div> */}
      </div>
      {/* <AvatarStack stack={[]} size={32} /> Followed by James Q Quick and */}
      {/* {event.followersCount - 1} others */}
    </div>
  )
}

export default EventMetaData
