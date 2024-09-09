import type { Muted } from '@prisma/client'

import { muteds, muted, createMuted, updateMuted, deleteMuted } from './muteds'
import type { StandardScenario } from './muteds.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('muteds', () => {
  scenario('returns all muteds', async (scenario: StandardScenario) => {
    const result = await muteds()

    expect(result.length).toEqual(Object.keys(scenario.muted).length)
  })

  scenario('returns a single muted', async (scenario: StandardScenario) => {
    const result = await muted({ id: scenario.muted.one.id })

    expect(result).toEqual(scenario.muted.one)
  })

  scenario('creates a muted', async (scenario: StandardScenario) => {
    const result = await createMuted({
      input: {
        mutedById: scenario.muted.two.mutedById,
        mutedUserId: scenario.muted.two.mutedUserId,
        eventId: scenario.muted.two.eventId,
        updatedAt: '2024-09-09T07:01:09.825Z',
      },
    })

    expect(result.mutedById).toEqual(scenario.muted.two.mutedById)
    expect(result.mutedUserId).toEqual(scenario.muted.two.mutedUserId)
    expect(result.eventId).toEqual(scenario.muted.two.eventId)
    expect(result.updatedAt).toEqual(new Date('2024-09-09T07:01:09.825Z'))
  })

  scenario('updates a muted', async (scenario: StandardScenario) => {
    const original = (await muted({ id: scenario.muted.one.id })) as Muted
    const result = await updateMuted({
      id: original.id,
      input: { updatedAt: '2024-09-10T07:01:09.825Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2024-09-10T07:01:09.825Z'))
  })

  scenario('deletes a muted', async (scenario: StandardScenario) => {
    const original = (await deleteMuted({ id: scenario.muted.one.id })) as Muted
    const result = await muted({ id: original.id })

    expect(result).toEqual(null)
  })
})
