import { motion } from 'framer-motion'
import { createPortal } from 'react-dom'

import Overlay from '../Overlay/Overlay'

const ModalWrapper = ({ children }) => {
  return createPortal(
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Overlay />
      </motion.div>
      <div className="center z-modal fixed inset-0 h-screen w-screen">
        {children}
      </div>
    </>,
    document.body
  )
}

export default ModalWrapper
