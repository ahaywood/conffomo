type NotificationCountProps = { count: number }

const NotificationCount = ({ count }: NotificationCountProps) => {
  return (
    <div className="bg-punch inline-flex h-8 min-w-[32px] items-center justify-center rounded-full px-2 text-lg font-black text-white">
      {count}
    </div>
  )
}

export default NotificationCount
