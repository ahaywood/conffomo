import { Link, routes } from '@redwoodjs/router'

import Avatar from '../Avatar/Avatar'

interface NavMyEventProps {
  thumbnail: string
  title: string
  slug: string
}

const NavMyEvent = ({ thumbnail, title, slug }: NavMyEventProps) => {
  return (
    <li className="m-0 list-none p-0">
      <Link
        to={routes.individualEvent({ slug })}
        className="nav-item hover:text-veryLightBlue"
      >
        <Avatar src={thumbnail} alt={title} size={32} shape="square" />
        {title}
      </Link>
    </li>
  )
}

export default NavMyEvent
