import type { Block } from '@prisma/client'

import { blocks, block, createBlock, updateBlock, deleteBlock } from './blocks'
import type { StandardScenario } from './blocks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('blocks', () => {
  scenario('returns all blocks', async (scenario: StandardScenario) => {
    const result = await blocks()

    expect(result.length).toEqual(Object.keys(scenario.block).length)
  })

  scenario('returns a single block', async (scenario: StandardScenario) => {
    const result = await block({ id: scenario.block.one.id })

    expect(result).toEqual(scenario.block.one)
  })

  scenario('creates a block', async (scenario: StandardScenario) => {
    const result = await createBlock({
      input: {
        blockedByUserId: scenario.block.two.blockedByUserId,
        blockedUserId: scenario.block.two.blockedUserId,
        eventId: scenario.block.two.eventId,
        updatedAt: '2024-09-09T07:22:26.827Z',
      },
    })

    expect(result.blockedByUserId).toEqual(scenario.block.two.blockedByUserId)
    expect(result.blockedUserId).toEqual(scenario.block.two.blockedUserId)
    expect(result.eventId).toEqual(scenario.block.two.eventId)
    expect(result.updatedAt).toEqual(new Date('2024-09-09T07:22:26.827Z'))
  })

  scenario('updates a block', async (scenario: StandardScenario) => {
    const original = (await block({ id: scenario.block.one.id })) as Block
    const result = await updateBlock({
      id: original.id,
      input: { updatedAt: '2024-09-10T07:22:26.828Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2024-09-10T07:22:26.828Z'))
  })

  scenario('deletes a block', async (scenario: StandardScenario) => {
    const original = (await deleteBlock({ id: scenario.block.one.id })) as Block
    const result = await block({ id: original.id })

    expect(result).toEqual(null)
  })
})
