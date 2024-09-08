import { useRef, useState } from 'react'

import { formatRelative } from 'date-fns'
import { AnimatePresence, motion } from 'framer-motion'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import { useClickOutside } from 'src/hooks/useClickOutside'
import { useEscapeKey } from 'src/hooks/useEscapeKey'

import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'
import PopupMenu from '../PopupMenu/PopupMenu'

export type AttachmentType = {
  id: number
  url: string
  type: 'image' | 'video'
}

interface PostCardProps {
  user: {
    id: number
    firstName: string
    lastName: string
    username: string
    avatar: string
  }
  createdAt: string
  content: string
  likesCount: number
  isLiked: boolean
  commentCount: number
  bookmarksCount: number
  isBookmarked: boolean
  attachments?: AttachmentType[]
}

const PostCard = ({
  user,
  createdAt,
  content,
  likesCount,
  isLiked,
  commentCount,
  bookmarksCount,
  isBookmarked,
  attachments,
}: PostCardProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false)
  const { currentUser } = useAuth()
  const menuRef = useRef<HTMLDivElement>(null)
  const shareMenuRef = useRef<HTMLDivElement>(null)

  useEscapeKey(() => setIsMenuOpen(false))
  useClickOutside(() => setIsMenuOpen(false), menuRef)
  useClickOutside(() => setIsShareMenuOpen(false), shareMenuRef)

  // The time from the database will look like this 2024-09-05T20:20:44.346Z
  // I want to convert it to a relative date like "2 hours ago" using the date-fns library and the formatRelative function
  const prettifyDate = (date: string) => {
    const dateObj = new Date(date)
    return formatRelative(dateObj, new Date())
  }

  return (
    <div className="grid grid-cols-[68px_1fr] gap-x-5">
      <Link to={routes.profile({ username: user.username })}>
        <Avatar src={user.avatar} alt={user.username} size={68} />
      </Link>

      {/* post header */}
      <div>
        <div className="flex items-center justify-between">
          <Link
            to={routes.profile({ username: user.username })}
            className="mb-1 hover:underline"
          >
            <strong>
              {user.firstName} {user.lastName}
            </strong>{' '}
            <span>@{user.username}</span> •{' '}
            <span>{prettifyDate(createdAt)}</span>{' '}
          </Link>
          <div ref={menuRef}>
            <button
              className={`relative rounded-full p-1 ${isMenuOpen ? 'bg-veryLightBlue text-white' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon id="threeDots" />
            </button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  className="absolute -right-[2px] top-16"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {currentUser?.id === user.id ? (
                    <PopupMenu
                      position="bottomRight"
                      menuItems={[
                        {
                          label: 'Edit Post',
                          icon: 'edit',
                        },
                        {
                          label: 'Delete Post',
                          icon: 'trash',
                        },
                      ]}
                    />
                  ) : (
                    <PopupMenu
                      position="bottomRight"
                      menuItems={[
                        {
                          label: `Unfollow @${user.username}`,
                          icon: 'unfollow',
                        },
                        {
                          label: `Mute @${user.username}`,
                          icon: 'muted',
                        },
                        {
                          label: `Block @${user.username}`,
                          icon: 'no',
                        },
                        {
                          label: `Report @${user.username}`,
                          icon: 'flag',
                        },
                      ]}
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mb-8">
          <p>{content}</p>

          {/* attachments */}
          {attachments && (
            <div className="post-card__attachments relative mt-4">
              {attachments.map((attachment) => (
                <img
                  className="w-full rounded-md object-cover"
                  key={attachment.id}
                  src={attachment.url}
                  alt={attachment.type}
                />
              ))}
              {attachments.length > 5 && (
                <div className="absolute bottom-2 right-2 rounded-md bg-black bg-opacity-50 px-2 py-1 text-sm text-white">
                  +{attachments.length - 5} more
                </div>
              )}
            </div>
          )}
        </div>

        {/* action buttons */}
        <div className="action-buttons justify-between">
          <button className="flex items-center gap-1">
            <Icon id="speech" />
            {commentCount}
          </button>
          <button className="flex items-center gap-1">
            {isLiked ? <Icon id="likeFilled" /> : <Icon id="like" />}
            {likesCount}
          </button>
          <button className="flex items-center gap-1">
            {isBookmarked ? (
              <Icon id="bookmarksFilled" />
            ) : (
              <Icon id="bookmarks" />
            )}
            {bookmarksCount}
          </button>
          <div className="relative" ref={shareMenuRef}>
            <button
              className={`flex items-center ${isShareMenuOpen ? 'text-veryLightBlue' : ''}`}
              onClick={() => setIsShareMenuOpen(!isShareMenuOpen)}
            >
              <Icon id="share" />
            </button>
            <AnimatePresence>
              {isShareMenuOpen && (
                <motion.div
                  className="absolute -right-6 bottom-12"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <PopupMenu
                    position="topRight"
                    menuItems={[
                      {
                        label: 'Copy Link to Post',
                        icon: 'link',
                      },
                      {
                        label: 'Send via Direct Message',
                        icon: 'messages',
                      },
                    ]}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
