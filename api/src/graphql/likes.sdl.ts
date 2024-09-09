export const schema = gql`
  type Like {
    id: Int!
    user: User!
    userId: Int!
    Post: Post
    postId: Int
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    likes: [Like!]! @requireAuth
    like(id: Int!): Like @requireAuth
  }

  input CreateLikeInput {
    userId: Int!
    postId: Int
  }

  input UpdateLikeInput {
    userId: Int
    postId: Int
  }

  type Mutation {
    createLike(input: CreateLikeInput!): Like! @requireAuth
    updateLike(id: Int!, input: UpdateLikeInput!): Like! @requireAuth
    deleteLike(id: Int!): Like! @requireAuth
  }
`
