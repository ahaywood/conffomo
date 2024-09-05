import type { Meta, StoryObj } from '@storybook/react'

import GuestDashboardPage from './GuestDashboardPage'

const meta: Meta<typeof GuestDashboardPage> = {
  component: GuestDashboardPage,
}

export default meta

type Story = StoryObj<typeof GuestDashboardPage>

export const Primary: Story = {}
