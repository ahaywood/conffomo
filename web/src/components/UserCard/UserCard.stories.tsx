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

import UserCard from './UserCard'

const meta: Meta<typeof UserCard> = {
  component: UserCard,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof UserCard>

export const UserCardFollowing: Story = {
  args: {
    user: {
      id: '1',
      username: 'purplecat',
      firstName: 'Amy',
      lastName: 'Smith',
      avatar: 'https://placehold.co/400x400',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
    },
    following: () => {},
  },
}

export const UserCardIsFollowing: Story = {
  args: {
    user: {
      id: '1',
      username: 'purplecat',
      firstName: 'Amy',
      lastName: 'Smith',
      avatar: 'https://placehold.co/400x400',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
      isFollowing: true,
    },
    following: () => {},
  },
}

export const UserCardBlocked: Story = {
  args: {
    user: {
      id: '1',
      username: 'purplecat',
      firstName: 'Amy',
      lastName: 'Smith',
      avatar: 'https://placehold.co/400x400',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
    },
    blocked: () => {},
  },
}

export const UserCardMuted: Story = {
  args: {
    user: {
      id: '1',
      username: 'purplecat',
      firstName: 'Amy',
      lastName: 'Smith',
      avatar: 'https://placehold.co/400x400',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
    },
    muted: () => {},
  },
}
