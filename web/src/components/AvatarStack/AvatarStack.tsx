import Avatar from '../Avatar/Avatar'

export type StackType = {
  id: number
  avatar: string
  first_name: string
  last_name: string
}

interface AvatarStackProps {
  stack: StackType[]
  size: number
}

const AvatarStack = ({ stack, size }: AvatarStackProps) => {
  return (
    <div className="flex flex-row items-center justify-start">
      {stack.map((attendee, index) => (
        <div
          className="border-submarine relative -mr-[6px] aspect-square rounded-full border-1"
          key={index}
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
