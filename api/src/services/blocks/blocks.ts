import type {
  QueryResolvers,
  MutationResolvers,
  BlockRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const blocks: QueryResolvers['blocks'] = () => {
  return db.block.findMany()
}

export const block: QueryResolvers['block'] = ({ id }) => {
  return db.block.findUnique({
    where: { id },
  })
}

export const createBlock: MutationResolvers['createBlock'] = ({ input }) => {
  return db.block.create({
    data: input,
  })
}

export const updateBlock: MutationResolvers['updateBlock'] = ({
  id,
  input,
}) => {
  return db.block.update({
    data: input,
    where: { id },
  })
}

export const deleteBlock: MutationResolvers['deleteBlock'] = ({ id }) => {
  return db.block.delete({
    where: { id },
  })
}

export const Block: BlockRelationResolvers = {
  blockedByUser: (_obj, { root }) => {
    return db.block.findUnique({ where: { id: root?.id } }).blockedByUser()
  },
  blockedUser: (_obj, { root }) => {
    return db.block.findUnique({ where: { id: root?.id } }).blockedUser()
  },
  blockedEvent: (_obj, { root }) => {
    return db.block.findUnique({ where: { id: root?.id } }).blockedEvent()
  },
}
