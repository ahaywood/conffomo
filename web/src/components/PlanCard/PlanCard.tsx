import AvatarStack, { AttendingType } from '../AvatarStack/AvatarStack'

interface PlanCardProps {
  thumbnail: string
  title: string
  date: string
  attending: AttendingType[]
  attendingTotal: number
  isUserGoing: boolean
  isUserInterested: boolean
}

const PlanCard = ({
  thumbnail,
  title,
  date,
  attending,
  attendingTotal,
  isUserGoing,
  isUserInterested,
}: PlanCardProps) => {
  // the date from the database will look like this 2024-09-05T20:20:44.346Z
  // we want to convert it to this September 9th
  const prettyifyDate = (date: string) => {
    const dateObj = new Date(date)
    const month = dateObj.toLocaleString('default', { month: 'long' })
    const day = dateObj.getDate()
    const suffix =
      day % 10 === 1 && day !== 11
        ? 'st'
        : day % 10 === 2 && day !== 12
          ? 'nd'
          : day % 10 === 3 && day !== 13
            ? 'rd'
            : 'th'
    return `${month} ${day}${suffix}`
  }

  // The time from the database will look like this 2024-09-05T20:20:44.346Z
  // I want to convert it to this 8:20pm
  const prettifyTime = (date: string) => {
    const dateObj = new Date(date)
    const hours = dateObj.getHours()
    const minutes = dateObj.getMinutes()
    const ampm = hours >= 12 ? 'pm' : 'am'
    const hours12 = hours % 12 || 12
    const minutesStr = minutes < 10 ? `0${minutes}` : minutes
    return `${hours12}:${minutesStr}${ampm}`
  }

  const randomAttendee = (attending: AttendingType[]): AttendingType => {
    // randomly return a
    const randomIndex = Math.floor(Math.random() * attending.length)
    return attending[randomIndex]
  }

  const attendingSummary = (attendingTotal: number) => {
    if (attendingTotal === 1) {
      return ' will attend'
    } else if (attendingTotal === 2) {
      return ' and 1 other will attend'
    } else if (attendingTotal === 3) {
      return ' and 2 others will attend'
    } else {
      return ` and ${attendingTotal - 1} others will attend`
    }
  }

  return (
    <div className="plan-card flex gap-5">
      <img
        src={thumbnail}
        alt={title}
        className="h-[180px] w-[190px] rounded-xl"
      />
      <div>
        <h3 className="mb-2 text-lg font-extrabold">{title}</h3>
        <p className="mb-6">
          {prettyifyDate(date)} at {prettifyTime(date)}
        </p>
        <div className="mb-5 flex items-center gap-2">
          <AvatarStack size={24} stack={attending} />{' '}
          {randomAttendee(attending).first_name}{' '}
          {randomAttendee(attending).last_name}
          {attendingSummary(attendingTotal)}
        </div>
        <div className="action-buttons">
          <button
            className="button"
            onClick={() => {
              console.log('invited')
            }}
          >
            Invite
          </button>
          <button
            className={`button ${isUserGoing ? 'toggled-on' : ''}`}
            onClick={() => {
              console.log('going')
            }}
          >
            Going
          </button>
          <button
            className={`button ${isUserInterested ? 'toggled-on' : ''}`}
            onClick={() => {
              console.log('interested')
            }}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlanCard
