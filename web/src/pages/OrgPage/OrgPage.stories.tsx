import type { Meta, StoryObj } from '@storybook/react'

import OrgPage from './OrgPage'

const meta: Meta<typeof OrgPage> = {
  component: OrgPage,
}

export default meta

type Story = StoryObj<typeof OrgPage>

export const Primary: Story = {}
