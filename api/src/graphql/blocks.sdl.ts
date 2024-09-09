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
    blocks: [Block!]! @requireAuth
    block(id: Int!): Block @requireAuth
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
    createBlock(input: CreateBlockInput!): Block! @requireAuth
    updateBlock(id: Int!, input: UpdateBlockInput!): Block! @requireAuth
    deleteBlock(id: Int!): Block! @requireAuth
  }
`
