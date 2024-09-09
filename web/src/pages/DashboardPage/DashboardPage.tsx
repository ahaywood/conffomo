import { Metadata } from '@redwoodjs/web'

import TabbedNav from 'src/components/TabbedNav/TabbedNav'
import UpcomingEventsCell from 'src/components/UpcomingEventsCell'

const DashboardPage = () => {
  return (
    <>
      <Metadata title="Dashboard" description="Dashboard page" />

      {/* main feed */}
      <div className="interior-grid">
        <div>
          <TabbedNav
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
          />
        </div>

        <aside className="border-l-1 border-black pl-4">
          <UpcomingEventsCell />
        </aside>
      </div>
    </>
  )
}

export default DashboardPage
