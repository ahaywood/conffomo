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

import PopupMenu from './PopupMenu'

const meta: Meta<typeof PopupMenu> = {
  component: PopupMenu,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PopupMenu>

export const Primary: Story = {
  args: {
    menuItems: [
      {
        label: 'Admin',
        icon: 'admin',
        href: '/admin',
      },
      {
        label: 'Settings',
        icon: 'settings',
        onClick: () => {},
      },
    ],
  },
}
