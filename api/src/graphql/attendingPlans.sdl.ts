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
    attendingPlans: [AttendingPlan!]! @skipAuth
    attendingPlan(id: Int!): AttendingPlan @skipAuth
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
      @skipAuth
    updateAttendingPlan(
      id: Int!
      input: UpdateAttendingPlanInput!
    ): AttendingPlan! @skipAuth
    deleteAttendingPlan(id: Int!): AttendingPlan! @skipAuth
  }
`
