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

import NotificationCount from './NotificationCount'

const meta: Meta<typeof NotificationCount> = {
  component: NotificationCount,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof NotificationCount>

export const Primary: Story = {
  args: {
    count: 1,
  },
}

export const LargeNumber: Story = {
  args: {
    count: 100,
  },
}
