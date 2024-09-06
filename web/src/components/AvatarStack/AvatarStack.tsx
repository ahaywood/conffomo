import Avatar from '../Avatar/Avatar'

export type AttendingType = {
  id: number
  avatar: string
  first_name: string
  last_name: string
}

interface AvatarStackProps {
  attending: AttendingType[]
  size: number
}

const AvatarStack = ({ attending, size }: AvatarStackProps) => {
  return (
    <div className="flex flex-row-reverse items-center justify-end">
      {attending.map((attendee, index) => (
        <div
          className="border-submarine relative -mr-1 aspect-square rounded-full border-1"
          key={index}
          style={{ zIndex: attending.length - index }}
        >
          <Avatar
            src={attendee.avatar}
            size={size}
            alt={`${attendee.first_name} ${attendee.last_name}`}
          />
        </div>
      ))}
    </div>
  )
}

export default AvatarStack
