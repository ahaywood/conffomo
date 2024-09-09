import NavMyEvent from '../NavMyEvent/NavMyEvent'

type Event = {
  id: number
  thumbnail: string
  name: string
  slug: string
}

interface EventListCardProps {
  heading: string
  events: { event: Event }[]
}

const EventListCard = ({ heading, events }: EventListCardProps) => {
  console.log({ events })
  return (
    <div className="rounded-lg bg-white bg-opacity-30 p-4">
      <h2 className="mb-3 text-lg font-bold">{heading}</h2>
      {events.map((event, index) => (
        <NavMyEvent
          key={index}
          id={event.event.id}
          thumbnail={event.event.thumbnail}
          name={event.event.name}
          slug={event.event.slug}
        />
      ))}
    </div>
  )
}

export default EventListCard
