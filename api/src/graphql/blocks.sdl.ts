export const schema = gql`
  type Block {
    id: Int!
    blockedByUser: User!
    blockedByUserId: Int!
    blockedUser: User!
    blockedUserId: Int!
    blockedEvent: Event!
    eventId: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    blocks: [Block!]! @skipAuth
    block(id: Int!): Block @skipAuth
  }

  input CreateBlockInput {
    blockedByUserId: Int!
    blockedUserId: Int!
    eventId: Int!
  }

  input UpdateBlockInput {
    blockedByUserId: Int
    blockedUserId: Int
    eventId: Int
  }

  type Mutation {
    createBlock(input: CreateBlockInput!): Block! @skipAuth
    updateBlock(id: Int!, input: UpdateBlockInput!): Block! @skipAuth
    deleteBlock(id: Int!): Block! @skipAuth
  }
`
