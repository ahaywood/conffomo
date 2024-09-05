import type {
  FindAttendingGridQuery,
  FindAttendingGridQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  FindAttendingGridQuery,
  FindAttendingGridQueryVariables
> = gql`
  query FindAttendingGridQuery($id: Int!) {
    attendingGrid: attendingGrid(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindAttendingGridQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  attendingGrid,
}: CellSuccessProps<
  FindAttendingGridQuery,
  FindAttendingGridQueryVariables
>) => {
  return <div>{JSON.stringify(attendingGrid)}</div>
}
