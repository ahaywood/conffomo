import { Link } from '@redwoodjs/router'

import type { IconName } from 'src/components/Icon/name.d.ts'

import Icon from '../Icon/Icon'

interface MenuItem {
  label: string
  icon: IconName
  href?: string
  onClick?: () => void
}

interface PopupMenuProps {
  position?:
    | 'topCenter'
    | 'topLeft'
    | 'topRight'
    | 'bottomCenter'
    | 'bottomLeft'
    | 'bottomRight'
  menuItems: MenuItem[]
}

const PopupMenu = ({ position = 'topCenter', menuItems }: PopupMenuProps) => {
  return (
    <ul
      className={`popup-menu popup-menu--${position} border-veryLightBlue inline-flex flex-col gap-3 rounded-lg border-2 bg-white py-4 pl-5 pr-9`}
    >
      {menuItems.map((item) => (
        <li key={item.label}>
          {item.onClick ? (
            <button onClick={item.onClick} className="nav-item gap-1 text-sm">
              <Icon id={item.icon} />
              {item.label}
            </button>
          ) : (
            <Link to={item.href} className="nav-item gap-1 text-sm">
              <Icon id={item.icon} />
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

export default PopupMenu
