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

import PostForm from './PostForm'

const meta: Meta<typeof PostForm> = {
  component: PostForm,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PostForm>

export const Primary: Story = {
  render: () => {
    mockCurrentUser({
      id: '123',
      email: 'testemail@hello.com',
      firstName: 'John',
      lastName: 'Doe',
      avatar: 'https://picsum.photos/seed/1725802061611/300/300',
    })
    return <PostForm />
  },
}
