import type { Prisma, Comment } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    one: {
      data: {
        comment: 'String',
        updatedAt: '2024-09-09T07:07:20.144Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String6812033',
            username: 'String4164879',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:07:20.144Z',
          },
        },
        post: {
          create: {
            content: 'String',
            updatedAt: '2024-09-09T07:07:20.144Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String4370496',
                username: 'String893879',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:07:20.144Z',
              },
            },
            event: {
              create: {
                name: 'String',
                startDate: '2024-09-09T07:07:20.144Z',
                updatedAt: '2024-09-09T07:07:20.144Z',
                organization: {
                  create: {
                    name: 'String',
                    updatedAt: '2024-09-09T07:07:20.144Z',
                  },
                },
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        comment: 'String',
        updatedAt: '2024-09-09T07:07:20.144Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String6790034',
            username: 'String2984526',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:07:20.144Z',
          },
        },
        post: {
          create: {
            content: 'String',
            updatedAt: '2024-09-09T07:07:20.144Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String119641',
                username: 'String2939390',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:07:20.144Z',
              },
            },
            event: {
              create: {
                name: 'String',
                startDate: '2024-09-09T07:07:20.144Z',
                updatedAt: '2024-09-09T07:07:20.144Z',
                organization: {
                  create: {
                    name: 'String',
                    updatedAt: '2024-09-09T07:07:20.144Z',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Comment, 'comment'>
