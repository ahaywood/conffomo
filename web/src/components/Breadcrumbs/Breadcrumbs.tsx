import { Link } from '@redwoodjs/router'

import Icon from '../Icon/Icon'

interface BreadcrumbsProps {
  label: string
  link: string
}

const Breadcrumbs = ({ label, link }: BreadcrumbsProps) => {
  return (
    <Link to={link} className="mb-6 flex items-center gap-2 font-bold">
      <Icon id="leftArrow" />
      {label}
    </Link>
  )
}

export default Breadcrumbs
