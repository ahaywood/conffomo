import type { Prisma, Like } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LikeCreateArgs>({
  like: {
    one: {
      data: {
        updatedAt: '2024-09-09T07:17:55.870Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String5939567',
            username: 'String8585813',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:17:55.870Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2024-09-09T07:17:55.870Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String5420617',
            username: 'String1902245',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:17:55.870Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Like, 'like'>
