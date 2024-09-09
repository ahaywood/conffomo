import type {
  QueryResolvers,
  MutationResolvers,
  MutedRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const muteds: QueryResolvers['muteds'] = () => {
  return db.muted.findMany()
}

export const muted: QueryResolvers['muted'] = ({ id }) => {
  return db.muted.findUnique({
    where: { id },
  })
}

export const createMuted: MutationResolvers['createMuted'] = ({ input }) => {
  return db.muted.create({
    data: input,
  })
}

export const updateMuted: MutationResolvers['updateMuted'] = ({
  id,
  input,
}) => {
  return db.muted.update({
    data: input,
    where: { id },
  })
}

export const deleteMuted: MutationResolvers['deleteMuted'] = ({ id }) => {
  return db.muted.delete({
    where: { id },
  })
}

export const Muted: MutedRelationResolvers = {
  mutedBy: (_obj, { root }) => {
    return db.muted.findUnique({ where: { id: root?.id } }).mutedBy()
  },
  mutedUser: (_obj, { root }) => {
    return db.muted.findUnique({ where: { id: root?.id } }).mutedUser()
  },
  mutedEvent: (_obj, { root }) => {
    return db.muted.findUnique({ where: { id: root?.id } }).mutedEvent()
  },
}
