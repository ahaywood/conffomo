import { useRef, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { useClickOutside } from 'src/hooks/useClickOutside'
import { useEscapeKey } from 'src/hooks/useEscapeKey'

import Icon from '../Icon/Icon'
import PopupMenu from '../PopupMenu/PopupMenu'

interface UserMetaDataActionButtonsProps {
  userId: number
  username: string
  isFollowing?: boolean
}

const UserMetaDataActionButtons = ({
  userId,
  username,
  isFollowing = false,
}: UserMetaDataActionButtonsProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuRef = useRef<HTMLDivElement>(null)

  useClickOutside(() => setIsMenuOpen(false), menuRef)
  useEscapeKey(() => setIsMenuOpen(false))

  return (
    <div className="action-buttons">
      <div className="relative" ref={menuRef}>
        <button
          className={`icon-button icon-button--outline ${
            isMenuOpen ? 'toggled-on' : ''
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon id="threeDots" />
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 14 }}
              exit={{ opacity: 0, y: 0 }}
            >
              <div className="absolute left-1/2 -translate-x-1/2">
                <PopupMenu
                  menuItems={[
                    {
                      label: 'Copy Link to Profile',
                      icon: 'copy',
                      onClick: () => {},
                    },
                    {
                      label: `Mute @${username}`,
                      icon: 'muted',
                      onClick: () => {},
                    },
                    {
                      label: `Block @${username}`,
                      icon: 'no',
                      onClick: () => {},
                    },
                    {
                      label: `Report @${username}`,
                      icon: 'flag',
                      onClick: () => {},
                    },
                  ]}
                  position="bottomCenter"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Link to DM this user within Messages */}
      <button className="icon-button icon-button--outline">
        <Icon id="speech" />
      </button>

      <button className={`button ${isFollowing ? 'toggled-on' : ''}`}>
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  )
}

export default UserMetaDataActionButtons
