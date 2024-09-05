import type { Meta, StoryObj } from '@storybook/react'

import BookmarksPage from './BookmarksPage'

const meta: Meta<typeof BookmarksPage> = {
  component: BookmarksPage,
}

export default meta

type Story = StoryObj<typeof BookmarksPage>

export const Primary: Story = {}
