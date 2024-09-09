import type { Post } from '@prisma/client'

import { posts, post, createPost, updatePost, deletePost } from './posts'
import type { StandardScenario } from './posts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('posts', () => {
  scenario('returns all posts', async (scenario: StandardScenario) => {
    const result = await posts()

    expect(result.length).toEqual(Object.keys(scenario.post).length)
  })

  scenario('returns a single post', async (scenario: StandardScenario) => {
    const result = await post({ id: scenario.post.one.id })

    expect(result).toEqual(scenario.post.one)
  })

  scenario('creates a post', async (scenario: StandardScenario) => {
    const result = await createPost({
      input: {
        userId: scenario.post.two.userId,
        eventId: scenario.post.two.eventId,
        content: 'String',
        PlanId: scenario.post.two.PlanId,
        updatedAt: '2024-09-09T07:18:10.551Z',
      },
    })

    expect(result.userId).toEqual(scenario.post.two.userId)
    expect(result.eventId).toEqual(scenario.post.two.eventId)
    expect(result.content).toEqual('String')
    expect(result.PlanId).toEqual(scenario.post.two.PlanId)
    expect(result.updatedAt).toEqual(new Date('2024-09-09T07:18:10.551Z'))
  })

  scenario('updates a post', async (scenario: StandardScenario) => {
    const original = (await post({ id: scenario.post.one.id })) as Post
    const result = await updatePost({
      id: original.id,
      input: { content: 'String2' },
    })

    expect(result.content).toEqual('String2')
  })

  scenario('deletes a post', async (scenario: StandardScenario) => {
    const original = (await deletePost({ id: scenario.post.one.id })) as Post
    const result = await post({ id: original.id })

    expect(result).toEqual(null)
  })
})
