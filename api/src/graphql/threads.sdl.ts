export const schema = gql`
  type Thread {
    id: Int!
    comments: [Comment]!
    attachments: Attachment!
    attachmentId: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    threads: [Thread!]! @requireAuth
    thread(id: Int!): Thread @requireAuth
  }

  input CreateThreadInput {
    attachmentId: Int!
  }

  input UpdateThreadInput {
    attachmentId: Int
  }

  type Mutation {
    createThread(input: CreateThreadInput!): Thread! @requireAuth
    updateThread(id: Int!, input: UpdateThreadInput!): Thread! @requireAuth
    deleteThread(id: Int!): Thread! @requireAuth
  }
`
