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
    likes: [Like!]! @skipAuth
    like(id: Int!): Like @skipAuth
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
    createLike(input: CreateLikeInput!): Like! @skipAuth
    updateLike(id: Int!, input: UpdateLikeInput!): Like! @skipAuth
    deleteLike(id: Int!): Like! @skipAuth
  }
`
