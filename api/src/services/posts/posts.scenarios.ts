import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        content: 'String',
        updatedAt: '2024-09-09T07:18:10.609Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String1594125',
            username: 'String8471348',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:18:10.609Z',
          },
        },
        event: {
          create: {
            name: 'String',
            startDate: '2024-09-09T07:18:10.609Z',
            updatedAt: '2024-09-09T07:18:10.609Z',
            organization: {
              create: {
                name: 'String',
                updatedAt: '2024-09-09T07:18:10.609Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String4848315',
                    username: 'String4176736',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2024-09-09T07:18:10.609Z',
                  },
                },
              },
            },
          },
        },
        plan: {
          create: {
            title: 'String',
            updatedAt: '2024-09-09T07:18:10.609Z',
            event: {
              create: {
                name: 'String',
                startDate: '2024-09-09T07:18:10.609Z',
                updatedAt: '2024-09-09T07:18:10.609Z',
                organization: {
                  create: {
                    name: 'String',
                    updatedAt: '2024-09-09T07:18:10.609Z',
                    user: {
                      create: {
                        firstName: 'String',
                        lastName: 'String',
                        email: 'String1404474',
                        username: 'String6664389',
                        hashedPassword: 'String',
                        salt: 'String',
                        updatedAt: '2024-09-09T07:18:10.609Z',
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
                email: 'String2600717',
                username: 'String1852434',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:18:10.609Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        content: 'String',
        updatedAt: '2024-09-09T07:18:10.609Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String2046390',
            username: 'String2154647',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:18:10.609Z',
          },
        },
        event: {
          create: {
            name: 'String',
            startDate: '2024-09-09T07:18:10.609Z',
            updatedAt: '2024-09-09T07:18:10.609Z',
            organization: {
              create: {
                name: 'String',
                updatedAt: '2024-09-09T07:18:10.609Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String6946437',
                    username: 'String6592875',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2024-09-09T07:18:10.609Z',
                  },
                },
              },
            },
          },
        },
        plan: {
          create: {
            title: 'String',
            updatedAt: '2024-09-09T07:18:10.609Z',
            event: {
              create: {
                name: 'String',
                startDate: '2024-09-09T07:18:10.609Z',
                updatedAt: '2024-09-09T07:18:10.609Z',
                organization: {
                  create: {
                    name: 'String',
                    updatedAt: '2024-09-09T07:18:10.609Z',
                    user: {
                      create: {
                        firstName: 'String',
                        lastName: 'String',
                        email: 'String1223897',
                        username: 'String1834978',
                        hashedPassword: 'String',
                        salt: 'String',
                        updatedAt: '2024-09-09T07:18:10.609Z',
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
                email: 'String1421392',
                username: 'String5612080',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:18:10.609Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
