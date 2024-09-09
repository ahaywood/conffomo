import type { Prisma, Organization } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.OrganizationCreateArgs>({
  organization: {
    one: {
      data: {
        name: 'String',
        updatedAt: '2024-09-09T07:16:56.022Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String5429132',
            username: 'String8232309',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:16:56.022Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        updatedAt: '2024-09-09T07:16:56.022Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String927957',
            username: 'String9820948',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-09-09T07:16:56.022Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Organization, 'organization'>
