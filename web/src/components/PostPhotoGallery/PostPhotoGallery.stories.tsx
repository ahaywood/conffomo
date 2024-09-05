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

import PostPhotoGallery from './PostPhotoGallery'

const meta: Meta<typeof PostPhotoGallery> = {
  component: PostPhotoGallery,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PostPhotoGallery>

export const Primary: Story = {}
