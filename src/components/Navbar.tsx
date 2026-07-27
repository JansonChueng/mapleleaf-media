import { useState, useEffect } from 'react'
import Logo from './Logo'

const NAV_ITEMS = [
  { label: '品牌定位', href: '#positioning' },
  { label: '核心能力', href: '#capabilities' },
  { label: '服务矩阵', href: '#services' },
  { label: '团队设备', href: '#team' },
  { label: '平台方法论', href: '#platform' },
  { label: '案例展示', href: '#portfolio' },
  { label: '模特资源', href: '#models' },
  { label: '联系我们', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) { document.body.style.overflow = 'hidden' }
    else { document.body.style.overflow = '' }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = () => setMobileOpen(false)

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-charcoal/95 backdrop-blur-xl shadow-2xl shadow-black/30 py-3' : 'bg-transparent py-5'}`} role="navigation" aria-label="主导航">
      <div className="w-full max-w-[80rem] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Logo size={scrolled ? 'sm' : 'md'} layout="horizontal" textWhite className="transition-all duration-500" />
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}><a href={item.href} className="font-display text-xs font-medium tracking-[0.08em] uppercase text-white/60 hover:text-maple-red transition-colors duration-300">{item.label}</a></li>
          ))}
        </ul>
        <button className="lg:hidden flex flex-col gap-1.5 p-2 min-w-[44px] min-h-[44px] items-center justify-center" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-controls="mobile-menu" aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
      <div id="mobile-menu" className={`lg:hidden fixed inset-0 top-0 z-40 bg-charcoal/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all duration-500 ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} aria-hidden={!mobileOpen}>
        {NAV_ITEMS.map((item, i) => (
          <a key={item.href} href={item.href} onClick={handleNavClick} className="font-display text-2xl font-light tracking-[0.15em] uppercase text-white/80 hover:text-maple-red transition-colors duration-300" style={{ transitionDelay: `${i * 60}ms` }} tabIndex={mobileOpen ? 0 : -1}>{item.label}</a>
        ))}
        <button className="absolute top-6 right-6 min-w-[44px] min-h-[44px] flex items-center justify-center text-white/60 hover:text-white transition-colors" onClick={() => setMobileOpen(false)} aria-label="关闭菜单" tabIndex={mobileOpen ? 0 : -1}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>
      </div>
    </nav>
  )
}
