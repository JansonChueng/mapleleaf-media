import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const PLATFORMS = [
  {
    name: 'TikTok',
    subtitle: '流量引擎平台',
    insight: '前3秒决定70%流量转化',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M17.072 0H13.08v16.348c0 1.862-1.54 3.38-3.432 3.38-1.884 0-3.42-1.51-3.42-3.38 0-1.832 1.508-3.328 3.396-3.38v-4.004c-4.12.06-7.432 3.352-7.432 7.384 0 4.08 3.388 7.392 7.56 7.392 4.16 0 7.528-3.312 7.528-7.392V8.008a9.124 9.124 0 005.32 1.704V5.736c-3.4 0-5.528-2.528-5.528-5.736z" fill="currentColor" /></svg>),
    stats: [{ label: '理想时长', value: '24 – 31秒' },{ label: '点击率 CTR', value: '0.84%' },{ label: '完播率要求', value: '>= 60%' },{ label: '视频比例', value: '9:16' }],
  },
  {
    name: 'Instagram',
    subtitle: '视觉美学平台',
    insight: '高质量视觉内容是核心',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" /><circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" /></svg>),
    stats: [{ label: '建议时长', value: '30 – 90秒' },{ label: 'Reels 上限', value: '3 分钟' },{ label: '最佳发布时间', value: '周末上午' },{ label: '视频比例', value: '9:16' }],
  },
  {
    name: 'YouTube Shorts',
    subtitle: '长尾流量平台',
    insight: 'SEO优化带来长期流量',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 1.96A29.94 29.94 0 001 11.75a29.94 29.94 0 00.46 5.33 2.78 2.78 0 001.94 1.96c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96 29.94 29.94 0 00.46-5.33 29.94 29.94 0 00-.46-5.33z" fill="currentColor" /><path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" fill="#1A1A1A" /></svg>),
    stats: [{ label: 'Shorts 黄金', value: '15 – 30秒' },{ label: '上限时长', value: '3 分钟' },{ label: '最佳发布时间', value: '周四—周日' },{ label: '视频比例', value: '9:16' }],
  },
]

export default function PlatformData() {
  return (
    <section id="platform" className="relative py-24 lg:py-36 overflow-hidden flex justify-center">
      <div className="absolute inset-0 bg-charcoal-light" />
      <div className="relative z-20 w-full max-w-[80rem] px-6 lg:px-12">
        <SectionTitle overline="Platform Intelligence" title="数据驱动 · 平台方法论" subtitle="深谙三大海外主流平台的内容规则与流量密码" light />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PLATFORMS.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-charcoal-card border border-white/[0.04] p-8 lg:p-10 flex flex-col">
              <div className="flex items-center gap-3 mb-1">
                <div className="text-white/70 flex-shrink-0">{p.icon}</div>
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-white tracking-[-0.02em]">{p.name}</h3>
              </div>
              <span className="font-mono text-[11px] text-white/25 tracking-[0.1em] mb-8">{p.subtitle}</span>
              <div className="bg-charcoal-light border-l-2 border-maple-red px-4 py-3 mb-8"><span className="font-mono text-[10px] text-maple-red-light tracking-[0.15em] uppercase">Key Insight</span><p className="font-display font-medium text-sm text-white/80 mt-1">{p.insight}</p></div>
              <div className="space-y-4 flex-grow">
                {p.stats.map((s) => <div key={s.label} className="flex justify-between items-center border-b border-white/[0.03] pb-3"><span className="font-mono text-[11px] text-white/30 tracking-[0.04em]">{s.label}</span><span className="font-display font-semibold text-sm text-white/70">{s.value}</span></div>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
