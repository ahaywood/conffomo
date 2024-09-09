import type { Prisma, Attending } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AttendingCreateArgs>({
  attending: {
    one: {
      data: {
        updatedAt: '2024-09-09T07:15:58.782Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String1669980',
            username: 'String799694',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:15:58.782Z',
          },
        },
        event: {
          create: {
            name: 'String',
            startDate: '2024-09-09T07:15:58.782Z',
            updatedAt: '2024-09-09T07:15:58.782Z',
            organization: {
              create: { name: 'String', updatedAt: '2024-09-09T07:15:58.782Z' },
            },
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2024-09-09T07:15:58.782Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String7729783',
            username: 'String2903541',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:15:58.782Z',
          },
        },
        event: {
          create: {
            name: 'String',
            startDate: '2024-09-09T07:15:58.782Z',
            updatedAt: '2024-09-09T07:15:58.782Z',
            organization: {
              create: { name: 'String', updatedAt: '2024-09-09T07:15:58.782Z' },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Attending, 'attending'>
