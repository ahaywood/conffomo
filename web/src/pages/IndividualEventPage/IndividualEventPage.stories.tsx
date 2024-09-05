import type { Meta, StoryObj } from '@storybook/react'

import IndividualEventPage from './IndividualEventPage'

const meta: Meta<typeof IndividualEventPage> = {
  component: IndividualEventPage,
}

export default meta

type Story = StoryObj<typeof IndividualEventPage>

export const Primary: Story = {}
