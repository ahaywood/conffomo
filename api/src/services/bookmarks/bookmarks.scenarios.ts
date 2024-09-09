import type { Prisma, Bookmark } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BookmarkCreateArgs>({
  bookmark: {
    one: {
      data: {
        updatedAt: '2024-09-09T06:44:54.937Z',
        post: {
          create: { content: 'String', updatedAt: '2024-09-09T06:44:54.937Z' },
        },
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String5376728',
            username: 'String2496215',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T06:44:54.937Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2024-09-09T06:44:54.937Z',
        post: {
          create: { content: 'String', updatedAt: '2024-09-09T06:44:54.937Z' },
        },
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String3546501',
            username: 'String2081953',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T06:44:54.937Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Bookmark, 'bookmark'>
