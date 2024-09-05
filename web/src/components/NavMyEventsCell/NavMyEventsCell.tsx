import type { NavMyEventsQuery, NavMyEventsQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  NavMyEventsQuery,
  NavMyEventsQueryVariables
> = gql`
  query NavMyEventsQuery {
    navMyEvents {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  navMyEvents,
}: CellSuccessProps<NavMyEventsQuery>) => {
  return (
    <ul>
      {navMyEvents.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
