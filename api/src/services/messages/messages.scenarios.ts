import type { Prisma, Message } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MessageCreateArgs>({
  message: {
    one: {
      data: {
        message: 'String',
        updatedAt: '2024-09-09T07:10:49.527Z',
        toUser: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String756033',
            username: 'String4011886',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:10:49.527Z',
          },
        },
        fromUser: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String6673733',
            username: 'String3702159',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:10:49.527Z',
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        updatedAt: '2024-09-09T07:10:49.527Z',
        toUser: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String9490047',
            username: 'String3751117',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:10:49.527Z',
          },
        },
        fromUser: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String1404885',
            username: 'String1917185',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:10:49.527Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Message, 'message'>
