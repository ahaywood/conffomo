import { Metadata } from '@redwoodjs/web'

const IndividualEventPage = ({ slug }: { slug: string }) => {
  console.log({ slug })
  return (
    <>
      <Metadata title="IndividualEvent" description="IndividualEvent page" />

      <h1>IndividualEventPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/IndividualEventPage/IndividualEventPage.tsx</code>
      </p>
    </>
  )
}

export default IndividualEventPage
