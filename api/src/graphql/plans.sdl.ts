export const schema = gql`
  type Plan {
    id: Int!
    title: String!
    startDate: DateTime!
    endDate: DateTime
    thumbnail: String
    reported: Boolean!
    street1: String
    street2: String
    city: String
    state: String
    zip: String
    public: Boolean!
    limit: Int
    event: Event!
    eventId: Int!
    user: User!
    userId: Int!
    attendingPlans: [AttendingPlan]!
    posts: [Post]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    plans: [Plan!]! @requireAuth
    plan(id: Int!): Plan @requireAuth
  }

  input CreatePlanInput {
    title: String!
    startDate: DateTime!
    endDate: DateTime
    thumbnail: String
    reported: Boolean!
    street1: String
    street2: String
    city: String
    state: String
    zip: String
    public: Boolean!
    limit: Int
    eventId: Int!
    userId: Int!
  }

  input UpdatePlanInput {
    title: String
    startDate: DateTime
    endDate: DateTime
    thumbnail: String
    reported: Boolean
    street1: String
    street2: String
    city: String
    state: String
    zip: String
    public: Boolean
    limit: Int
    eventId: Int
    userId: Int
  }

  type Mutation {
    createPlan(input: CreatePlanInput!): Plan! @requireAuth
    updatePlan(id: Int!, input: UpdatePlanInput!): Plan! @requireAuth
    deletePlan(id: Int!): Plan! @requireAuth
  }
`
