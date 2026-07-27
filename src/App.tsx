import Navbar from './components/Navbar'
import MapleLeaf from './components/MapleLeaf'
import Logo from './components/Logo'
import Hero from './sections/Hero'
import BrandPositioning from './sections/BrandPositioning'
import Capabilities from './sections/Capabilities'
import Services from './sections/Services'
import Team from './sections/Team'
import PlatformData from './sections/PlatformData'
import Portfolio from './sections/Portfolio'
import Models from './sections/Models'
import Contact from './sections/Contact'

const FOOTER_LINKS = [
  { label: '品牌定位', href: '#positioning' },
  { label: '核心能力', href: '#capabilities' },
  { label: '服务矩阵', href: '#services' },
  { label: '案例展示', href: '#portfolio' },
]

const COMPANY_INFO = [
  { label: '公司全称', value: '枫叶视界（深圳）传媒有限公司' },
  { label: '英文名称', value: 'Maple Leaf Media (Shenzhen) Co., Ltd.' },
  { label: '商务邮箱', value: 'Dickson1015@263.com', isEmail: true },
  { label: '公司定位', value: 'AI综合视觉服务商 · 海外跨境视频制作' },
]

export default function App() {
  return (
    <>
      <main className="relative">
        {/* 枫叶叙事动效层 */}
        <MapleLeaf />

        {/* 导航 */}
        <Navbar />

        {/* 内容板块 */}
        <Hero />
        <BrandPositioning />
        <Capabilities />
        <Services />
        <Team />
        <PlatformData />
        <Portfolio />
        <Models />
        <Contact />
      </main>

      {/* Footer — 独立于 main */}
      <footer className="relative bg-charcoal border-t border-white/[0.04]">
        <div className="max-w-[80rem] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            {/* 品牌信息 */}
            <div className="lg:col-span-5">
              <Logo size="md" layout="horizontal" textWhite className="mb-8" />
              <p className="text-white/30 text-sm leading-relaxed max-w-md mb-8">
                枫叶视界是 AI 时代的视觉翻译官。我们以 AI 驱动的视觉方案，
                帮助中国品牌跨越文化与语言的鸿沟，让每一个品牌故事都能被世界看见。
              </p>
              <p className="font-mono text-[11px] text-white/15 tracking-[0.06em]">
                &copy; {new Date().getFullYear()} 枫叶视界（深圳）传媒有限公司
              </p>
            </div>

            {/* 快速链接 */}
            <div className="lg:col-span-3">
              <h4 className="font-display font-semibold text-xs tracking-[0.12em] uppercase text-white/50 mb-6">
                快速导航
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/30 hover:text-maple-red text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 公司信息 */}
            <div className="lg:col-span-4">
              <h4 className="font-display font-semibold text-xs tracking-[0.12em] uppercase text-white/50 mb-6">
                公司信息
              </h4>
              <ul className="space-y-4">
                {COMPANY_INFO.map((info) => (
                  <li key={info.label}>
                    <span className="block font-mono text-[10px] text-white/20 tracking-[0.1em] uppercase mb-1">
                      {info.label}
                    </span>
                    {info.isEmail ? (
                      <a
                        href={`mailto:${info.value}`}
                        className="text-white/40 hover:text-maple-red text-sm transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-white/40 text-sm">{info.value}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 底部装饰线 */}
          <div className="mt-16 pt-8 border-t border-white/[0.03] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-[10px] text-white/12 tracking-[0.08em]">
              让中国品牌被世界看见 · Made with Maple Leaf
            </p>
            <p className="font-mono text-[10px] text-white/10 tracking-[0.08em]">
              SZ · CN
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
