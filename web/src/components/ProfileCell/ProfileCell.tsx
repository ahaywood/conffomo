import type { FindProfileQuery, FindProfileQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Avatar from '../Avatar'
import PostCard from '../PostCard/PostCard'
import UpcomingEventsCell from '../UpcomingEventsCell'
import UserMetaData from '../UserMetaData/UserMetaData'
import UserMetaDataActionButtons from '../UserMetaDataActionButtons/UserMetaDataActionButtons'

export const QUERY: TypedDocumentNode<
  FindProfileQuery,
  FindProfileQueryVariables
> = gql`
  query FindProfileQuery($username: String!) {
    userByUsername(username: $username) {
      id
      lastName
      firstName
      cover
      avatar
      bio
      website
      username
      location
      posts {
        id
        createdAt
        content
        user {
          avatar
          username
          id
          lastName
          firstName
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindProfileQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  userByUsername,
}: CellSuccessProps<FindProfileQuery, FindProfileQueryVariables>) => {
  console.log({ userByUsername })
  return (
    <>
      <div className="relative">
        <img
          src={userByUsername?.cover}
          alt=""
          className="mb-5 h-[250px] w-full object-cover pl-4 pr-8"
        />
        <div className="absolute left-10 top-0 flex h-full items-center">
          <Avatar
            src={userByUsername?.avatar}
            alt={`${userByUsername?.firstName} ${userByUsername?.lastName}`}
            size={190}
          />
        </div>
      </div>
      <div className="interior-grid">
        <div className="p-4">
          <div className="border-b-2 border-[#d8d3d2]">
            <UserMetaData user={userByUsername} />
          </div>
          <ul>
            {userByUsername.posts.map((post, index) => (
              <li className="border-b-2 border-white py-6" key={index}>
                <PostCard
                  user={post.user}
                  createdAt={post.createdAt}
                  content={post.content}
                  likesCount={post.likesCount}
                  isLiked={post.isLiked}
                  commentCount={post.commentCount}
                  bookmarksCount={post.bookmarksCount}
                  isBookmarked={post.isBookmarked}
                />
              </li>
            ))}
          </ul>
        </div>
        <aside className="mr-10 border-l-1 border-black pl-4">
          <UpcomingEventsCell id={userByUsername.id} />
        </aside>
      </div>
    </>
  )
}
