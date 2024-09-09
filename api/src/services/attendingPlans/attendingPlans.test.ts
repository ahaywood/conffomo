import type { AttendingPlan } from '@prisma/client'

import {
  attendingPlans,
  attendingPlan,
  createAttendingPlan,
  updateAttendingPlan,
  deleteAttendingPlan,
} from './attendingPlans'
import type { StandardScenario } from './attendingPlans.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('attendingPlans', () => {
  scenario('returns all attendingPlans', async (scenario: StandardScenario) => {
    const result = await attendingPlans()

    expect(result.length).toEqual(Object.keys(scenario.attendingPlan).length)
  })

  scenario(
    'returns a single attendingPlan',
    async (scenario: StandardScenario) => {
      const result = await attendingPlan({ id: scenario.attendingPlan.one.id })

      expect(result).toEqual(scenario.attendingPlan.one)
    }
  )

  scenario('creates a attendingPlan', async (scenario: StandardScenario) => {
    const result = await createAttendingPlan({
      input: {
        userId: scenario.attendingPlan.two.userId,
        planId: scenario.attendingPlan.two.planId,
        updatedAt: '2024-09-09T06:56:11.588Z',
      },
    })

    expect(result.userId).toEqual(scenario.attendingPlan.two.userId)
    expect(result.planId).toEqual(scenario.attendingPlan.two.planId)
    expect(result.updatedAt).toEqual(new Date('2024-09-09T06:56:11.588Z'))
  })

  scenario('updates a attendingPlan', async (scenario: StandardScenario) => {
    const original = (await attendingPlan({
      id: scenario.attendingPlan.one.id,
    })) as AttendingPlan
    const result = await updateAttendingPlan({
      id: original.id,
      input: { updatedAt: '2024-09-10T06:56:11.588Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2024-09-10T06:56:11.588Z'))
  })

  scenario('deletes a attendingPlan', async (scenario: StandardScenario) => {
    const original = (await deleteAttendingPlan({
      id: scenario.attendingPlan.one.id,
    })) as AttendingPlan
    const result = await attendingPlan({ id: original.id })

    expect(result).toEqual(null)
  })
})
