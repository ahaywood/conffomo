import type { Meta, StoryObj } from '@storybook/react'

import EditAccountPage from './EditAccountPage'

const meta: Meta<typeof EditAccountPage> = {
  component: EditAccountPage,
}

export default meta

type Story = StoryObj<typeof EditAccountPage>

export const Primary: Story = {}
