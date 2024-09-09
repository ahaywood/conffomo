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
    muteds: [Muted!]! @skipAuth
    muted(id: Int!): Muted @skipAuth
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
    createMuted(input: CreateMutedInput!): Muted! @skipAuth
    updateMuted(id: Int!, input: UpdateMutedInput!): Muted! @skipAuth
    deleteMuted(id: Int!): Muted! @skipAuth
  }
`
