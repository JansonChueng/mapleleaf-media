import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const SCENES = [
  {
    name: '工匠房',
    en: 'Craftsman Room',
    desc: '工业硬核',
    detail: '工业水泥地 · 整面洞洞板 · 实木操作台',
    img: './images/studio/01-craftsman.webp',
    suitable: '户外工具 · 机械配件 · 3D打印',
  },
  {
    name: '温馨客厅',
    en: 'Cozy Living',
    desc: '治愈居家',
    detail: '原木地板 · 奶油风沙发 · 全景采光',
    img: './images/studio/02-livingroom.webp',
    suitable: '家居家电 · 小家电 · 生活品类',
  },
  {
    name: '极客电竞房',
    en: 'Gaming Studio',
    desc: '赛博潮流',
    detail: 'RGB 灯带 · 霓虹灯牌 · 电竞外设',
    img: './images/studio/03-gaming.webp',
    suitable: '数码耳机 · 智能穿戴 · 潮玩手办',
  },
  {
    name: '公共办公',
    en: 'Open Office',
    desc: '现代职场',
    detail: '落地窗 · 模块化工位 · 玻璃隔断',
    img: './images/studio/04-office.webp',
    suitable: '商务人像 · 办公设备 · 企业宣传',
  },
  {
    name: '会议室',
    en: 'Meeting Room',
    desc: '高端商务',
    detail: '软包墙面 · 智能大屏 · 长形会议桌',
    img: './images/studio/05-meeting.webp',
    suitable: '企业宣讲 · 商务访谈 · 直播',
  },
  {
    name: '个人工作室',
    en: 'Private Studio',
    desc: '极简私密',
    detail: '柔和自然光 · 极简办公 · 独立空间',
    img: './images/studio/06-studio.webp',
    suitable: '产品静物 · 商务人像 · 独立办公',
  },
]

export default function StudioGallery() {
  return (
    <section id="studio" className="relative py-24 lg:py-36 overflow-hidden flex justify-center">
      <div className="absolute inset-0 bg-charcoal" />
      <div className="relative z-20 w-full max-w-[80rem] px-6 lg:px-12">
        <SectionTitle
          overline="Studio Space"
          title="自有影棚，高效迎合拍摄需求"
          subtitle="1000㎡ 自营影棚，6+ 主题场景，一站式的满足拍摄需求"
          light
        />

        {/* 6 场景网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-12">
          {SCENES.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden bg-charcoal-card border border-white/[0.04] hover:border-maple-red/60 transition-colors duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={`${s.name} - ${s.desc}`}
                  loading="lazy"
                  decoding="async"
                  width={900}
                  height={675}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="font-mono text-[10px] text-maple-red-light tracking-[0.15em] uppercase bg-charcoal/80 backdrop-blur-sm px-2.5 py-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-display font-semibold text-lg text-white tracking-[-0.01em]">{s.name}</h3>
                  <span className="font-display font-light text-[11px] text-white/30 tracking-[0.12em] uppercase">{s.en}</span>
                </div>
                <p className="font-mono text-[11px] text-maple-red-light tracking-[0.1em] uppercase mb-3">{s.desc}</p>
                <p className="text-white/40 text-sm leading-relaxed mb-3">{s.detail}</p>
                <p className="text-white/25 text-xs">
                  <span className="text-white/40">适合品类：</span>{s.suitable}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}