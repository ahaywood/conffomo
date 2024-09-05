import { render } from '@redwoodjs/testing/web'

import BookmarksPage from './BookmarksPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BookmarksPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BookmarksPage />)
    }).not.toThrow()
  })
})
