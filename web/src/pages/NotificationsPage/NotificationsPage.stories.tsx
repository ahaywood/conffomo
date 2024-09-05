import type { Meta, StoryObj } from '@storybook/react'

import NotificationsPage from './NotificationsPage'

const meta: Meta<typeof NotificationsPage> = {
  component: NotificationsPage,
}

export default meta

type Story = StoryObj<typeof NotificationsPage>

export const Primary: Story = {}
