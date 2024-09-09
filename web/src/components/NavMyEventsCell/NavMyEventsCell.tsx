import type { NavMyEventsQuery, NavMyEventsQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import NavMyEvent from '../NavMyEvent/NavMyEvent'

export const QUERY: TypedDocumentNode<
  NavMyEventsQuery,
  NavMyEventsQueryVariables
> = gql`
  query NavMyEventsQuery($id: Int!) {
    user(id: $id) {
      username
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

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ user }: CellSuccessProps<NavMyEventsQuery>) => {
  console.log(user)
  return (
    <ul className="my-2">
      {user.attending.map((item, index) => {
        return (
          <li key={index}>
            <NavMyEvent
              id={item.id}
              thumbnail={item.event.thumbnail}
              name={item.event.name}
              slug={item.event.slug}
            />
          </li>
        )
      })}
    </ul>
  )
}
