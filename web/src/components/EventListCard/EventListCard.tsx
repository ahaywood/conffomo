import NavMyEvent from '../NavMyEvent/NavMyEvent'

type Event = {
  id: number
  slug: string
  title: string
  thumbnail: string
}

interface EventListCardProps {
  heading: string
  events: Event[]
}

const EventListCard = ({ heading, events }: EventListCardProps) => {
  return (
    <div className="rounded-lg bg-white bg-opacity-30 p-4">
      <h2 className="mb-3 text-lg font-bold">{heading}</h2>
      <ul className="flex flex-col gap-3">
        {events.map((event) => (
          <NavMyEvent key={event.id} {...event} />
        ))}
      </ul>
    </div>
  )
}

export default EventListCard
