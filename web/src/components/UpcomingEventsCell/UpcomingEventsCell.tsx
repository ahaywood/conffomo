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
  query UpcomingEventsQuery($id: Int!) {
    user(id: $id) {
      attending {
        id
        event {
          id
          thumbnail
          name
          slug
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => null

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ user }: CellSuccessProps<UpcomingEventsQuery>) => {
  const { attending } = user
  return <EventListCard heading="Upcoming Events" events={attending} />
}
