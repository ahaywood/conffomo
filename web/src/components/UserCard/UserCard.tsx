import { Link, routes } from '@redwoodjs/router'

import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'

type User = {
  id: string
  username: string
  firstName: string
  lastName: string
  avatar: string
  bio?: string
  isFollowing?: boolean
}

type UserCardProps = {
  user: User
  following?: () => void | null
  blocked?: () => void | null
  muted?: () => void | null
}

const UserCard = ({
  user,
  following = null,
  blocked = null,
  muted = null,
}: UserCardProps) => {
  return (
    <div className="flex items-start gap-3">
      <Link to={routes.profile({ username: user.username })}>
        <Avatar
          alt="User"
          src="https://picsum.photos/seed/1725514048226/200/200"
          size={72}
        />
      </Link>
      <div className="flex-1">
        <div className="mb-2 flex w-full items-center justify-between">
          <div className="flex-1">
            <Link to={routes.profile({ username: user.username })}>
              <strong>
                {user.firstName} {user.lastName}
              </strong>
              <br />@{user.username}
            </Link>
          </div>
          {/* following */}
          {following && (
            <button
              onClick={following}
              className={`hover:bg-veryLightBlue-darker hover:border-veryLightBlue-darker border-veryLightBlue rounded-full border-2 px-4 py-1 text-sm font-bold hover:text-white ${
                user.isFollowing
                  ? 'bg-veryLightBlue text-white'
                  : 'text-veryLightBlue bg-white'
              }`}
            >
              {user.isFollowing ? 'Following' : 'Follow'}
            </button>
          )}

          {/* blocked */}
          {blocked && (
            <button
              onClick={blocked}
              className={`hover:bg-punch-darker bg-punch border-punch hover:border-punch-darker rounded-full border-2 px-4 py-1 text-sm font-bold text-white`}
            >
              Blocked
            </button>
          )}

          {/* muted */}
          {muted && (
            <button
              onClick={muted}
              className="bg-punch center hover:bg-punch-darker size-9 rounded-full text-white"
            >
              <Icon id="muted" />
            </button>
          )}
        </div>
        {user.bio && <p>{user.bio}</p>}
      </div>
    </div>
  )
}

export default UserCard
