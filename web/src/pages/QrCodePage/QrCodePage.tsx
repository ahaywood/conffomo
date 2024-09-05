import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const QrCodePage = () => {
  return (
    <>
      <Metadata title="QrCode" description="QrCode page" />

      <h1>QrCodePage</h1>
      <p>
        Find me in <code>./web/src/pages/QrCodePage/QrCodePage.tsx</code>
      </p>
      <p>
        My default route is named <code>qrCode</code>, link to me with `
        <Link to={routes.qrCode()}>QrCode</Link>`
      </p>
    </>
  )
}

export default QrCodePage
