import type { Meta, StoryObj } from '@storybook/react'

import QrCodePage from './QrCodePage'

const meta: Meta<typeof QrCodePage> = {
  component: QrCodePage,
}

export default meta

type Story = StoryObj<typeof QrCodePage>

export const Primary: Story = {}
