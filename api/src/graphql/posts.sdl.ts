export const schema = gql`
  type Post {
    id: Int!
    user: User!
    userId: Int!
    event: Event!
    eventId: Int!
    content: String!
    plan: Plan!
    PlanId: Int!
    attachments: [Attachment]!
    comments: [Comment]!
    bookmarks: [Bookmark]!
    likes: [Like]!
    reported: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostInput {
    userId: Int!
    eventId: Int!
    content: String!
    PlanId: Int!
    reported: Boolean!
  }

  input UpdatePostInput {
    userId: Int
    eventId: Int
    content: String
    PlanId: Int
    reported: Boolean
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
