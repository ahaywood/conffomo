import type {
  QueryResolvers,
  MutationResolvers,
  ThreadRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const threads: QueryResolvers['threads'] = () => {
  return db.thread.findMany()
}

export const thread: QueryResolvers['thread'] = ({ id }) => {
  return db.thread.findUnique({
    where: { id },
  })
}

export const createThread: MutationResolvers['createThread'] = ({ input }) => {
  return db.thread.create({
    data: input,
  })
}

export const updateThread: MutationResolvers['updateThread'] = ({
  id,
  input,
}) => {
  return db.thread.update({
    data: input,
    where: { id },
  })
}

export const deleteThread: MutationResolvers['deleteThread'] = ({ id }) => {
  return db.thread.delete({
    where: { id },
  })
}

export const Thread: ThreadRelationResolvers = {
  comments: (_obj, { root }) => {
    return db.thread.findUnique({ where: { id: root?.id } }).comments()
  },
  attachments: (_obj, { root }) => {
    return db.thread.findUnique({ where: { id: root?.id } }).attachments()
  },
}
