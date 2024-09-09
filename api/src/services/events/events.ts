import type {
  QueryResolvers,
  MutationResolvers,
  EventRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const events: QueryResolvers['events'] = () => {
  return db.event.findMany()
}

export const event: QueryResolvers['event'] = ({ id }) => {
  return db.event.findUnique({
    where: { id },
  })
}

export const eventBySlug: QueryResolvers['eventBySlug'] = ({ slug }) => {
  return db.event.findUnique({
    where: { slug },
  })
}

export const createEvent: MutationResolvers['createEvent'] = ({ input }) => {
  return db.event.create({
    data: input,
  })
}

export const updateEvent: MutationResolvers['updateEvent'] = ({
  id,
  input,
}) => {
  return db.event.update({
    data: input,
    where: { id },
  })
}

export const deleteEvent: MutationResolvers['deleteEvent'] = ({ id }) => {
  return db.event.delete({
    where: { id },
  })
}

export const Event: EventRelationResolvers = {
  organization: (_obj, { root }) => {
    return db.event.findUnique({ where: { id: root?.id } }).organization()
  },
  recommendations: (_obj, { root }) => {
    return db.event.findUnique({ where: { id: root?.id } }).recommendations()
  },
  posts: (_obj, { root }) => {
    return db.event.findUnique({ where: { id: root?.id } }).posts()
  },
  plans: (_obj, { root }) => {
    return db.event.findUnique({ where: { id: root?.id } }).plans()
  },
  muted: (_obj, { root }) => {
    return db.event.findUnique({ where: { id: root?.id } }).muted()
  },
  attending: (_obj, { root }) => {
    return db.event.findUnique({ where: { id: root?.id } }).attending()
  },
  blocks: (_obj, { root }) => {
    return db.event.findUnique({ where: { id: root?.id } }).blocks()
  },
}
