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

import EventListCard from './EventListCard'

const meta: Meta<typeof EventListCard> = {
  component: EventListCard,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof EventListCard>

export const Primary: Story = {
  args: {
    heading: 'Upcoming Events',
    events: [
      {
        id: 1,
        slug: 'event-1',
        title: 'Event 1',
        thumbnail: 'https://picsum.photos/seed/1725573441908/300/300',
      },
      {
        id: 2,
        slug: 'event-2',
        title: 'Event 2',
        thumbnail: 'https://picsum.photos/seed/1725573441909/300/300',
      },
    ],
  },
}
