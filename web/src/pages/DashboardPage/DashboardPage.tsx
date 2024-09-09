import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import DashboardCell from 'src/components/DashboardCell'
import TabbedNav from 'src/components/TabbedNav/TabbedNav'
import UpcomingEventsCell from 'src/components/UpcomingEventsCell'

const DashboardPage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <Metadata title="Dashboard" description="Dashboard page" />

      {/* main feed */}
      <div className="interior-grid">
        <div className="p-10">
          {/* TODO: Add Tabbed Nav back in */}
          {/* <TabbedNav
            tabs={[
              {
                label: 'Events I Attended',
                href: '#attended',
              },
              {
                label: 'Following',
                href: '#following',
              },
            ]}
            activeTab="#attended"
          /> */}
          <DashboardCell />
        </div>

        <aside className="mr-10 border-l-1 border-black pl-4">
          <UpcomingEventsCell id={currentUser.id} />
        </aside>
      </div>
    </>
  )
}

export default DashboardPage
