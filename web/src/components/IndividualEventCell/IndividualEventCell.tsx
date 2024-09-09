import type {
  FindIndividualEventQuery,
  FindIndividualEventQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Avatar from '../Avatar/Avatar'
import EventMetaData from '../EventMetaData/EventMetaData'
import PostCard from '../PostCard/PostCard'

export const QUERY: TypedDocumentNode<
  FindIndividualEventQuery,
  FindIndividualEventQueryVariables
> = gql`
  query FindIndividualEventQuery($slug: String!) {
    eventBySlug(slug: $slug) {
      id
      cover
      startDate
      thumbnail
      website
      name
      slug
      website
      description
      location
      posts {
        id
        user {
          avatar
          firstName
          id
          lastName
          username
        }
        content
        createdAt
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindIndividualEventQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  eventBySlug,
}: CellSuccessProps<
  FindIndividualEventQuery,
  FindIndividualEventQueryVariables
>) => {
  return (
    <>
      {/* COVER IMAGE */}
      <div className="relative">
        <img
          src="/images/WEB-DEV-CHALLENGE-IRL-COVER.png"
          alt=""
          className="mb-5 h-[250px] w-full object-cover pl-4 pr-8"
        />
        <div className="absolute left-10 top-0 flex h-full items-center">
          <Avatar
            src="/images/WEB-DEV-CHALLENGE-IRL-AVATAR.png"
            alt="Web Dev Challenge IRL"
            size={190}
          />
        </div>
      </div>

      <div className="interior-grid">
        <div className="p-10">
          <EventMetaData event={eventBySlug} />

          {/* EVENT FEED */}
          <ul>
            {eventBySlug?.posts.map((post, index) => (
              <li key={index} className="border-t-3 border-[#d8d3d2] py-8">
                <PostCard
                  user={post.user}
                  createdAt={post.createdAt}
                  content={post.content}
                  likesCount={0}
                  isLiked={false}
                  commentCount={0}
                  bookmarksCount={0}
                  isBookmarked={false}
                />
              </li>
            ))}
          </ul>
        </div>
        <aside className="border-l-1 border-black">
          {/* TODO: People attending */}
        </aside>
      </div>
    </>
  )
}
