import {
  BarChart3,
  FileText,
  LineChart,
  TrendingUp,
} from 'lucide-react'

const highlights = [
  {
    icon: TrendingUp,
    title: 'Economic Research',
    description:
      'Macro and micro economic analysis, policy evaluation, and forecasting backed by rigorous quantitative methods.',
  },
  {
    icon: BarChart3,
    title: 'Statistical Analysis',
    description:
      'Hypothesis testing, regression modeling, and inferential statistics to uncover patterns hidden in raw data.',
  },
  {
    icon: LineChart,
    title: 'Data Visualization',
    description:
      'Clear, compelling charts and dashboards that turn complex datasets into actionable insight for decision-makers.',
  },
  {
    icon: FileText,
    title: 'Research & Reporting',
    description:
      'End-to-end research design, data collection, and publication-ready reports tailored to stakeholders.',
  },
]

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

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="What I Do"
          title="Professional Highlights"
          description="Four pillars that define my practice — grounded in rigor, clarity, and real-world impact."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-green-50 text-green-800 flex items-center justify-center group-hover:bg-green-800 group-hover:text-white transition-colors duration-300">
                <Icon className="w-5.5 h-5.5" strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
