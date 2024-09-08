import { Link, routes } from '@redwoodjs/router'

import Avatar from '../Avatar/Avatar'

interface AvatarGridProps {
  heading: string
  users: {
    firstName: string
    lastName: string
    username: string
    avatar: string
  }[]
  size?: number
}

const AvatarGrid = ({ heading, users, size = 48 }: AvatarGridProps) => {
  return (
    <div className="mb-10">
      <h2 className="mb-4 text-2xl font-bold">{heading}</h2>
      <div className="flex flex-wrap gap-2">
        {users.map((user, index) => (
          <Link key={index} to={routes.profile({ username: user.username })}>
            <Avatar
              alt={`${user.firstName} ${user.lastName}`}
              src={user.avatar}
              size={size}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AvatarGrid
