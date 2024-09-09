export const schema = gql`
  type Attachment {
    id: Int!
    user: User!
    userId: Int!
    post: Post!
    postId: Int!
    alt: String
    caption: String
    message: Message!
    messageId: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    attachments: [Attachment!]! @requireAuth
    attachment(id: Int!): Attachment @requireAuth
  }

  input CreateAttachmentInput {
    userId: Int!
    postId: Int!
    alt: String
    caption: String
    messageId: Int!
  }

  input UpdateAttachmentInput {
    userId: Int
    postId: Int
    alt: String
    caption: String
    messageId: Int
  }

  type Mutation {
    createAttachment(input: CreateAttachmentInput!): Attachment! @requireAuth
    updateAttachment(id: Int!, input: UpdateAttachmentInput!): Attachment!
      @requireAuth
    deleteAttachment(id: Int!): Attachment! @requireAuth
  }
`
