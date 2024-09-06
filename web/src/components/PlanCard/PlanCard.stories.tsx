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

import PlanCard from './PlanCard'

const meta: Meta<typeof PlanCard> = {
  component: PlanCard,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PlanCard>

const attendee1 = {
  id: 1,
  avatar: 'https://picsum.photos/seed/1725573441908/300/300',
  first_name: 'John',
  last_name: 'Doe',
}

const attendee2 = {
  id: 2,
  avatar: 'https://picsum.photos/seed/1725573441909/300/300',
  first_name: 'Jane',
  last_name: 'Doe',
}

const attendee3 = {
  id: 3,
  avatar: 'https://picsum.photos/seed/1725573441910/300/300',
  first_name: 'Fawn',
  last_name: 'Doe',
}

export const Primary: Story = {
  args: {
    title: 'Plan Title',
    date: '2024-09-05T20:20:44.346Z',
    attending: [attendee1, attendee2, attendee3],
    attendingTotal: 20,
    thumbnail: 'https://picsum.photos/seed/1725573441908/300/300',
    isUserGoing: false,
    isUserInterested: false,
  },
}

export const GoingAndInterested: Story = {
  args: {
    title: 'Plan Title',
    date: '2024-09-05T20:20:44.346Z',
    attending: [attendee1, attendee2, attendee3],
    attendingTotal: 20,
    thumbnail: 'https://picsum.photos/seed/1725573441908/300/300',
    isUserGoing: true,
    isUserInterested: true,
  },
}

export const ThreeAttendees: Story = {
  args: {
    title: 'Plan Title',
    date: '2024-09-05T20:20:44.346Z',
    attending: [attendee1, attendee2, attendee3],
    attendingTotal: 3,
    thumbnail: 'https://picsum.photos/seed/1725573441908/300/300',
    isUserGoing: false,
    isUserInterested: false,
  },
}

export const TwoAttendees: Story = {
  args: {
    title: 'Plan Title',
    date: '2024-09-05T20:20:44.346Z',
    attending: [attendee1, attendee2],
    attendingTotal: 2,
    thumbnail: 'https://picsum.photos/seed/1725573441908/300/300',
    isUserGoing: false,
    isUserInterested: false,
  },
}

export const OneAttendee: Story = {
  args: {
    title: 'Plan Title',
    date: '2024-09-05T20:20:44.346Z',
    attending: [attendee1],
    attendingTotal: 1,
    thumbnail: 'https://picsum.photos/seed/1725573441908/300/300',
    isUserGoing: false,
    isUserInterested: false,
  },
}
