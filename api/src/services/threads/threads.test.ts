import type { Thread } from '@prisma/client'

import {
  threads,
  thread,
  createThread,
  updateThread,
  deleteThread,
} from './threads'
import type { StandardScenario } from './threads.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('threads', () => {
  scenario('returns all threads', async (scenario: StandardScenario) => {
    const result = await threads()

    expect(result.length).toEqual(Object.keys(scenario.thread).length)
  })

  scenario('returns a single thread', async (scenario: StandardScenario) => {
    const result = await thread({ id: scenario.thread.one.id })

    expect(result).toEqual(scenario.thread.one)
  })

  scenario('creates a thread', async (scenario: StandardScenario) => {
    const result = await createThread({
      input: {
        attachmentId: scenario.thread.two.attachmentId,
        updatedAt: '2024-09-09T07:26:41.399Z',
      },
    })

    expect(result.attachmentId).toEqual(scenario.thread.two.attachmentId)
    expect(result.updatedAt).toEqual(new Date('2024-09-09T07:26:41.399Z'))
  })

  scenario('updates a thread', async (scenario: StandardScenario) => {
    const original = (await thread({ id: scenario.thread.one.id })) as Thread
    const result = await updateThread({
      id: original.id,
      input: { updatedAt: '2024-09-10T07:26:41.399Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2024-09-10T07:26:41.399Z'))
  })

  scenario('deletes a thread', async (scenario: StandardScenario) => {
    const original = (await deleteThread({
      id: scenario.thread.one.id,
    })) as Thread
    const result = await thread({ id: original.id })

    expect(result).toEqual(null)
  })
})
