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

import PostCard from './PostCard'
import { type AttachmentType } from './PostCard'

const meta: Meta<typeof PostCard> = {
  component: PostCard,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PostCard>

const args = {
  content: 'This is a post',
  createdAt: '2024-09-05T20:20:44.346Z',
  user: {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
    avatar: 'https://picsum.photos/seed/1725802061611/300/300',
  },
  likesCount: 10,
  isLiked: false,
  commentCount: 10,
  bookmarksCount: 10,
  isBookmarked: false,
  attachments: [],
}

const attachment1 = {
  id: 1,
  url: 'https://picsum.photos/seed/1725802061611/300/300',
  type: 'image',
} as AttachmentType

const attachment2 = {
  id: 2,
  url: 'https://picsum.photos/seed/1725802061612/300/300',
  type: 'image',
} as AttachmentType

const attachment3 = {
  id: 3,
  url: 'https://picsum.photos/seed/1725802061613/300/300',
  type: 'image',
} as AttachmentType

const attachment4 = {
  id: 4,
  url: 'https://picsum.photos/seed/1725802061614/300/300',
  type: 'image',
} as AttachmentType

const attachment5 = {
  id: 5,
  url: 'https://picsum.photos/seed/1725802061615/300/300',
  type: 'image',
} as AttachmentType

export const withOnePicture: Story = {
  args: {
    ...args,
    attachments: [attachment1],
  },
}

export const withTwoPictures: Story = {
  args: {
    ...args,
    attachments: [attachment1, attachment2],
  },
}

export const withThreePictures: Story = {
  args: {
    ...args,
    attachments: [attachment1, attachment2, attachment3],
  },
}

export const withFourPictures: Story = {
  args: {
    ...args,
    attachments: [attachment1, attachment2, attachment3, attachment4],
  },
}

export const withFivePictures: Story = {
  args: {
    ...args,
    attachments: [
      attachment1,
      attachment2,
      attachment3,
      attachment4,
      attachment5,
    ],
  },
}

export const withSixPictures: Story = {
  args: {
    ...args,
    attachments: [
      attachment1,
      attachment2,
      attachment3,
      attachment4,
      attachment5,
      attachment1,
    ],
  },
}
