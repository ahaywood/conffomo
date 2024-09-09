export const schema = gql`
  type Organization {
    id: Int!
    name: String!
    events: [Event]!
    user: User!
    userId: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    organizations: [Organization!]! @requireAuth
    organization(id: Int!): Organization @requireAuth
  }

  input CreateOrganizationInput {
    name: String!
    userId: Int!
  }

  input UpdateOrganizationInput {
    name: String
    userId: Int
  }

  type Mutation {
    createOrganization(input: CreateOrganizationInput!): Organization!
      @requireAuth
    updateOrganization(
      id: Int!
      input: UpdateOrganizationInput!
    ): Organization! @requireAuth
    deleteOrganization(id: Int!): Organization! @requireAuth
  }
`
