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
    attendings: [Attending!]! @skipAuth
    attending(id: Int!): Attending @skipAuth
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
    createAttending(input: CreateAttendingInput!): Attending! @skipAuth
    updateAttending(id: Int!, input: UpdateAttendingInput!): Attending!
      @skipAuth
    deleteAttending(id: Int!): Attending! @skipAuth
  }
`
