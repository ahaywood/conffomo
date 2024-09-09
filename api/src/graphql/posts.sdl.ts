export const schema = gql`
  type Post {
    id: Int!
    user: User!
    userId: Int!
    event: Event!
    eventId: Int!
    content: String!
    plan: Plan
    PlanId: Int
    attachments: [Attachment]!
    comments: [Comment]!
    bookmarks: [Bookmark]!
    likes: [Like]!
    reported: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    posts: [Post!]! @skipAuth
    post(id: Int!): Post @skipAuth
  }

  input CreatePostInput {
    userId: Int!
    eventId: Int!
    content: String!
    PlanId: Int
    reported: Boolean
  }

  input UpdatePostInput {
    userId: Int
    eventId: Int
    content: String
    PlanId: Int
    reported: Boolean
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @skipAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @skipAuth
    deletePost(id: Int!): Post! @skipAuth
  }
`
