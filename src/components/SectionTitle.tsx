import { motion } from 'framer-motion'

interface SectionTitleProps {
  overline: string
  title: string
  subtitle?: string
  light?: boolean
}

export default function SectionTitle({ overline, title, subtitle, light = false }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
    >
      <span className="font-mono text-xs tracking-[0.2em] uppercase text-maple-red-light">
        {overline}
      </span>
      <h2 className={`font-display font-bold text-h2-mobile lg:text-h2 mt-4 mb-6 tracking-[-0.02em] leading-[1.15] ${
        light ? 'text-white' : 'text-warm-white'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-body-mobile lg:text-body leading-relaxed ${
          light ? 'text-white/50' : 'text-gray-soft'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
