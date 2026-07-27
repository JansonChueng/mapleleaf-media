import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const PLATFORMS = [
  { name: 'TikTok', subtitle: '流量引擎平台', insight: '前3秒决定70%流量转化', stats: [{ label: '理想时长', value: '24 – 31秒' },{ label: '点击率 CTR', value: '0.84%' },{ label: '完播率要求', value: '>= 60%' },{ label: '视频比例', value: '9:16' }] },
  { name: 'Instagram', subtitle: '视觉美学平台', insight: '高质量视觉内容是核心', stats: [{ label: '建议时长', value: '30 – 90秒' },{ label: 'Reels 上限', value: '3 分钟' },{ label: '最佳发布时间', value: '周末上午' },{ label: '视频比例', value: '9:16' }] },
  { name: 'YouTube Shorts', subtitle: '长尾流量平台', insight: 'SEO优化带来长期流量', stats: [{ label: 'Shorts 黄金', value: '15 – 30秒' },{ label: '上限时长', value: '3 分钟' },{ label: '最佳发布时间', value: '周四—周日' },{ label: '视频比例', value: '9:16' }] },
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
              <h3 className="font-display font-bold text-2xl lg:text-3xl text-white tracking-[-0.02em] mb-1">{p.name}</h3>
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
