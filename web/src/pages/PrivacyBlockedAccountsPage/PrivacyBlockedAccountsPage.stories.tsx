import type { Meta, StoryObj } from '@storybook/react'

import PrivacyBlockedAccountsPage from './PrivacyBlockedAccountsPage'

const meta: Meta<typeof PrivacyBlockedAccountsPage> = {
  component: PrivacyBlockedAccountsPage,
}

export default meta

type Story = StoryObj<typeof PrivacyBlockedAccountsPage>

export const Primary: Story = {}
