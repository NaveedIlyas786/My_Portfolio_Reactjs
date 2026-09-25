import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import './dialog.css'

const Dialog = ({ open, onClose, children }) => {
  useEffect(() => {
    if (!open) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKey)

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = 'auto'
      document.body.style.overflowX = 'hidden'
      document.body.style.overflowY = 'auto'
      document.documentElement.style.overflow = 'auto'
      document.documentElement.style.overflowX = 'hidden'
      document.documentElement.style.overflowY = 'auto'
    }
  }, [open, onClose])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className='ui-dialog-root' role='presentation'>
          <motion.button
            type='button'
            className='ui-dialog-overlay'
            aria-label='Close dialog'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className='ui-dialog-content'
            role='dialog'
            aria-modal='true'
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          >
            <button
              type='button'
              className='ui-dialog-close'
              onClick={onClose}
              aria-label='Close'
            >
              <IoClose size={20} />
            </button>
            <div className='ui-dialog-body'>{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

export default Dialog
