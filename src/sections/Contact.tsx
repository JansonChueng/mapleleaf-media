import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../components/Logo'

export default function Contact() {
  const [showQR, setShowQR] = useState(false)
  return (
    <>
      {/* CTA 区 */}
      <section id="contact" className="relative py-24 lg:py-36 overflow-hidden flex justify-center">
        {/* 枫叶红渐变背景 */}
        <div className="absolute inset-0 bg-charcoal" />
        <div
          className="absolute bottom-0 left-0 right-0 h-1/2"
          style={{
            background: 'linear-gradient(to top, rgba(202,30,28,0.12) 0%, transparent 100%)',
          }}
        />

        <div className="relative z-20 w-full max-w-4xl px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            {/* Logo */}
            <div className="flex justify-center mb-10">
              <Logo layout="vertical" size="md" />
            </div>

            <h2 className="font-display font-bold text-h2-mobile lg:text-h2 text-white tracking-[-0.02em] leading-[1.15] mb-6">
              让世界看见你的品牌
            </h2>
            <p className="text-white/40 text-body-mobile lg:text-body max-w-xl mx-auto mb-12 leading-relaxed">
              无论你是准备出海的品牌方，还是正在寻找专业视觉团队的合作伙伴，
              我们都期待与你一起，用视觉语言打开全球市场。
            </p>

            {/* 联系按钮 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:Dickson1015@263.com"
                className="group inline-flex items-center gap-3 bg-maple-red hover:bg-maple-red-light text-white font-display font-semibold text-sm tracking-[0.06em] uppercase px-10 py-4 min-h-[54px] min-w-[220px] justify-center transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                邮件咨询
              </a>
              <button
                onClick={() => setShowQR(true)}
                className="group inline-flex items-center gap-3 border border-white/20 hover:border-white/50 text-white/70 hover:text-white font-display font-medium text-sm tracking-[0.06em] uppercase px-10 py-4 min-h-[54px] min-w-[220px] justify-center transition-all duration-300 cursor-pointer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                微信咨询
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 微信二维码弹窗 */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            key="wechat-qr-modal"
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setShowQR(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-charcoal-card border border-white/[0.06] px-10 py-10 text-center max-w-[320px] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/wechat-qr.png"
                alt="业务微信二维码"
                className="w-56 h-56 mx-auto mb-6"
              />
              <p className="font-body-cjk text-white/80 text-base mb-1">
                微信扫码添加
              </p>
              <p className="font-mono text-[11px] text-white/30 tracking-[0.06em]">
                业务咨询 · 合作洽谈
              </p>
              <button
                onClick={() => setShowQR(false)}
                className="mt-6 font-mono text-[10px] text-white/25 hover:text-white/50 tracking-[0.1em] uppercase transition-colors"
              >
                关闭
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
