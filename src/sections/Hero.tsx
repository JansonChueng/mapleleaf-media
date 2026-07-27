import { motion } from 'framer-motion'
import Logo from '../components/Logo'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 背景氛围 */}
      <div className="absolute inset-0 bg-charcoal" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* 径向渐变光 — 枫叶红 */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(202,30,28,0.15) 0%, transparent 70%)',
        }}
      />

      {/* 主内容 */}
      <div className="relative z-20 w-full max-w-[80rem] px-6 lg:px-12 text-center pt-20">
        {/* Logo + 英文 — 上下排列，枫叶红 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-10 flex justify-center"
        >
          <Logo layout="vertical" size="hero" />
        </motion.div>

        {/* 主标题 — 枫叶视界（巨字） */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-body-cjk font-black text-white tracking-[-0.04em] leading-[1] mb-6 text-[2.75rem] sm:text-[3.75rem] lg:text-[5rem]"
        >
          枫叶视界
        </motion.h1>

        {/* 枫叶红分隔线 */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-20 lg:w-24 h-0.5 bg-maple-red mx-auto mb-8"
        />

        {/* 副标题 — 让中国品牌被世界看见 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="font-body-cjk font-light text-white/85 text-2xl lg:text-4xl tracking-[0.15em] mb-10"
        >
          让中国品牌被世界看见
        </motion.h2>

        {/* 描述段落 */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-body-mobile lg:text-xl text-white/50 max-w-[600px] mx-auto mb-12 leading-relaxed"
        >
          专注海外跨境视频制作，以 AI 驱动的视觉方案，
          <br className="hidden lg:block" />
          助力中国品牌在全球化浪潮中精准表达、高效转化。
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-maple-red hover:bg-maple-red-light text-white font-display font-semibold text-sm tracking-[0.06em] uppercase px-8 py-4 min-h-[52px] min-w-[200px] justify-center transition-all duration-300"
          >
            <span>合作咨询</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-3 border border-white/20 hover:border-white/50 text-white/70 hover:text-white font-display font-medium text-sm tracking-[0.06em] uppercase px-8 py-4 min-h-[52px] min-w-[200px] justify-center transition-all duration-300"
          >
            了解服务
          </a>
        </motion.div>
      </div>

      {/* 底部滚动提示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/30"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
