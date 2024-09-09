import type { Attachment } from '@prisma/client'

import {
  attachments,
  attachment,
  createAttachment,
  updateAttachment,
  deleteAttachment,
} from './attachments'
import type { StandardScenario } from './attachments.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('attachments', () => {
  scenario('returns all attachments', async (scenario: StandardScenario) => {
    const result = await attachments()

    expect(result.length).toEqual(Object.keys(scenario.attachment).length)
  })

  scenario(
    'returns a single attachment',
    async (scenario: StandardScenario) => {
      const result = await attachment({ id: scenario.attachment.one.id })

      expect(result).toEqual(scenario.attachment.one)
    }
  )

  scenario('creates a attachment', async (scenario: StandardScenario) => {
    const result = await createAttachment({
      input: {
        userId: scenario.attachment.two.userId,
        postId: scenario.attachment.two.postId,
        messageId: scenario.attachment.two.messageId,
        updatedAt: '2024-09-09T07:31:22.485Z',
      },
    })

    expect(result.userId).toEqual(scenario.attachment.two.userId)
    expect(result.postId).toEqual(scenario.attachment.two.postId)
    expect(result.messageId).toEqual(scenario.attachment.two.messageId)
    expect(result.updatedAt).toEqual(new Date('2024-09-09T07:31:22.485Z'))
  })

  scenario('updates a attachment', async (scenario: StandardScenario) => {
    const original = (await attachment({
      id: scenario.attachment.one.id,
    })) as Attachment
    const result = await updateAttachment({
      id: original.id,
      input: { updatedAt: '2024-09-10T07:31:22.485Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2024-09-10T07:31:22.485Z'))
  })

  scenario('deletes a attachment', async (scenario: StandardScenario) => {
    const original = (await deleteAttachment({
      id: scenario.attachment.one.id,
    })) as Attachment
    const result = await attachment({ id: original.id })

    expect(result).toEqual(null)
  })
})
