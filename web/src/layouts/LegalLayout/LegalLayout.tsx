import { Link } from '@redwoodjs/router'

import Footer from 'src/components/Footer/Footer'

type LegalLayoutProps = {
  children?: React.ReactNode
  pageTitle: string
}

const LegalLayout = ({ children, pageTitle }: LegalLayoutProps) => {
  return (
    <>
      <div className="page-grid relative">
        <div className="px-page feature-legal col-span-6 min-h-[100vh] bg-[#5465FF] bg-opacity-10">
          {/* circle */}
          <div className="absolute -top-6 left-[100px] h-[292px] w-[292px] rounded-full bg-[#d9d9d9]" />
          <Link to="/">
            <img
              src="/images/logo.svg"
              alt="CONF FOMO"
              className="z-logo relative w-[179px] pt-12"
            />
          </Link>

          <h1 className="page-title z-content relative mt-12">{pageTitle}</h1>
        </div>

        <div className="px-page col-span-6">
          <div className="mb-10 mt-20">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default LegalLayout
