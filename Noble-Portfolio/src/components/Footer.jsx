import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa"

const socialLinks = [
  { icon: FaFacebookF, href: 'https://www.facebook.com/jozzjospert.muekhe', label: 'Facebook' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/josphat-mueke/', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/josphat_musila/', label: 'Instagram' },
  { icon: FaWhatsapp, href: 'https://wa.me/254798789164', label: 'WhatsApp' },
]

const quickLinks = ['Home', 'About', 'Skills', 'Projects']

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <h3 className="text-xl font-bold text-white">Josphat Mueke</h3>
            <p className="mt-1 text-sm text-green-300">
              Economist &amp; Statistician
            </p>
          </div>

          <div className="md:justify-self-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Connect
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-gray-300 flex items-center justify-center hover:bg-green-700 hover:text-white hover:border-green-600 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} Josphat. All rights reserved.
          </p>
          <p className="mt-1 text-sm text-green-300">
            Developed by Oliver Mueke - 0708321912.
          </p>
        </div>
      </div>
    </footer>
  )
}