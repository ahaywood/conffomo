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
    threads: [Thread!]! @skipAuth
    thread(id: Int!): Thread @skipAuth
  }

  input CreateThreadInput {
    attachmentId: Int!
  }

  input UpdateThreadInput {
    attachmentId: Int
  }

  type Mutation {
    createThread(input: CreateThreadInput!): Thread! @skipAuth
    updateThread(id: Int!, input: UpdateThreadInput!): Thread! @skipAuth
    deleteThread(id: Int!): Thread! @skipAuth
  }
`
