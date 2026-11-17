import { Award, BookOpen, Briefcase, FileText } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 45, suffix: '+', label: 'Research Projects', icon: BookOpen },
  { value: 120, suffix: '+', label: 'Analytical Reports', icon: FileText },
  { value: 25, suffix: '+', label: 'Skills & Tools', icon: Award },
  { value: 8, suffix: '', label: 'Areas of Expertise', icon: Briefcase },
]

function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.2, ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}

function AnimatedCounter({ value, suffix = '', inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={`max-w-2xl ${alignCls} mb-14`}>
      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-green-700 bg-green-50 border border-green-100 px-3 py-1 rounded-full">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-gray-600 leading-relaxed">{description}</p>
      )}
    </div>
  )
}

export default function Skills() {
  const statsRef = useInView()

  return (
    <>
      <section id="skills" className="py-24 bg-[#F0FDF4]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Toolkit"
            title="Skills & Expertise"
            description="A blend of quantitative methods, statistical software, and communication skills."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Economic Analysis',
                items: ['Macroeconomics', 'Microeconomics', 'Policy Evaluation', 'Econometrics'],
              },
              {
                title: 'Statistical Methods',
                items: ['Regression Modeling', 'Hypothesis Testing', 'Time Series', 'Survey Design'],
              },
              {
                title: 'Data & Tools',
                items: ['R / Python', 'Stata / SPSS', 'Excel & Power BI', 'Data Visualization'],
              },
            ].map(({ title, items }) => (
              <div
                key={title}
                className="p-7 rounded-2xl bg-white border border-green-100 shadow-sm hover:shadow-lg hover:shadow-green-900/5 transition-all duration-300"
              >
                <h3 className="text-base font-semibold text-green-800 uppercase tracking-wide">
                  {title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-800 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#BBF7D0_1px,transparent_1px)] [background-size:24px_24px]"
        />
        <div ref={statsRef.ref} className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, suffix, label, icon: Icon }) => (
              <div
                key={label}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="w-10 h-10 mx-auto rounded-lg bg-white/10 text-green-200 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="mt-4 text-3xl sm:text-4xl font-bold text-white">
                  <AnimatedCounter value={value} suffix={suffix} inView={statsRef.inView} />
                </p>
                <p className="mt-1 text-xs sm:text-sm font-medium tracking-wide uppercase text-green-200">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
