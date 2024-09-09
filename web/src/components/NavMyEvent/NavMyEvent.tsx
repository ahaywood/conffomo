import { Link, routes } from '@redwoodjs/router'

import Avatar from '../Avatar/Avatar'

interface NavMyEventProps {
  id: number
  thumbnail: string
  name: string
  slug: string
}

const NavMyEvent = ({ id, thumbnail, name, slug }: NavMyEventProps) => {
  return (
    <li className="m-0 list-none p-0">
      <Link
        to={routes.individualEvent({ slug: slug })}
        className="nav-item text-lg hover:text-veryLightBlue"
      >
        <Avatar src={thumbnail} alt={name} size={24} shape="square" />
        {name}
      </Link>
    </li>
  )
}

export default NavMyEvent
