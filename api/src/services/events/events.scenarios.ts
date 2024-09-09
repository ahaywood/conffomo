import type { Prisma, Event } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: {
    one: {
      data: {
        name: 'String',
        startDate: '2024-09-09T07:22:43.389Z',
        updatedAt: '2024-09-09T07:22:43.389Z',
        organization: {
          create: {
            name: 'String',
            updatedAt: '2024-09-09T07:22:43.389Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String4949866',
                username: 'String3048473',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:22:43.389Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        startDate: '2024-09-09T07:22:43.389Z',
        updatedAt: '2024-09-09T07:22:43.389Z',
        organization: {
          create: {
            name: 'String',
            updatedAt: '2024-09-09T07:22:43.389Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String9241138',
                username: 'String2944212',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:22:43.389Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Event, 'event'>
