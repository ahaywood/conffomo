import type { Bookmark } from '@prisma/client'

import {
  bookmarks,
  bookmark,
  createBookmark,
  updateBookmark,
  deleteBookmark,
} from './bookmarks'
import type { StandardScenario } from './bookmarks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('bookmarks', () => {
  scenario('returns all bookmarks', async (scenario: StandardScenario) => {
    const result = await bookmarks()

    expect(result.length).toEqual(Object.keys(scenario.bookmark).length)
  })

  scenario('returns a single bookmark', async (scenario: StandardScenario) => {
    const result = await bookmark({ id: scenario.bookmark.one.id })

    expect(result).toEqual(scenario.bookmark.one)
  })

  scenario('creates a bookmark', async (scenario: StandardScenario) => {
    const result = await createBookmark({
      input: {
        postId: scenario.bookmark.two.postId,
        userId: scenario.bookmark.two.userId,
        updatedAt: '2024-09-09T06:44:54.925Z',
      },
    })

    expect(result.postId).toEqual(scenario.bookmark.two.postId)
    expect(result.userId).toEqual(scenario.bookmark.two.userId)
    expect(result.updatedAt).toEqual(new Date('2024-09-09T06:44:54.925Z'))
  })

  scenario('updates a bookmark', async (scenario: StandardScenario) => {
    const original = (await bookmark({
      id: scenario.bookmark.one.id,
    })) as Bookmark
    const result = await updateBookmark({
      id: original.id,
      input: { updatedAt: '2024-09-10T06:44:54.925Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2024-09-10T06:44:54.925Z'))
  })

  scenario('deletes a bookmark', async (scenario: StandardScenario) => {
    const original = (await deleteBookmark({
      id: scenario.bookmark.one.id,
    })) as Bookmark
    const result = await bookmark({ id: original.id })

    expect(result).toEqual(null)
  })
})
