import { render } from '@redwoodjs/testing/web'

import PrivacySettingsLayout from './PrivacySettingsLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PrivacySettingsLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrivacySettingsLayout />)
    }).not.toThrow()
  })
})
