import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const CAPABILITIES = [
  {
    num: '01',
    title: '海外市场洞察',
    desc: '深谙海外消费者的视觉审美与决策心理，理解不同市场的文化差异与高端品牌质感，让每一支片子都能在 Kickstarter、独立站、品牌官网上精准呈现产品价值。',
    tags: ['消费者洞察', '文化适配', '高端品牌质感'],
  },
  {
    num: '02',
    title: '视觉方案定制',
    desc: '从创意脚本到成片输出，全流程把控创意方向。针对产品特性与品牌调性，快速制定最适合海外市场的视觉方案，拒绝模板化生产。',
    tags: ['创意策划', '脚本撰写', '全流程品控'],
  },
  {
    num: '03',
    title: '爆款打造经验',
    desc: '多次协助国内企业打造爆款产品视频，深谙海外消费者的决策心理与内容消费习惯，实现品效合一的商业目标，让每一分预算都产生最大回报。',
    tags: ['品效合一', '爆款方法论', '数据驱动'],
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 lg:py-36 overflow-hidden flex justify-center">
      <div className="absolute inset-0 bg-charcoal-light" />
      <div className="relative z-20 w-full max-w-[80rem] px-6 lg:px-12">
        <SectionTitle overline="Core Capabilities" title="三大核心能力" subtitle="深耕海外视频赛道，从策略到执行的全链路专业能力" light />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CAPABILITIES.map((cap, i) => (
            <motion.div key={cap.num} initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65, delay: i * 0.12 }} className="bg-charcoal-card border border-white/[0.04] p-8 lg:p-10 flex flex-col group hover:border-maple-red transition-colors duration-500">
              <span className="font-mono text-sm text-maple-red tracking-[0.1em] mb-6">{cap.num}</span>
              <h3 className="font-display font-semibold text-xl lg:text-2xl text-white mb-5 tracking-[-0.01em]">{cap.title}</h3>
              <p className="text-white/40 text-body-mobile lg:text-body leading-relaxed flex-grow mb-6">{cap.desc}</p>
              <div className="flex flex-wrap gap-2">
                {cap.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[11px] text-white/25 border border-white/[0.06] px-3 py-1.5 tracking-[0.04em]">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}