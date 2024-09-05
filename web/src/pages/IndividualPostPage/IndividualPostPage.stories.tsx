import type { Meta, StoryObj } from '@storybook/react'

import IndividualPostPage from './IndividualPostPage'

const meta: Meta<typeof IndividualPostPage> = {
  component: IndividualPostPage,
}

export default meta

type Story = StoryObj<typeof IndividualPostPage>

export const Primary: Story = {}
