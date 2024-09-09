export const schema = gql`
  type Attachment {
    id: Int!
    user: User!
    userId: Int!
    post: Post!
    postId: Int!
    alt: String
    caption: String
    threads: [Thread]!
    type: AttachmentType!
    message: Message!
    messageId: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum AttachmentType {
    PHOTO
    VIDEO
  }

  type Query {
    attachments: [Attachment!]! @skipAuth
    attachment(id: Int!): Attachment @skipAuth
  }

  input CreateAttachmentInput {
    userId: Int!
    postId: Int!
    alt: String
    caption: String
    type: AttachmentType!
    messageId: Int!
  }

  input UpdateAttachmentInput {
    userId: Int
    postId: Int
    alt: String
    caption: String
    type: AttachmentType
    messageId: Int
  }

  type Mutation {
    createAttachment(input: CreateAttachmentInput!): Attachment! @skipAuth
    updateAttachment(id: Int!, input: UpdateAttachmentInput!): Attachment!
      @skipAuth
    deleteAttachment(id: Int!): Attachment! @skipAuth
  }
`
