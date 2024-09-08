// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import UserMetaDataActionButtons from './UserMetaDataActionButtons'

const meta: Meta<typeof UserMetaDataActionButtons> = {
  component: UserMetaDataActionButtons,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof UserMetaDataActionButtons>

export const Primary: Story = {
  args: {
    userId: 1,
    username: 'johndoe',
  },
}

export const isFollowing: Story = {
  args: {
    userId: 1,
    username: 'johndoe',
    isFollowing: true,
  },
}
