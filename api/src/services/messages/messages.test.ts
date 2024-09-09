import type { Message } from '@prisma/client'

import {
  messages,
  message,
  createMessage,
  updateMessage,
  deleteMessage,
} from './messages'
import type { StandardScenario } from './messages.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('messages', () => {
  scenario('returns all messages', async (scenario: StandardScenario) => {
    const result = await messages()

    expect(result.length).toEqual(Object.keys(scenario.message).length)
  })

  scenario('returns a single message', async (scenario: StandardScenario) => {
    const result = await message({ id: scenario.message.one.id })

    expect(result).toEqual(scenario.message.one)
  })

  scenario('creates a message', async (scenario: StandardScenario) => {
    const result = await createMessage({
      input: {
        toUserId: scenario.message.two.toUserId,
        fromUserId: scenario.message.two.fromUserId,
        message: 'String',
        updatedAt: '2024-09-09T07:10:49.516Z',
      },
    })

    expect(result.toUserId).toEqual(scenario.message.two.toUserId)
    expect(result.fromUserId).toEqual(scenario.message.two.fromUserId)
    expect(result.message).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2024-09-09T07:10:49.516Z'))
  })

  scenario('updates a message', async (scenario: StandardScenario) => {
    const original = (await message({ id: scenario.message.one.id })) as Message
    const result = await updateMessage({
      id: original.id,
      input: { message: 'String2' },
    })

    expect(result.message).toEqual('String2')
  })

  scenario('deletes a message', async (scenario: StandardScenario) => {
    const original = (await deleteMessage({
      id: scenario.message.one.id,
    })) as Message
    const result = await message({ id: original.id })

    expect(result).toEqual(null)
  })
})
