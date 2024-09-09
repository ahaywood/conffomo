import type {
  UpcomingEventsQuery,
  UpcomingEventsQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  UpcomingEventsQuery,
  UpcomingEventsQueryVariables
> = gql`
  query UpcomingEventsQuery {
    redwood {
      version
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  upcomingEvents,
}: CellSuccessProps<UpcomingEventsQuery>) => {
  return (
    <ul>
      {upcomingEvents.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
