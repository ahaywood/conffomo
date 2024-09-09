import type { Prisma, AttendingPlan } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AttendingPlanCreateArgs>({
  attendingPlan: {
    one: {
      data: {
        updatedAt: '2024-09-09T06:56:11.663Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String9201106',
            username: 'String9138578',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T06:56:11.663Z',
          },
        },
        plan: {
          create: {
            title: 'String',
            updatedAt: '2024-09-09T06:56:11.663Z',
            event: {
              create: {
                name: 'String',
                startDate: '2024-09-09T06:56:11.663Z',
                updatedAt: '2024-09-09T06:56:11.663Z',
                organization: {
                  create: {
                    name: 'String',
                    updatedAt: '2024-09-09T06:56:11.663Z',
                  },
                },
              },
            },
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String8246951',
                username: 'String8697787',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T06:56:11.663Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2024-09-09T06:56:11.663Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String6207846',
            username: 'String3650438',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T06:56:11.663Z',
          },
        },
        plan: {
          create: {
            title: 'String',
            updatedAt: '2024-09-09T06:56:11.663Z',
            event: {
              create: {
                name: 'String',
                startDate: '2024-09-09T06:56:11.663Z',
                updatedAt: '2024-09-09T06:56:11.663Z',
                organization: {
                  create: {
                    name: 'String',
                    updatedAt: '2024-09-09T06:56:11.663Z',
                  },
                },
              },
            },
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String5724190',
                username: 'String3706181',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T06:56:11.663Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<AttendingPlan, 'attendingPlan'>
