export const schema = gql`
  type User {
    id: Int!
    email: String!
    avatar: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: Int!): User @skipAuth
  }

  input UpdateUserInput {
    email: String
    avatar: File
  }

  type Mutation {
    updateUser(id: Int!, input: UpdateUserInput!): User! @skipAuth
    deleteUser(id: Int!): User! @skipAuth
  }
`
