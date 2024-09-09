export const schema = gql`
  type Event {
    id: Int!
    name: String!
    startDate: DateTime!
    endDate: DateTime
    organization: Organization!
    organizationId: Int!
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
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    events: [Event!]! @requireAuth
    event(id: Int!): Event @requireAuth
  }

  input CreateEventInput {
    name: String!
    startDate: DateTime!
    endDate: DateTime
    organizationId: Int!
    description: String
    location: String
    website: String
    public: Boolean!
    reported: Boolean!
  }

  input UpdateEventInput {
    name: String
    startDate: DateTime
    endDate: DateTime
    organizationId: Int
    description: String
    location: String
    website: String
    public: Boolean
    reported: Boolean
  }

  type Mutation {
    createEvent(input: CreateEventInput!): Event! @requireAuth
    updateEvent(id: Int!, input: UpdateEventInput!): Event! @requireAuth
    deleteEvent(id: Int!): Event! @requireAuth
  }
`
