import { Metadata } from '@redwoodjs/web'

const OrgPage = ({ slug }: { slug: string }) => {
  console.log({ slug })
  return (
    <>
      <Metadata title="Org" description="Org page" />

      <h1>OrgPage</h1>
      <p>
        Find me in <code>./web/src/pages/OrgPage/OrgPage.tsx</code>
      </p>
    </>
  )
}

export default OrgPage
