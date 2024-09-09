import type {
  FindEventsAttendedQuery,
  FindEventsAttendedQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  FindEventsAttendedQuery,
  FindEventsAttendedQueryVariables
> = gql`
  query FindEventsAttendedQuery {
    redwood {
      version
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEventsAttendedQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  eventsAttended,
}: CellSuccessProps<
  FindEventsAttendedQuery,
  FindEventsAttendedQueryVariables
>) => {
  return <div>{JSON.stringify(eventsAttended)}</div>
}
