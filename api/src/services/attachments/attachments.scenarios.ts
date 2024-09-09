import type { Prisma, Attachment } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AttachmentCreateArgs>({
  attachment: {
    one: {
      data: {
        updatedAt: '2024-09-09T07:13:18.324Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String3033351',
            username: 'String7794152',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:13:18.324Z',
          },
        },
        post: {
          create: {
            content: 'String',
            updatedAt: '2024-09-09T07:13:18.324Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String3249243',
                username: 'String6833171',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:13:18.324Z',
              },
            },
            event: {
              create: {
                name: 'String',
                startDate: '2024-09-09T07:13:18.324Z',
                updatedAt: '2024-09-09T07:13:18.324Z',
                organization: {
                  create: {
                    name: 'String',
                    updatedAt: '2024-09-09T07:13:18.324Z',
                  },
                },
              },
            },
          },
        },
        message: {
          create: {
            message: 'String',
            updatedAt: '2024-09-09T07:13:18.324Z',
            toUser: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String2032403',
                username: 'String5494673',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:13:18.324Z',
              },
            },
            fromUser: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String2126400',
                username: 'String1175687',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:13:18.324Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2024-09-09T07:13:18.324Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String5677800',
            username: 'String4996301',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:13:18.324Z',
          },
        },
        post: {
          create: {
            content: 'String',
            updatedAt: '2024-09-09T07:13:18.324Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String1749430',
                username: 'String237401',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:13:18.324Z',
              },
            },
            event: {
              create: {
                name: 'String',
                startDate: '2024-09-09T07:13:18.324Z',
                updatedAt: '2024-09-09T07:13:18.324Z',
                organization: {
                  create: {
                    name: 'String',
                    updatedAt: '2024-09-09T07:13:18.324Z',
                  },
                },
              },
            },
          },
        },
        message: {
          create: {
            message: 'String',
            updatedAt: '2024-09-09T07:13:18.324Z',
            toUser: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String842347',
                username: 'String3458620',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:13:18.324Z',
              },
            },
            fromUser: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String8446718',
                username: 'String3550161',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2024-09-09T07:13:18.324Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Attachment, 'attachment'>
