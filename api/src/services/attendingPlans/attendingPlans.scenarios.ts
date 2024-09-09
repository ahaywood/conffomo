import type { Prisma, AttendingPlan } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AttendingPlanCreateArgs>({
  attendingPlan: {
    one: {
      data: {
        updatedAt: '2024-09-09T07:30:57.089Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String5631098',
            username: 'String8906906',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:30:57.089Z',
          },
        },
        plan: {
          create: {
            title: 'String',
            updatedAt: '2024-09-09T07:30:57.089Z',
            event: {
              create: {
                name: 'String',
                startDate: '2024-09-09T07:30:57.089Z',
                updatedAt: '2024-09-09T07:30:57.089Z',
                organization: {
                  create: {
                    name: 'String',
                    updatedAt: '2024-09-09T07:30:57.089Z',
                    user: {
                      create: {
                        firstName: 'String',
                        lastName: 'String',
                        email: 'String6691702',
                        username: 'String3115974',
                        hashedPassword: 'String',
                        salt: 'String',
                        updatedAt: '2024-09-09T07:30:57.089Z',
                      },
                    },
                  },
                },
              },
            },
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String119169',
                username: 'String9245903',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:30:57.089Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2024-09-09T07:30:57.089Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String7992225',
            username: 'String6850216',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:30:57.089Z',
          },
        },
        plan: {
          create: {
            title: 'String',
            updatedAt: '2024-09-09T07:30:57.089Z',
            event: {
              create: {
                name: 'String',
                startDate: '2024-09-09T07:30:57.089Z',
                updatedAt: '2024-09-09T07:30:57.089Z',
                organization: {
                  create: {
                    name: 'String',
                    updatedAt: '2024-09-09T07:30:57.089Z',
                    user: {
                      create: {
                        firstName: 'String',
                        lastName: 'String',
                        email: 'String8560788',
                        username: 'String7981582',
                        hashedPassword: 'String',
                        salt: 'String',
                        updatedAt: '2024-09-09T07:30:57.089Z',
                      },
                    },
                  },
                },
              },
            },
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String4870887',
                username: 'String24799',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:30:57.089Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<AttendingPlan, 'attendingPlan'>
