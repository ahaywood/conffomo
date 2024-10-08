import type {
  QueryResolvers,
  MutationResolvers,
  MessageRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const messages: QueryResolvers['messages'] = () => {
  return db.message.findMany()
}

export const message: QueryResolvers['message'] = ({ id }) => {
  return db.message.findUnique({
    where: { id },
  })
}

export const createMessage: MutationResolvers['createMessage'] = ({
  input,
}) => {
  return db.message.create({
    data: input,
  })
}

export const updateMessage: MutationResolvers['updateMessage'] = ({
  id,
  input,
}) => {
  return db.message.update({
    data: input,
    where: { id },
  })
}

export const deleteMessage: MutationResolvers['deleteMessage'] = ({ id }) => {
  return db.message.delete({
    where: { id },
  })
}

export const Message: MessageRelationResolvers = {
  toUser: (_obj, { root }) => {
    return db.message.findUnique({ where: { id: root?.id } }).toUser()
  },
  fromUser: (_obj, { root }) => {
    return db.message.findUnique({ where: { id: root?.id } }).fromUser()
  },
  attachments: (_obj, { root }) => {
    return db.message.findUnique({ where: { id: root?.id } }).attachments()
  },
}
