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

import UserMetaData from './UserMetaData'

const meta: Meta<typeof UserMetaData> = {
  component: UserMetaData,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof UserMetaData>

export const Primary: Story = {
  args: {
    user: {
      id: 1,
      username: 'johndoe',
      first_name: 'John',
      last_name: 'Doe',
      avatar: 'https://placehold.co/100x100',
      location: 'New York, NY',
      bio: 'I am a developer',
      link: 'https://johndoe.com',
      following: [],
      followingCount: 0,
      followers: [],
      followersCount: 0,
    },
  },
}
