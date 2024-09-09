import { useRef, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import NavMyEventsCell from 'src/components/NavMyEventsCell'
import { useClickOutside } from 'src/hooks/useClickOutside'
import { useEscapeKey } from 'src/hooks/useEscapeKey'

import Icon from '../Icon/Icon'
import ModalWrapper from '../ModalWrapper/ModalWrapper'
import MyAccountBar from '../MyAccountBar/MyAccountBar'
import NotificationCount from '../NotificationCount/NotificationCount'
import Overlay from '../Overlay/Overlay'
import PostForm from '../PostForm/PostForm'

const Nav = () => {
  const [isMyEventsOpen, setIsMyEventsOpen] = useState(true)
  const [isPostFormShowing, setIsPostFormShowing] = useState(false)

  const { currentUser } = useAuth()

  const postFormRef = useRef<HTMLDivElement>(null)

  useEscapeKey(() => setIsPostFormShowing(false))
  useClickOutside(() => setIsPostFormShowing(false), postFormRef)

  return (
    <>
      <aside className="flex h-screen flex-col justify-between pb-9 pt-12">
        <Link to={routes.dashboard()} className="mb-9">
          <img src="/images/logo.svg" alt="Conf FOMO" className="w-[190px]" />
        </Link>
        <nav className="flex-1">
          <ul>
            <li>
              <Link to={routes.dashboard()}>
                <Icon id="dashboard" />
                Dashboard
              </Link>
            </li>
            {/* <li>
              <Link to={routes.search()}>
                <Icon id="search" />
                Search
              </Link>
            </li> */}
            {/* <li>
              <Link to={routes.bookmarks()}>
                <Icon id="bookmarks" />
                Bookmarks
              </Link>
            </li> */}
            {/* <li>
              <Link to={routes.notifications()} className="w-full">
                <Icon id="notifications" />
                <div className="flex-1">Notifications</div>
                <NotificationCount count={10} />
              </Link>
            </li> */}

            {currentUser && (
              <li>
                <button
                  className="w-full text-left"
                  onClick={() => setIsMyEventsOpen(!isMyEventsOpen)}
                >
                  <Icon id="events" />
                  <div className="flex-1">My Events</div>
                  <motion.div animate={{ rotate: isMyEventsOpen ? 180 : 0 }}>
                    <Icon id="chevronDown" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isMyEventsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <NavMyEventsCell id={1} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )}
            {/* <li>
              <Link to={routes.messages()}>
                <Icon id="messages" />
                <div className="w-full flex-1">Messages</div>
                <NotificationCount count={10} />
              </Link>
            </li> */}
            {currentUser && (
              <li>
                {/* TODO: Swap out username with the actual username */}
                <Link to={routes.profile({ username: currentUser.username })}>
                  <Icon id="profile" />
                  Profile
                </Link>
              </li>
            )}
          </ul>
        </nav>

        {currentUser && (
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => setIsPostFormShowing(true)}
                  className="center mb-5 h-14 w-full rounded-full bg-veryLightBlue text-xl font-bold text-white hover:bg-veryLightBlue-darker hover:text-white"
                >
                  Post +
                </button>
              </li>
            </ul>
          </nav>
        )}

        {currentUser && (
          <MyAccountBar
            avatar={currentUser.avatar}
            firstName={currentUser.firstName}
            lastName={currentUser.lastName}
            username={currentUser.username}
          />
        )}
      </aside>

      {/* overlay for posting */}
      <AnimatePresence>
        {isPostFormShowing && (
          <>
            <ModalWrapper>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                ref={postFormRef}
              >
                <PostForm
                  handleClose={() => {
                    setIsPostFormShowing(false)
                  }}
                />
              </motion.div>
            </ModalWrapper>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Nav
