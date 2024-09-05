import type { Meta, StoryObj } from '@storybook/react'

import MessagesPage from './MessagesPage'

const meta: Meta<typeof MessagesPage> = {
  component: MessagesPage,
}

export default meta

type Story = StoryObj<typeof MessagesPage>

export const Primary: Story = {}
