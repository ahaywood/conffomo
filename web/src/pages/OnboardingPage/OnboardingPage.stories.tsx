import type { Meta, StoryObj } from '@storybook/react'

import OnboardingPage from './OnboardingPage'

const meta: Meta<typeof OnboardingPage> = {
  component: OnboardingPage,
}

export default meta

type Story = StoryObj<typeof OnboardingPage>

export const Primary: Story = {}
