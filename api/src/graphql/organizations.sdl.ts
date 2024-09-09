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
    organizations: [Organization!]! @skipAuth
    organization(id: Int!): Organization @skipAuth
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
    createOrganization(input: CreateOrganizationInput!): Organization! @skipAuth
    updateOrganization(
      id: Int!
      input: UpdateOrganizationInput!
    ): Organization! @skipAuth
    deleteOrganization(id: Int!): Organization! @skipAuth
  }
`
