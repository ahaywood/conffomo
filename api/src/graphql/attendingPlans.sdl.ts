export const schema = gql`
  type AttendingPlan {
    id: Int!
    user: User!
    userId: Int!
    plan: Plan!
    planId: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    attendingPlans: [AttendingPlan!]! @requireAuth
    attendingPlan(id: Int!): AttendingPlan @requireAuth
  }

  input CreateAttendingPlanInput {
    userId: Int!
    planId: Int!
  }

  input UpdateAttendingPlanInput {
    userId: Int
    planId: Int
  }

  type Mutation {
    createAttendingPlan(input: CreateAttendingPlanInput!): AttendingPlan!
      @requireAuth
    updateAttendingPlan(
      id: Int!
      input: UpdateAttendingPlanInput!
    ): AttendingPlan! @requireAuth
    deleteAttendingPlan(id: Int!): AttendingPlan! @requireAuth
  }
`
