import type { Plan } from '@prisma/client'

import { plans, plan, createPlan, updatePlan, deletePlan } from './plans'
import type { StandardScenario } from './plans.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('plans', () => {
  scenario('returns all plans', async (scenario: StandardScenario) => {
    const result = await plans()

    expect(result.length).toEqual(Object.keys(scenario.plan).length)
  })

  scenario('returns a single plan', async (scenario: StandardScenario) => {
    const result = await plan({ id: scenario.plan.one.id })

    expect(result).toEqual(scenario.plan.one)
  })

  scenario('creates a plan', async (scenario: StandardScenario) => {
    const result = await createPlan({
      input: {
        title: 'String',
        eventId: scenario.plan.two.eventId,
        userId: scenario.plan.two.userId,
        updatedAt: '2024-09-09T07:14:06.107Z',
      },
    })

    expect(result.title).toEqual('String')
    expect(result.eventId).toEqual(scenario.plan.two.eventId)
    expect(result.userId).toEqual(scenario.plan.two.userId)
    expect(result.updatedAt).toEqual(new Date('2024-09-09T07:14:06.107Z'))
  })

  scenario('updates a plan', async (scenario: StandardScenario) => {
    const original = (await plan({ id: scenario.plan.one.id })) as Plan
    const result = await updatePlan({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a plan', async (scenario: StandardScenario) => {
    const original = (await deletePlan({ id: scenario.plan.one.id })) as Plan
    const result = await plan({ id: original.id })

    expect(result).toEqual(null)
  })
})
