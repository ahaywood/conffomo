import { Link } from '@redwoodjs/router'

interface TabbedNavProps {
  activeTab?: string
  tabs: {
    label: string
    href: string
  }[]
}

const TabbedNav = ({ tabs, activeTab = '' }: TabbedNavProps) => {
  return (
    <div className="flex w-full gap-[72px] bg-white bg-opacity-30 px-8">
      {tabs.map((tab, index) => (
        <Link
          to={tab.href}
          key={index}
          className={`border-b-4 px-3 pb-2 pt-9 text-lg font-extrabold ${
            activeTab === tab.href
              ? 'border-veryLightBlue text-veryLightBlue'
              : 'border-transparent'
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  )
}

export default TabbedNav
