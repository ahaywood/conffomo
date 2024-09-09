import type { Prisma, Plan } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PlanCreateArgs>({
  plan: {
    one: {
      data: {
        title: 'String',
        updatedAt: '2024-09-09T07:14:06.160Z',
        event: {
          create: {
            name: 'String',
            startDate: '2024-09-09T07:14:06.160Z',
            updatedAt: '2024-09-09T07:14:06.160Z',
            organization: {
              create: { name: 'String', updatedAt: '2024-09-09T07:14:06.160Z' },
            },
          },
        },
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String9323804',
            username: 'String2715803',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:14:06.160Z',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        updatedAt: '2024-09-09T07:14:06.160Z',
        event: {
          create: {
            name: 'String',
            startDate: '2024-09-09T07:14:06.160Z',
            updatedAt: '2024-09-09T07:14:06.160Z',
            organization: {
              create: { name: 'String', updatedAt: '2024-09-09T07:14:06.160Z' },
            },
          },
        },
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String8994865',
            username: 'String7194841',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:14:06.160Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Plan, 'plan'>
