export const schema = gql`
  type Comment {
    id: Int!
    user: User!
    userId: Int!
    post: Post!
    postId: Int!
    comment: String!
    thread: Thread!
    threadId: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    comments: [Comment!]! @skipAuth
    comment(id: Int!): Comment @skipAuth
  }

  input CreateCommentInput {
    userId: Int!
    postId: Int!
    comment: String!
    threadId: Int!
  }

  input UpdateCommentInput {
    userId: Int
    postId: Int
    comment: String
    threadId: Int
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment! @skipAuth
    updateComment(id: Int!, input: UpdateCommentInput!): Comment! @skipAuth
    deleteComment(id: Int!): Comment! @skipAuth
  }
`
