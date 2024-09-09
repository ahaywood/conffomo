import { Link, routes } from '@redwoodjs/router'

import { Constants } from 'src/helpers/Constants'

type FooterProps = {
  className?: string
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={className}>
      <p className="mb-3">
        <Link to={routes.about()}>About</Link>&nbsp;&nbsp;•&nbsp;&nbsp;
        <Link to={routes.contact()}>Contact</Link>&nbsp;&nbsp;•&nbsp;&nbsp;
        <Link to={routes.privacy()}>Privacy Policy</Link>
        &nbsp;&nbsp;•&nbsp;&nbsp;
        <Link to={routes.terms()}>Terms and Conditions</Link>
        &nbsp;&nbsp;•&nbsp;&nbsp;
        <Link to={routes.disclaimers()}>Disclaimers</Link>
      </p>
      <p>
        Copyright &copy;{new Date().getFullYear()}.{' '}
        <a href={Constants.AH_HA_CREATIVE}>Ah Ha Creative, LLC</a>. All Rights
        Reserved.
      </p>
    </footer>
  )
}

export default Footer
