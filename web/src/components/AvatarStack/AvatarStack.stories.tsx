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

import AvatarStack from './AvatarStack'

const meta: Meta<typeof AvatarStack> = {
  component: AvatarStack,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof AvatarStack>

export const Primary: Story = {
  args: {
    size: 32,
    stack: [
      {
        id: 1,
        avatar: 'https://placehold.co/100x100',
        first_name: 'John',
        last_name: 'Doe',
      },
      {
        id: 2,
        avatar: 'https://placehold.co/100x100',
        first_name: 'Jane',
        last_name: 'Doe',
      },
    ],
  },
}
