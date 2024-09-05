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

import Tooltip from './Tooltip'

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Top: Story = {
  args: {
    children: 'Tooltip',
    direction: 'top',
    showing: true,
  },
}

export const Bottom: Story = {
  args: {
    children: 'Tooltip',
    direction: 'bottom',
    showing: true,
  },
}

export const Left: Story = {
  args: {
    children: 'Tooltip',
    direction: 'left',
    showing: true,
  },
}

export const Right: Story = {
  args: {
    children: 'Tooltip',
    direction: 'right',
    showing: true,
  },
}
