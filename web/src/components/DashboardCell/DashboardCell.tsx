import type {
  FindDashboardQuery,
  FindDashboardQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import PostCard from '../PostCard/PostCard'

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
        username
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
  console.log({ posts })
  return (
    <ul>
      {posts.map((post, index) => (
        <li key={index} className="border-b-3 border-b-[#d8d3d2] py-8">
          <PostCard
            user={post.user}
            createdAt={post.createdAt}
            content={post.content}
            likesCount={0}
            isLiked={false}
            commentCount={0}
            bookmarksCount={0}
            isBookmarked={false}
            attachments={[]}
          />
        </li>
      ))}
    </ul>
  )
}
