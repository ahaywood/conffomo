import { Link, routes } from '@redwoodjs/router'

import NavMyEventsCell from 'src/components/NavMyEventsCell'

import MyAccountBar from '../MyAccountBar/MyAccountBar'
import Icon from '../Icon/Icon'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import NotificationCount from '../NotificationCount/NotificationCount'

const Nav = () => {
  const [isMyEventsOpen, setIsMyEventsOpen] = useState(false)

  return (
    <aside className="flex h-screen flex-col justify-between pt-12 pb-9">
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
          <li>
            <Link to={routes.search()}>
              <Icon id="search" />
              Search
            </Link>
          </li>
          <li>
            <Link to={routes.bookmarks()}>
              <Icon id="bookmarks" />
              Bookmarks
            </Link>
          </li>
          <li>
            <Link to={routes.notifications()} className="w-full">
              <Icon id="notifications" />
              <div className="flex-1">Notifications</div>
              <NotificationCount count={10} />
            </Link>
          </li>
          <li>
            <button className="w-full text-left" onClick={() => setIsMyEventsOpen(!isMyEventsOpen)}>
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
                  <NavMyEventsCell />
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          <li>
            <Link to={routes.messages()}>
              <Icon id="messages" />
              <div className="flex-1 w-full">Messages</div>
              <NotificationCount count={10} />
            </Link>
          </li>
          <li>
            {/* TODO: Swap out username with the actual username */}
            <Link to={routes.profile({ username: 'test' })}>
              <Icon id="profile" />
              Profile
            </Link>
          </li>
        </ul>
      </nav>

      <nav>
        <ul>
          <li>
            <button className="w-full rounded-full bg-veryLightBlue hover:bg-veryLightBlue-darker text-white font-bold text-xl h-14 center mb-5">
              Post +
            </button>
          </li>
        </ul>
      </nav>

      <MyAccountBar />
    </aside>
  )
}

export default Nav
