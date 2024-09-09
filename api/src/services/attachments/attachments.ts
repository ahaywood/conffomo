import type {
  QueryResolvers,
  MutationResolvers,
  AttachmentRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const attachments: QueryResolvers['attachments'] = () => {
  return db.attachment.findMany()
}

export const attachment: QueryResolvers['attachment'] = ({ id }) => {
  return db.attachment.findUnique({
    where: { id },
  })
}

export const createAttachment: MutationResolvers['createAttachment'] = ({
  input,
}) => {
  return db.attachment.create({
    data: input,
  })
}

export const updateAttachment: MutationResolvers['updateAttachment'] = ({
  id,
  input,
}) => {
  return db.attachment.update({
    data: input,
    where: { id },
  })
}

export const deleteAttachment: MutationResolvers['deleteAttachment'] = ({
  id,
}) => {
  return db.attachment.delete({
    where: { id },
  })
}

export const Attachment: AttachmentRelationResolvers = {
  user: (_obj, { root }) => {
    return db.attachment.findUnique({ where: { id: root?.id } }).user()
  },
  post: (_obj, { root }) => {
    return db.attachment.findUnique({ where: { id: root?.id } }).post()
  },
  threads: (_obj, { root }) => {
    return db.attachment.findUnique({ where: { id: root?.id } }).threads()
  },
  message: (_obj, { root }) => {
    return db.attachment.findUnique({ where: { id: root?.id } }).message()
  },
}
