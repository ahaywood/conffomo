import type { Prisma, Recommendation } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RecommendationCreateArgs>({
  recommendation: {
    one: {
      data: {
        title: 'String',
        updatedAt: '2024-09-09T06:49:45.317Z',
        event: {
          create: {
            name: 'String',
            startDate: '2024-09-09T06:49:45.317Z',
            updatedAt: '2024-09-09T06:49:45.317Z',
            organization: {
              create: { name: 'String', updatedAt: '2024-09-09T06:49:45.317Z' },
            },
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        updatedAt: '2024-09-09T06:49:45.317Z',
        event: {
          create: {
            name: 'String',
            startDate: '2024-09-09T06:49:45.317Z',
            updatedAt: '2024-09-09T06:49:45.317Z',
            organization: {
              create: { name: 'String', updatedAt: '2024-09-09T06:49:45.317Z' },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Recommendation, 'recommendation'>
