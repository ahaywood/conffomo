export const schema = gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    username: String!
    avatar: String
    cover: String
    bio: String
    location: String
    website: String
    public: Boolean
    directMessage: Boolean
    onboarded: Boolean
    reported: Boolean
    likes: [Like]!
    comments: [Comment]!
    bookmarks: [Bookmark]!
    posts: [Post]!
    plans: [Plan]!
    messagesTo: [Message]!
    messagesFrom: [Message]!
    attendingPlans: [AttendingPlan]!
    mutedBy: [Muted]!
    mutedUser: [Muted]!
    attachments: [Attachment]!
    attending: [Attending]!
    organization: [Organization]!
    blockedByUser: [Block]!
    blockedUser: [Block]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: Int!): User @skipAuth
    userByUsername(username: String!): User @skipAuth
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    email: String
    username: String
    avatar: File
    cover: File
    bio: String
    location: String
    website: String
    public: Boolean
    directMessage: Boolean
    onboarded: Boolean
    reported: Boolean
  }

  type Mutation {
    updateUser(id: Int!, input: UpdateUserInput!): User! @skipAuth
    deleteUser(id: Int!): User! @skipAuth
  }
`
