import { Metadata } from '@redwoodjs/web'

const IndividualPostPage = ({ id }: { id: string }) => {
  console.log({ id })
  return (
    <>
      <Metadata title="IndividualPost" description="IndividualPost page" />

      <h1>IndividualPostPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/IndividualPostPage/IndividualPostPage.tsx</code>
      </p>
    </>
  )
}

export default IndividualPostPage
