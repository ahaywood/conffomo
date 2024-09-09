import { Metadata } from '@redwoodjs/web'

import IndividualEventCell from 'src/components/IndividualEventCell'

const IndividualEventPage = ({ slug }: { slug: string }) => {
  return (
    <>
      <Metadata title="IndividualEvent" description="IndividualEvent page" />
      <IndividualEventCell slug={slug} />
    </>
  )
}

export default IndividualEventPage
