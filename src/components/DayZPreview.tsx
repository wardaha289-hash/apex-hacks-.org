import { DAYZ_HOME_VIDEO } from '../data/media'

type DayZPreviewProps = {
  className?: string
  /** Wider crop on product page */
  wide?: boolean
  /** Square crop for purchase card */
  aspect?: 'video' | 'square'
  bordered?: boolean
}

/** Self-hosted Apex preview — muted loop, no third-party embeds. */
export function DayZPreview({
  className = '',
  wide = false,
  aspect = 'video',
  bordered = true,
}: DayZPreviewProps) {
  const ratio =
    aspect === 'square' ? 'aspect-square' : wide ? 'aspect-video lg:aspect-[21/9]' : 'aspect-video'

  return (
    <div
      className={`video-brand-mask ${bordered ? 'border border-z-soft/20' : ''} ${className}`.trim()}
    >
      <div className={`relative w-full overflow-hidden ${ratio}`}>
        <video
          className="video-brand-crop absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={DAYZ_HOME_VIDEO.poster}
          aria-label={DAYZ_HOME_VIDEO.title}
        >
          <source src={DAYZ_HOME_VIDEO.src} type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-z-bg/50 via-transparent to-z-bg/20" />
        <div className="video-brand-blur video-brand-blur--top" aria-hidden />
        <div className="video-brand-blur" aria-hidden />
      </div>
      <p className="sr-only">{DAYZ_HOME_VIDEO.title}</p>
    </div>
  )
}
