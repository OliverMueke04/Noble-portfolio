
import {
  ArrowUpRight,
  Globe,
  PieChart,
  Search,
  TrendingUp,
  FileText,
  Download,
} from 'lucide-react'

// Import actual research PDF files
import paper1 from '../assets/documents/Research/paper1.docx'
import paper2 from '../assets/documents/Research/paper2.docx'
import paper3 from '../assets/documents/Research/paper3.docx'

const projects = [
  {
    icon: TrendingUp,
    title: 'Economic Data Analysis',
    description:
      'A longitudinal study of regional GDP growth, inflation, and unemployment trends using time-series econometrics.',
    tag: 'Econometrics',
    href: '#projects',
  },
  {
    icon: Search,
    title: 'Statistical Research',
    description:
      'Survey design and multilevel regression analysis exploring household consumption patterns across regions.',
    tag: 'Research',
    href: '#projects',
  },
  {
    icon: PieChart,
    title: 'Data Visualization Dashboard',
    description:
      'Interactive dashboards built to track key economic indicators and communicate findings to non-technical audiences.',
    tag: 'Visualization',
    href: '#projects',
  },
  {
    icon: Globe,
    title: 'Market & Economic Research',
    description:
      'Comparative market analysis and policy briefs designed to inform strategic decisions at the organizational level.',
    tag: 'Strategy',
    href: '#projects',
  },
]

const researchPapers = [
  {
    title: 'Research Paper One',
    description:
      'Exploring Relationship Between Corporate Social Responsibility(CSR) and Financial Performance.',
    category: 'Business, Management, and Corporate Finance.',
    date: '2026',
    file: paper1,
  },
  {
    title: 'Research Paper Two',
    description:
      'Effects Of Human Resource Practises On Employee Retention In Guaranty Trust Bank(GTB) In Nigeria.',
    category: 'Human Resource Management (HRM) and Business Administration.',
    date: '2026',
    file: paper2,
  },
  {
    title: 'Research Paper Three',
    description:
      'Optimizing Last-Mile Logistics in E-Commerce Deliveries To Reduce Costs In Nigeria.',
    category: 'Supply Chain Management, Operations Management, and Transportation.',
    date: '2026',
    file: paper3,
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
        <p className="mt-4 text-gray-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* FEATURED PROJECTS */}

        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          description="A snapshot of research, analysis, and visualization work across economics and statistics."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map(({ icon: Icon, title, description, tag, href }) => (
            <article
              key={title}
              className="group relative p-7 rounded-2xl bg-white border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-green-800 text-white flex items-center justify-center shadow-lg shadow-green-800/25">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>

                <span className="text-[10px] font-semibold tracking-wider uppercase text-green-700 bg-green-50 border border-green-100 px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                {title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-1">
                {description}
              </p>

              <a
                href={href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green-800 group-hover:text-green-600 transition-colors"
              >
                Explore project
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>

        {/* RESEARCH PAPERS */}

        <div id="research" className="mt-28">
          <SectionHeading
            eyebrow="Academic Work"
            title="Research & Publications"
            description="Explore academic papers, statistical studies and research contributions in economics and related fields."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {researchPapers.map((paper) => (
              <article
                key={paper.title}
                className="p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-200 transition-all flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-green-50 text-green-800 flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>

                  <span className="text-xs text-gray-500">
                    {paper.date}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-gray-900">
                  {paper.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed flex-1">
                  {paper.description}
                </p>

                <span className="mt-4 text-xs font-semibold text-green-700">
                  {paper.category}
                </span>

               <div className="mt-6 flex flex-wrap gap-4">
             {/* View only */}
               <a
                href={paper.file}
                target="_blank"
                rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-sm font-semibold text-green-800 hover:text-green-600"
                >
                 Read Paper
                <ArrowUpRight className="w-4 h-4" />
               </a>

         {/* Download */}
           <a
           href={paper.file}
           download
           className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-green-700"
           >
           Download PDF
           <Download className="w-4 h-4" />
           </a>
         </div>
              
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
