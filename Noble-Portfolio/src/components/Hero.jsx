import { Activity, ArrowRight, TrendingUp } from 'lucide-react'
import profilePhoto from '../assets/noble.jpeg'
import cv from '../assets/documents/cv.pdf'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 bg-gradient-to-b from-green-50/60 via-white to-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#166534_1px,transparent_1px),linear-gradient(90deg,#166534_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-green-100 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
              <span className="text-xs font-medium text-green-800">
                Available for research & analysis
              </span>
            </div>

            <p className="mt-6 text-lg text-green-700 font-medium">
              Hello, I'm Josphat Mueke.
            </p>

            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-gray-900">
              Economist &amp;{' '}
              <span className="relative inline-block text-green-700">
                Statistician
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9C60 3 140 2 298 6"
                    stroke="#15803D"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              A data-driven professional with experience in banking, research, data analysis, and monitoring and
              evaluation. Proficient in SPSS, STATA, R, and Excel, and passionate about
              using data science and AI to solve complex business and socio-economic
              problems. Seeking an impact-oriented role where I can grow my analytical
              skills.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {['Economics', 'Statistics', 'Data Analysis'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold tracking-wide uppercase text-green-800 bg-green-50 border border-green-100 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-green-800 text-white text-sm font-semibold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg shadow-green-800/20 hover:shadow-green-800/30 hover:-translate-y-0.5"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-green-800 text-sm font-semibold rounded-xl border border-green-200 hover:border-green-400 hover:bg-green-50 transition-all duration-300"
              >
                Get In Touch
              </a>
              <a
                href={cv}
                download
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-green-800 text-sm font-semibold rounded-xl border border-green-200 hover:border-green-400 hover:bg-green-50 transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -left-6 top-8 z-20 bg-white rounded-2xl shadow-xl shadow-green-900/10 border border-green-50 p-3 pr-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-green-50 text-green-700 flex items-center justify-center">
                  <TrendingUp className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500">
                    GDP Growth
                  </p>
                  <p className="text-sm font-bold text-green-800">+4.2%</p>
                </div>
              </div>

              <div className="absolute -right-4 bottom-16 z-20 bg-white rounded-2xl shadow-xl shadow-green-900/10 border border-green-50 p-3 pr-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-green-50 text-green-700 flex items-center justify-center">
                  <Activity className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500">
                    Confidence
                  </p>
                  <p className="text-sm font-bold text-green-800">99.5%</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-green-800/10" />
                <div className="absolute inset-0 -translate-x-2 -translate-y-2 rounded-[2rem] border-2 border-green-200" />
                <div className="relative rounded-[2rem] overflow-hidden bg-green-50 aspect-[4/5] shadow-xl shadow-green-900/15">
                  <img
                    src={profilePhoto}
                    alt="Portrait of Josphat Mueke"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 left-4 z-20 bg-white rounded-2xl shadow-xl shadow-green-900/10 border border-green-50 p-3 w-40">
                <div className="flex items-end gap-1.5 h-12">
                  {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-green-200 to-green-600"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <p className="mt-2 text-[10px] uppercase tracking-wider text-gray-500">
                  Quarterly Trend
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
