import { Link } from '@redwoodjs/router'

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <div className="page-grid px-page relative">
        {/* circle */}
        <div className="absolute -top-6 left-[100px] h-[292px] w-[292px] rounded-full bg-[#d9d9d9]" />
        <div className="col-span-12">
          <Link to="/">
            <img
              src="/images/logo.svg"
              alt="CONF FOMO"
              className="z-logo relative w-[179px] pt-12"
            />
          </Link>
        </div>
        {children}
      </div>
    </>
  )
}

export default AuthLayout
