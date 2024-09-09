import type {
  UpcomingEventsQuery,
  UpcomingEventsQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import EventListCard from '../EventListCard/EventListCard'

export const QUERY: TypedDocumentNode<
  UpcomingEventsQuery,
  UpcomingEventsQueryVariables
> = gql`
  query UpcomingEventsQuery {
    events {
      id
      name
      thumbnail
      cover
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => null

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ events }: CellSuccessProps<UpcomingEventsQuery>) => {
  return <EventListCard heading="Upcoming Events" events={events} />
}
