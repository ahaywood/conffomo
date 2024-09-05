import type {
  FindSpeakingGridQuery,
  FindSpeakingGridQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  FindSpeakingGridQuery,
  FindSpeakingGridQueryVariables
> = gql`
  query FindSpeakingGridQuery($id: Int!) {
    speakingGrid: speakingGrid(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindSpeakingGridQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  speakingGrid,
}: CellSuccessProps<FindSpeakingGridQuery, FindSpeakingGridQueryVariables>) => {
  return <div>{JSON.stringify(speakingGrid)}</div>
}
