import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const SERVICES = [
  {
    icon: (<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="2" y="4" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" /><circle cx="16" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" /><path d="M22 24l-3-3.5M10 24l3-3.5" stroke="currentColor" strokeWidth="1.5" /></svg>),
    en: 'Product Showcase', zh: '产品出海视频',
    desc: '1–2 分钟核心视频，适配 Kickstarter、独立站及电商平台。黄金 3 秒直击核心卖点，贴合海外碎片化浏览习惯，最大化下单转化。',
    tags: ['Kickstarter', 'Indiegogo', '独立站', '亚马逊'],
  },
  {
    icon: (<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" /><path d="M20 14l3-2v8l-3-2" stroke="currentColor" strokeWidth="1.5" /></svg>),
    en: '3D Rendering', zh: '3D 渲染视频',
    desc: '专业 3D 渲染视频制作。质感高级，卖点可视化，无需实拍也可呈现产品细节与使用场景，适配多平台传播需求。',
    tags: ['3D建模', '产品渲染', '场景动画'],
  },
  {
    icon: (<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M4 8h24v16H4z" stroke="currentColor" strokeWidth="1.5" /><path d="M12 4v4M20 4v4M4 14h24" stroke="currentColor" strokeWidth="1.5" /><circle cx="11" cy="20" r="1.5" fill="currentColor" /><path d="M15 20h8" stroke="currentColor" strokeWidth="1.5" /></svg>),
    en: 'Brand Story', zh: '品牌故事片',
    desc: '2–3 分钟深度内容，传递品牌文化与价值观。通过视觉叙事建立情感连接，提升品牌认知度与用户忠诚度。',
    tags: ['品牌叙事', '情感连接', '文化输出'],
  },
  {
    icon: (<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="3" y="7" width="26" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" /><path d="M12 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.5" /><circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" /></svg>),
    en: 'Social Shorts', zh: '社交媒体短视频',
    desc: '适配 TikTok、Instagram Reels、YouTube Shorts 等平台规格。高频更新保持品牌活跃度，算法优化获取持续流量曝光。',
    tags: ['TikTok', 'Instagram', 'YouTube'],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-36 overflow-hidden flex justify-center">
      <div className="absolute inset-0 bg-charcoal" />
      <div className="relative z-20 w-full max-w-[80rem] px-6 lg:px-12">
        <SectionTitle overline="Our Services" title="出海全场景视频解决方案" subtitle="从产品展示到品牌叙事，覆盖海外主流平台的全矩阵视频服务" light />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((svc, i) => (
            <motion.div key={svc.en} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay: i * 0.1 }} className="bg-charcoal-card border border-white/[0.04] p-8 lg:p-10 group hover:border-maple-red transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className="text-maple-red flex-shrink-0 mt-1 group-hover:text-maple-red transition-colors duration-300">{svc.icon}</div>
                <div className="flex-grow">
                  <span className="font-display font-light text-xs tracking-[0.15em] uppercase text-white/25">{svc.en}</span>
                  <h3 className="font-display font-semibold text-lg lg:text-xl text-white mt-2 mb-3 tracking-[-0.01em]">{svc.zh}</h3>
                  <p className="text-white/40 text-body-mobile lg:text-body leading-relaxed mb-5">{svc.desc}</p>
                  <div className="flex flex-wrap gap-2">{svc.tags.map((tag) => <span key={tag} className="font-mono text-[11px] text-white/20 border border-white/[0.05] px-2.5 py-1 tracking-[0.04em]">{tag}</span>)}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}