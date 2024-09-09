export const schema = gql`
  type Event {
    id: Int!
    name: String!
    slug: String!
    startDate: DateTime!
    endDate: DateTime
    organization: Organization
    organizationId: Int
    recommendations: [Recommendation]!
    description: String
    location: String
    website: String
    public: Boolean!
    reported: Boolean!
    posts: [Post]!
    plans: [Plan]!
    muted: [Muted]!
    attending: [Attending]!
    blocks: [Block]!
    thumbnail: String
    cover: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    events: [Event!]! @requireAuth
    event(id: Int!): Event @requireAuth
  }

  input CreateEventInput {
    name: String!
    slug: String!
    startDate: DateTime!
    endDate: DateTime
    organizationId: Int!
    description: String
    location: String
    website: String
    public: Boolean!
    reported: Boolean!
    thumbnail: String
    cover: String
  }

  input UpdateEventInput {
    name: String
    slug: String
    startDate: DateTime
    endDate: DateTime
    organizationId: Int
    description: String
    location: String
    website: String
    public: Boolean
    reported: Boolean
    thumbnail: File
    cover: File
  }

  type Mutation {
    createEvent(input: CreateEventInput!): Event! @skipAuth
    updateEvent(id: Int!, input: UpdateEventInput!): Event! @skipAuth
    deleteEvent(id: Int!): Event! @skipAuth
  }
`
