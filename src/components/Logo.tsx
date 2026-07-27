interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'hero'
  layout?: 'horizontal' | 'vertical'
  textWhite?: boolean
}

export default function Logo({ className = '', size = 'md', layout = 'vertical', textWhite = false }: LogoProps) {
  const sizeMap = {
    sm: { svg: 28, text: '0.7rem', textLight: '0.65rem' },
    md: { svg: 40, text: '0.8rem', textLight: '0.75rem' },
    lg: { svg: 56, text: '0.95rem', textLight: '0.9rem' },
    hero: { svg: 120, text: '1.75rem', textLight: '1.5rem' },
  }
  const s = sizeMap[size]
  const isHorizontal = layout === 'horizontal'
  const boldColor = textWhite ? 'text-white' : 'text-maple-red-light'
  const lightColor = textWhite ? 'text-white/70' : 'text-maple-red'

  return (
    <a href="#hero" className={`inline-flex flex-shrink-0 ${isHorizontal ? 'flex-row items-center' : 'flex-col items-center'} ${isHorizontal ? 'gap-2.5' : 'gap-3'} ${className}`} aria-label="枫叶视界 - 返回首页">
      <img src="/logo.svg" alt="枫叶视界 Logo" width={s.svg} height={s.svg} fetchpriority="high" className="flex-shrink-0" />
      <span className={`flex items-baseline gap-[0.25em] leading-none ${isHorizontal ? '' : 'text-center'}`}>
        <span className={`font-display font-bold tracking-[0.04em] ${boldColor} uppercase whitespace-nowrap`} style={{ fontSize: s.text }}>MAPLE LEAF</span>
        <span className={`font-display font-light tracking-[0.12em] ${lightColor} uppercase whitespace-nowrap`} style={{ fontSize: s.textLight }}>MEDIA</span>
      </span>
    </a>
  )
}
