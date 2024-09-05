import type { Meta, StoryObj } from '@storybook/react'

import PrivacyMutedAccountsPage from './PrivacyMutedAccountsPage'

const meta: Meta<typeof PrivacyMutedAccountsPage> = {
  component: PrivacyMutedAccountsPage,
}

export default meta

type Story = StoryObj<typeof PrivacyMutedAccountsPage>

export const Primary: Story = {}
