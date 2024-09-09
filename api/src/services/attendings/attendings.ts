import type {
  QueryResolvers,
  MutationResolvers,
  AttendingRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const attendings: QueryResolvers['attendings'] = () => {
  return db.attending.findMany()
}

export const attending: QueryResolvers['attending'] = ({ id }) => {
  return db.attending.findUnique({
    where: { id },
  })
}

export const createAttending: MutationResolvers['createAttending'] = ({
  input,
}) => {
  return db.attending.create({
    data: input,
  })
}

export const updateAttending: MutationResolvers['updateAttending'] = ({
  id,
  input,
}) => {
  return db.attending.update({
    data: input,
    where: { id },
  })
}

export const deleteAttending: MutationResolvers['deleteAttending'] = ({
  id,
}) => {
  return db.attending.delete({
    where: { id },
  })
}

export const Attending: AttendingRelationResolvers = {
  user: (_obj, { root }) => {
    return db.attending.findUnique({ where: { id: root?.id } }).user()
  },
  event: (_obj, { root }) => {
    return db.attending.findUnique({ where: { id: root?.id } }).event()
  },
}
