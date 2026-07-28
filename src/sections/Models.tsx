import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

export default function Models() {
  return (
    <section id="models" className="relative py-24 lg:py-36 overflow-hidden flex justify-center">
      <div className="absolute inset-0 bg-charcoal-light" />
      <div className="relative z-20 w-full max-w-[80rem] px-6 lg:px-12">
        <SectionTitle overline="Talent Resources" title="外籍模特资源" subtitle="汇聚全球优质外籍模特资源，适配各类海外品牌拍摄需求" light />
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }} className="mb-16">
          <div className="flex items-center gap-6 mb-10"><span className="font-mono text-[10px] text-maple-red tracking-[0.2em] uppercase">Models Profile</span><div className="flex-grow h-px bg-white/[0.05]" /></div>
          <h3 className="font-display font-light text-2xl lg:text-3xl text-white tracking-[0.15em] uppercase mb-2">Male</h3>
          <p className="font-display font-semibold text-2xl lg:text-3xl text-white tracking-[0.15em] uppercase mb-8">Models</p>
          <p className="text-white/35 text-body-mobile lg:text-body max-w-2xl mb-10">汇聚全球优质外籍男模资源，涵盖欧美、中东、东南亚等多地区面孔，适配商务、运动、时尚、生活等各类品牌风格。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
            {[{ name: 'LEVL', file: 'male_20_1.webp' },{ name: 'GUI', file: 'male_21_0.webp' },{ name: 'DAVID', file: 'male_23_2.webp' },{ name: 'NIKITA', file: 'male_18_0.webp' },{ name: 'THEO', file: 'male_28_0.webp' }].map((m) => (
              <div key={m.file} className="group relative aspect-[3/4] overflow-hidden bg-charcoal-card border border-white/[0.03]">
                <img src={`./images/models/${m.file}`} alt={`外籍男模 ${m.name}`} loading="lazy" decoding="async" width={640} height={853} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/55 to-transparent"><span className="font-display font-semibold text-xs tracking-[0.15em] text-white uppercase">{m.name}</span></div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-white/20 text-sm text-center">* 以上仅为部分模特展示，我们拥有更丰富的全球模特资源池，可依据项目需求精准匹配</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-6 mb-10"><span className="font-mono text-[10px] text-maple-red tracking-[0.2em] uppercase">Models Profile</span><div className="flex-grow h-px bg-white/[0.05]" /></div>
          <h3 className="font-display font-light text-2xl lg:text-3xl text-white tracking-[0.15em] uppercase mb-2">Female</h3>
          <p className="font-display font-semibold text-2xl lg:text-3xl text-white tracking-[0.15em] uppercase mb-8">Models</p>
          <p className="text-white/35 text-body-mobile lg:text-body max-w-2xl mb-10">汇聚全球优质外籍女模资源，涵盖欧美、东亚、中东等多元面孔，适配美妆、时尚、饰品、生活方式等品类拍摄需求。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
            {[{ name: 'ELISA', file: 'female_31_3.webp' },{ name: 'SOPHIA', file: 'female_32_0.webp' },{ name: 'LUNA', file: 'female_33_0.webp' },{ name: 'ESTAR', file: 'female_34_0.webp' },{ name: 'LUANA', file: 'female_35_1.webp' }].map((m) => (
              <div key={m.file} className="group relative aspect-[3/4] overflow-hidden bg-charcoal-card border border-white/[0.03]">
                <img src={`./images/models/${m.file}`} alt={`外籍女模 ${m.name}`} loading="lazy" decoding="async" width={640} height={853} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/55 to-transparent"><span className="font-display font-semibold text-xs tracking-[0.15em] text-white uppercase">{m.name}</span></div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-white/20 text-sm text-center">* 以上仅为部分模特展示，我们拥有更丰富的全球模特资源池，可依据项目需求精准匹配</p>
        </motion.div>
      </div>
    </section>
  )
}
