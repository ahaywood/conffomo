export const schema = gql`
  type AttendingPlan {
    id: Int!
    user: User!
    userId: Int!
    plan: Plan!
    planId: Int!
    status: AttendingStatus
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum AttendingStatus {
    INTERESTED
    GOING
  }

  type Query {
    attendingPlans: [AttendingPlan!]! @requireAuth
    attendingPlan(id: Int!): AttendingPlan @requireAuth
  }

  input CreateAttendingPlanInput {
    userId: Int!
    planId: Int!
    status: AttendingStatus
  }

  input UpdateAttendingPlanInput {
    userId: Int
    planId: Int
    status: AttendingStatus
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
