import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'
import { uploadToS3 } from 'src/lib/s3'

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const userByUsername: QueryResolvers['userByUsername'] = ({
  username,
}) => {
  return db.user.findUnique({
    where: { username },
  })
}

export const updateUser: MutationResolvers['updateUser'] = async ({
  id,
  input,
}) => {
  // TODO: validate that the user is real
  // if there's an avatar, upload it to S3 and get the URL
  const avatarUrl = input.avatar
    ? await uploadToS3(input.avatar, `avatar-${id}`)
    : undefined

  // if there's a cover, upload it to S3 and get the URL
  const coverUrl = input.cover
    ? await uploadToS3(input.cover, `cover-${id}`)
    : undefined

  return db.user.update({
    data: {
      ...input,
      avatar: avatarUrl,
      cover: coverUrl,
    },
    where: { id },
  })
}

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User: UserRelationResolvers = {
  likes: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).likes()
  },
  comments: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).comments()
  },
  bookmarks: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).bookmarks()
  },
  posts: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).posts()
  },
  plans: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).plans()
  },
  messagesTo: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).messagesTo()
  },
  messagesFrom: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).messagesFrom()
  },
  attendingPlans: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).attendingPlans()
  },
  mutedBy: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).mutedBy()
  },
  mutedUser: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).mutedUser()
  },
  attachments: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).attachments()
  },
  attending: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).attending()
  },
  organization: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).organization()
  },
  blockedByUser: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).blockedByUser()
  },
  blockedUser: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).blockedUser()
  },
}
