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

export const updateUser: MutationResolvers['updateUser'] = async ({
  id,
  input,
}) => {
  // TODO: validate that the user is real
  // if there's an avatar, upload it to S3 and get the URL
  const avatarUrl = input.avatar
    ? await uploadToS3(input.avatar, `avatar-${id}`)
    : null

  return db.user.update({
    data: {
      ...input,
      avatar: avatarUrl,
    },
    where: { id },
  })
}

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}
