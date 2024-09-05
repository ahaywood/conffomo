import { render } from '@redwoodjs/testing/web'

import PostPhotoGallery from './PostPhotoGallery'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PostPhotoGallery', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PostPhotoGallery />)
    }).not.toThrow()
  })
})
