import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String2766627',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2024-09-05T19:42:42.749Z',
      },
    },
    two: {
      data: {
        email: 'String9662812',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2024-09-05T19:42:42.749Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
