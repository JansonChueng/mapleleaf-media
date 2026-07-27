import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const TEAM_ITEMS = [
  { num: '01', title: '创意团队', desc: '创意小组全流程把控成片。从视觉叙事到情感表达，从脚本策划到画面美学，打造具有高传播价值的品牌视频内容。' },
  { num: '02', title: '摄影团队', desc: '自有专业摄影设备确保出品质量与效率。从 4K 电影机到专业灯光系统，无需外租等待，随时响应拍摄需求。' },
  { num: '03', title: '后期制作', desc: '专业后期团队精于剪辑、特效与音频制作。逐帧打磨细节，严控品质标准，确保每一条成片都是精品。' },
]

const EQUIPMENT = [
  { label: '剪辑技术', value: '专业级' },
  { label: '摄像设备', value: '4K 电影级' },
  { label: '拍摄场地', value: '自有影棚' },
  { label: '设备管理', value: '自有全链路' },
]

export default function Team() {
  return (
    <section id="team" className="relative py-24 lg:py-36 overflow-hidden flex justify-center">
      <div className="absolute inset-0 bg-charcoal" />
      <div className="relative z-20 w-full max-w-[80rem] px-6 lg:px-12">
        <SectionTitle overline="Team & Equipment" title="专业团队 · 自有设备" subtitle="从创意到交付的全流程自有体系，确保品质可控、响应高效" light />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {TEAM_ITEMS.map((item, i) => (
            <motion.div key={item.num} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay: i * 0.12 }} className="text-center group">
              <span className="font-mono text-4xl lg:text-5xl font-light text-maple-red leading-none">{item.num}</span>
              <h3 className="font-display font-semibold text-lg lg:text-xl text-white mt-4 mb-3">{item.title}</h3>
              <p className="text-white/40 text-body-mobile lg:text-body leading-relaxed max-w-xs mx-auto">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }} className="bg-charcoal-card border border-white/[0.04] max-w-3xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x sm:divide-x divide-white/[0.04]">
            {EQUIPMENT.map((eq) => <div key={eq.label} className="py-8 lg:py-10 text-center"><p className="font-mono text-[11px] text-white/25 tracking-[0.1em] uppercase mb-3">{eq.label}</p><p className="font-display font-semibold text-base lg:text-lg text-white">{eq.value}</p></div>)}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
