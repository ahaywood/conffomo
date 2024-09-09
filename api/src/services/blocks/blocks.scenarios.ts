import type { Prisma, Block } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BlockCreateArgs>({
  block: {
    one: {
      data: {
        updatedAt: '2024-09-09T07:22:26.894Z',
        blockedByUser: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String18945',
            username: 'String3365726',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:22:26.894Z',
          },
        },
        blockedUser: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String4373305',
            username: 'String8806156',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:22:26.894Z',
          },
        },
        blockedEvent: {
          create: {
            name: 'String',
            startDate: '2024-09-09T07:22:26.894Z',
            updatedAt: '2024-09-09T07:22:26.894Z',
            organization: {
              create: {
                name: 'String',
                updatedAt: '2024-09-09T07:22:26.894Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String4837143',
                    username: 'String5394031',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2024-09-09T07:22:26.894Z',
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
        updatedAt: '2024-09-09T07:22:26.894Z',
        blockedByUser: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String4653900',
            username: 'String2709289',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:22:26.894Z',
          },
        },
        blockedUser: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String4891564',
            username: 'String488335',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:22:26.894Z',
          },
        },
        blockedEvent: {
          create: {
            name: 'String',
            startDate: '2024-09-09T07:22:26.894Z',
            updatedAt: '2024-09-09T07:22:26.894Z',
            organization: {
              create: {
                name: 'String',
                updatedAt: '2024-09-09T07:22:26.894Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String3337248',
                    username: 'String4280501',
                    hashedPassword: 'String',
                    salt: 'String',
                    updatedAt: '2024-09-09T07:22:26.894Z',
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

export type StandardScenario = ScenarioData<Block, 'block'>
