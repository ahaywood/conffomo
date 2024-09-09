import type { Attending } from '@prisma/client'

import {
  attendings,
  attending,
  createAttending,
  updateAttending,
  deleteAttending,
} from './attendings'
import type { StandardScenario } from './attendings.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('attendings', () => {
  scenario('returns all attendings', async (scenario: StandardScenario) => {
    const result = await attendings()

    expect(result.length).toEqual(Object.keys(scenario.attending).length)
  })

  scenario('returns a single attending', async (scenario: StandardScenario) => {
    const result = await attending({ id: scenario.attending.one.id })

    expect(result).toEqual(scenario.attending.one)
  })

  scenario('creates a attending', async (scenario: StandardScenario) => {
    const result = await createAttending({
      input: {
        userId: scenario.attending.two.userId,
        eventId: scenario.attending.two.eventId,
        updatedAt: '2024-09-09T07:15:58.725Z',
      },
    })

    expect(result.userId).toEqual(scenario.attending.two.userId)
    expect(result.eventId).toEqual(scenario.attending.two.eventId)
    expect(result.updatedAt).toEqual(new Date('2024-09-09T07:15:58.725Z'))
  })

  scenario('updates a attending', async (scenario: StandardScenario) => {
    const original = (await attending({
      id: scenario.attending.one.id,
    })) as Attending
    const result = await updateAttending({
      id: original.id,
      input: { updatedAt: '2024-09-10T07:15:58.725Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2024-09-10T07:15:58.725Z'))
  })

  scenario('deletes a attending', async (scenario: StandardScenario) => {
    const original = (await deleteAttending({
      id: scenario.attending.one.id,
    })) as Attending
    const result = await attending({ id: original.id })

    expect(result).toEqual(null)
  })
})
