import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const VALUES = [
  {
    num: '01',
    title: '品质如枫',
    desc: '每一帧画面都经过严苛的品质把控，从脚本策划到后期调色，不妥协任何一个细节。',
  },
  {
    num: '02',
    title: '技术驱动',
    desc: '以 AI 视觉技术为核心引擎，结合 3D 渲染、智能剪辑，让创意产出更高效、更精准。',
  },
  {
    num: '03',
    title: '全球视野',
    desc: '深谙海外平台算法规则与跨文化审美差异，为品牌量身定制本土化视觉策略。',
  },
]

export default function BrandPositioning() {
  return (
    <section id="positioning" className="relative py-24 lg:py-36 overflow-hidden flex justify-center">
      {/* 背景 */}
      <div className="absolute inset-0 bg-charcoal" />

      <div className="relative z-20 w-full max-w-[80rem] px-6 lg:px-12">
        <SectionTitle
          overline="Brand Essence"
          title="AI 时代的视觉翻译官"
          subtitle="以 AI 视觉技术为核心，让每一帧画面都成为品牌的传播资产"
          light
        />

        {/* 三大价值观 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative"
            >
              {/* 底线装饰 */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-maple-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <span className="font-mono text-5xl lg:text-6xl font-light text-maple-red tracking-tight leading-none">
                {v.num}
              </span>
              <h3 className="font-display font-semibold text-xl lg:text-2xl mt-4 mb-4 text-white tracking-[-0.01em]">
                {v.title}
              </h3>
              <p className="text-white/45 leading-relaxed text-body-mobile lg:text-body">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 使命愿景 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-white/[0.06]"
        >
          <div className="py-10 lg:py-14 border-r-0 md:border-r border-white/[0.06] pr-0 md:pr-12">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-maple-red-light">
              Mission · 使命
            </span>
            <p className="text-white/55 text-body-mobile lg:text-body leading-relaxed mt-5">
              用 AI 视觉技术，帮助中国品牌跨越文化与语言的鸿沟，
              在全球市场用视觉语言讲述动人的品牌故事。
            </p>
          </div>
          <div className="py-10 lg:py-14 pl-0 md:pl-12">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-maple-red-light">
              Vision · 愿景
            </span>
            <p className="text-white/55 text-body-mobile lg:text-body leading-relaxed mt-5">
              成为 AI 时代跨境品牌首选的「视觉翻译官」——
              让每一个中国品牌，都能以世界级的视觉语言被全球消费者记住。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
