import type {
  QueryResolvers,
  MutationResolvers,
  PlanRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const plans: QueryResolvers['plans'] = () => {
  return db.plan.findMany()
}

export const plan: QueryResolvers['plan'] = ({ id }) => {
  return db.plan.findUnique({
    where: { id },
  })
}

export const createPlan: MutationResolvers['createPlan'] = ({ input }) => {
  return db.plan.create({
    data: input,
  })
}

export const updatePlan: MutationResolvers['updatePlan'] = ({ id, input }) => {
  return db.plan.update({
    data: input,
    where: { id },
  })
}

export const deletePlan: MutationResolvers['deletePlan'] = ({ id }) => {
  return db.plan.delete({
    where: { id },
  })
}

export const Plan: PlanRelationResolvers = {
  event: (_obj, { root }) => {
    return db.plan.findUnique({ where: { id: root?.id } }).event()
  },
  user: (_obj, { root }) => {
    return db.plan.findUnique({ where: { id: root?.id } }).user()
  },
  attendingPlans: (_obj, { root }) => {
    return db.plan.findUnique({ where: { id: root?.id } }).attendingPlans()
  },
  posts: (_obj, { root }) => {
    return db.plan.findUnique({ where: { id: root?.id } }).posts()
  },
}
