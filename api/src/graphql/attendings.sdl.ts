export const schema = gql`
  type Attending {
    id: Int!
    user: User!
    userId: Int!
    event: Event!
    eventId: Int!
    speaking: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    attendings: [Attending!]! @requireAuth
    attending(id: Int!): Attending @requireAuth
  }

  input CreateAttendingInput {
    userId: Int!
    eventId: Int!
    speaking: Boolean!
  }

  input UpdateAttendingInput {
    userId: Int
    eventId: Int
    speaking: Boolean
  }

  type Mutation {
    createAttending(input: CreateAttendingInput!): Attending! @requireAuth
    updateAttending(id: Int!, input: UpdateAttendingInput!): Attending!
      @requireAuth
    deleteAttending(id: Int!): Attending! @requireAuth
  }
`
