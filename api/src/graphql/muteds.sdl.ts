export const schema = gql`
  type Muted {
    id: Int!
    mutedBy: User!
    mutedById: Int!
    mutedUser: User!
    mutedUserId: Int!
    mutedEvent: Event!
    eventId: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    muteds: [Muted!]! @requireAuth
    muted(id: Int!): Muted @requireAuth
  }

  input CreateMutedInput {
    mutedById: Int!
    mutedUserId: Int!
    eventId: Int!
  }

  input UpdateMutedInput {
    mutedById: Int
    mutedUserId: Int
    eventId: Int
  }

  type Mutation {
    createMuted(input: CreateMutedInput!): Muted! @requireAuth
    updateMuted(id: Int!, input: UpdateMutedInput!): Muted! @requireAuth
    deleteMuted(id: Int!): Muted! @requireAuth
  }
`
