export const schema = gql`
  type Recommendation {
    id: Int!
    title: String!
    event: Event!
    eventId: Int!
    street1: String
    street2: String
    city: String
    state: String
    zip: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    recommendations: [Recommendation!]! @requireAuth
    recommendation(id: Int!): Recommendation @requireAuth
  }

  input CreateRecommendationInput {
    title: String!
    eventId: Int!
    street1: String
    street2: String
    city: String
    state: String
    zip: String
  }

  input UpdateRecommendationInput {
    title: String
    eventId: Int
    street1: String
    street2: String
    city: String
    state: String
    zip: String
  }

  type Mutation {
    createRecommendation(input: CreateRecommendationInput!): Recommendation!
      @requireAuth
    updateRecommendation(
      id: Int!
      input: UpdateRecommendationInput!
    ): Recommendation! @requireAuth
    deleteRecommendation(id: Int!): Recommendation! @requireAuth
  }
`
