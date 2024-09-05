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

import NavMyEvent from './NavMyEvent'

const meta: Meta<typeof NavMyEvent> = {
  component: NavMyEvent,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof NavMyEvent>

export const Primary: Story = {
  args: {
    thumbnail: 'https://picsum.photos/200/300',
    title: 'Event Title',
    slug: 'event-slug',
  },
}
