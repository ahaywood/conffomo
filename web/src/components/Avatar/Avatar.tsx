interface AvatarProps {
  alt: string
  className?: string
  size?: number
  src?: string
  shape?: 'circle' | 'square'
}

const Avatar = ({ alt, className = '', size = 72, src = '', shape = 'circle' }: AvatarProps) => {
  return (
    <div>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`object-cover ${shape === 'circle' ? 'rounded-full' : 'rounded-[4px]'} ${className}`}
          style={{ width: size, height: size }}
        />
      ) : (
        <div
          className={`bg-veryLightBlue center text-xl uppercase text-white ${shape === 'circle' ? 'rounded-full' : 'rounded-[4px]'} ${className}`}
          style={{ width: size, height: size }}
        >
          {alt.charAt(0)}
        </div>
      )}
    </div>
  )
}

export default Avatar
