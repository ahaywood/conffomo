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

import AvatarGrid from './AvatarGrid'

const meta: Meta<typeof AvatarGrid> = {
  component: AvatarGrid,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof AvatarGrid>

export const Primary: Story = {
  args: {
    heading: 'Speaking',
    users: [
      {
        avatar: 'https://picsum.photos/seed/1725802061611/300/300',
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
      },
      {
        avatar: 'https://picsum.photos/seed/1725802061611/300/300',
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
      },
      {
        avatar: 'https://picsum.photos/seed/1725802061611/300/300',
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
      },
      {
        avatar: 'https://picsum.photos/seed/1725802061611/300/300',
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
      },
      {
        avatar: 'https://picsum.photos/seed/1725802061611/300/300',
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
      },
      {
        avatar: 'https://picsum.photos/seed/1725802061611/300/300',
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
      },
      {
        avatar: 'https://picsum.photos/seed/1725802061611/300/300',
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
      },
      {
        avatar: 'https://picsum.photos/seed/1725802061611/300/300',
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
      },
      {
        avatar: 'https://picsum.photos/seed/1725802061611/300/300',
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
      },
      {
        avatar: 'https://picsum.photos/seed/1725802061611/300/300',
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
      },
      {
        avatar: 'https://picsum.photos/seed/1725802061611/300/300',
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
      },
      {
        avatar: 'https://picsum.photos/seed/1725802061611/300/300',
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
      },
      {
        avatar: 'https://picsum.photos/seed/1725802061611/300/300',
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
      },
      {
        avatar: 'https://picsum.photos/seed/1725802061611/300/300',
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
      },
      {
        avatar: 'https://picsum.photos/seed/1725802061611/300/300',
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
      },
    ],
  },
}
