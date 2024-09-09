export const schema = gql`
  type Message {
    id: Int!
    toUser: User!
    toUserId: Int!
    fromUser: User!
    fromUserId: Int!
    message: String!
    edited: Boolean!
    attachments: [Attachment]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    messages: [Message!]! @requireAuth
    message(id: Int!): Message @requireAuth
  }

  input CreateMessageInput {
    toUserId: Int!
    fromUserId: Int!
    message: String!
    edited: Boolean!
  }

  input UpdateMessageInput {
    toUserId: Int
    fromUserId: Int
    message: String
    edited: Boolean
  }

  type Mutation {
    createMessage(input: CreateMessageInput!): Message! @requireAuth
    updateMessage(id: Int!, input: UpdateMessageInput!): Message! @requireAuth
    deleteMessage(id: Int!): Message! @requireAuth
  }
`
