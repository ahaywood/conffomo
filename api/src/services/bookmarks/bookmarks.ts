import type {
  QueryResolvers,
  MutationResolvers,
  BookmarkRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const bookmarks: QueryResolvers['bookmarks'] = () => {
  return db.bookmark.findMany()
}

export const bookmark: QueryResolvers['bookmark'] = ({ id }) => {
  return db.bookmark.findUnique({
    where: { id },
  })
}

export const createBookmark: MutationResolvers['createBookmark'] = ({
  input,
}) => {
  return db.bookmark.create({
    data: input,
  })
}

export const updateBookmark: MutationResolvers['updateBookmark'] = ({
  id,
  input,
}) => {
  return db.bookmark.update({
    data: input,
    where: { id },
  })
}

export const deleteBookmark: MutationResolvers['deleteBookmark'] = ({ id }) => {
  return db.bookmark.delete({
    where: { id },
  })
}

export const Bookmark: BookmarkRelationResolvers = {
  post: (_obj, { root }) => {
    return db.bookmark.findUnique({ where: { id: root?.id } }).post()
  },
  user: (_obj, { root }) => {
    return db.bookmark.findUnique({ where: { id: root?.id } }).user()
  },
}
