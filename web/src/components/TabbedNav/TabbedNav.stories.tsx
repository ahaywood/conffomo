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

import TabbedNav from './TabbedNav'

const meta: Meta<typeof TabbedNav> = {
  component: TabbedNav,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TabbedNav>

export const Primary: Story = {
  args: {
    activeTab: '/tab1',
    tabs: [
      { label: 'Tab 1', href: '/tab1' },
      { label: 'Tab 2', href: '/tab2' },
      { label: 'Tab 3', href: '/tab3' },
    ],
  },
}
