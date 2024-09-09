import type { Prisma, Muted } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MutedCreateArgs>({
  muted: {
    one: {
      data: {
        updatedAt: '2024-09-09T07:01:09.873Z',
        mutedBy: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String5398838',
            username: 'String8078258',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:01:09.873Z',
          },
        },
        mutedUser: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String294308',
            username: 'String8415449',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:01:09.873Z',
          },
        },
        mutedEvent: {
          create: {
            name: 'String',
            startDate: '2024-09-09T07:01:09.873Z',
            updatedAt: '2024-09-09T07:01:09.873Z',
            organization: {
              create: { name: 'String', updatedAt: '2024-09-09T07:01:09.873Z' },
            },
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2024-09-09T07:01:09.873Z',
        mutedBy: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String5186013',
            username: 'String8007927',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:01:09.873Z',
          },
        },
        mutedUser: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String1865946',
            username: 'String8265634',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:01:09.873Z',
          },
        },
        mutedEvent: {
          create: {
            name: 'String',
            startDate: '2024-09-09T07:01:09.873Z',
            updatedAt: '2024-09-09T07:01:09.873Z',
            organization: {
              create: { name: 'String', updatedAt: '2024-09-09T07:01:09.873Z' },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Muted, 'muted'>
