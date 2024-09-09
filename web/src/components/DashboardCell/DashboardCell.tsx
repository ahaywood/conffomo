import type {
  FindDashboardQuery,
  FindDashboardQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  FindDashboardQuery,
  FindDashboardQueryVariables
> = gql`
  query FindDashboardQuery {
    posts {
      id
      user {
        id
        firstName
        lastName
        avatar
      }
      content
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindDashboardQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  posts,
}: CellSuccessProps<FindDashboardQuery, FindDashboardQueryVariables>) => {
  return <div>{JSON.stringify(posts)}</div>
}
