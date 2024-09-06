import { useEffect } from 'react'

const Overlay = () => {
  // prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className="fixed inset-0 h-screen w-screen bg-black bg-opacity-80" />
  )
}

export default Overlay
