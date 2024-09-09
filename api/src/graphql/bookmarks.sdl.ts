export const schema = gql`
  type Bookmark {
    id: Int!
    post: Post!
    postId: Int!
    user: User!
    userId: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    bookmarks: [Bookmark!]! @skipAuth
    bookmark(id: Int!): Bookmark @skipAuth
  }

  input CreateBookmarkInput {
    postId: Int!
    userId: Int!
  }

  input UpdateBookmarkInput {
    postId: Int
    userId: Int
  }

  type Mutation {
    createBookmark(input: CreateBookmarkInput!): Bookmark! @skipAuth
    updateBookmark(id: Int!, input: UpdateBookmarkInput!): Bookmark! @skipAuth
    deleteBookmark(id: Int!): Bookmark! @skipAuth
  }
`
