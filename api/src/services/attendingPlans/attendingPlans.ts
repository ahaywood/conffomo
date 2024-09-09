import type {
  QueryResolvers,
  MutationResolvers,
  AttendingPlanRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const attendingPlans: QueryResolvers['attendingPlans'] = () => {
  return db.attendingPlan.findMany()
}

export const attendingPlan: QueryResolvers['attendingPlan'] = ({ id }) => {
  return db.attendingPlan.findUnique({
    where: { id },
  })
}

export const createAttendingPlan: MutationResolvers['createAttendingPlan'] = ({
  input,
}) => {
  return db.attendingPlan.create({
    data: input,
  })
}

export const updateAttendingPlan: MutationResolvers['updateAttendingPlan'] = ({
  id,
  input,
}) => {
  return db.attendingPlan.update({
    data: input,
    where: { id },
  })
}

export const deleteAttendingPlan: MutationResolvers['deleteAttendingPlan'] = ({
  id,
}) => {
  return db.attendingPlan.delete({
    where: { id },
  })
}

export const AttendingPlan: AttendingPlanRelationResolvers = {
  user: (_obj, { root }) => {
    return db.attendingPlan.findUnique({ where: { id: root?.id } }).user()
  },
  plan: (_obj, { root }) => {
    return db.attendingPlan.findUnique({ where: { id: root?.id } }).plan()
  },
}
