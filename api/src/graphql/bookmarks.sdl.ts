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
    bookmarks: [Bookmark!]! @requireAuth
    bookmark(id: Int!): Bookmark @requireAuth
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
    createBookmark(input: CreateBookmarkInput!): Bookmark! @requireAuth
    updateBookmark(id: Int!, input: UpdateBookmarkInput!): Bookmark!
      @requireAuth
    deleteBookmark(id: Int!): Bookmark! @requireAuth
  }
`
