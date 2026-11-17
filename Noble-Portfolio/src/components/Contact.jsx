
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

// Edit these in one place.
const EMAIL = "Josphatmueke22@gmail.com";
const PHONE_DISPLAY = "+254 798 789 164";
const LOCATION = "Nairobi, Kenya";

// Contact details
const details = [
  {
    icon: MapPin,
    label: "Location",
    value: LOCATION,
    href: null,
  },
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: PHONE_DISPLAY,
    href: "tel:+254798789164",
  },
];

// Social media links
const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/jozzjospert.muekhe",
    label: "Facebook",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/josphat-mueke/",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/josphat_musila/",
    label: "Instagram",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/254798789164",
    label: "WhatsApp",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#F0FDF4]">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Section heading */}
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-green-700 bg-white border border-green-100 px-3 py-1 rounded-full">
          Let's Collaborate
        </span>

        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
          Let's Work Together
        </h2>

        <p className="mt-5 text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Currently available for freelance work and full-time opportunities.
        </p>

        {/* Contact details */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {details.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-800">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </span>

                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-gray-900">
                    {label}
                  </span>

                  <span className="block text-sm text-gray-600 break-words">
                    {value}
                  </span>
                </span>
              </>
            );

            const base =
              "flex items-center gap-4 p-5 bg-white border border-green-100 rounded-2xl";

            return href ? (
              <a
                key={label}
                href={href}
                className={`${base} hover:border-green-400 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600`}
              >
                {content}
              </a>
            ) : (
              <div key={label} className={base}>
                {content}
              </div>
            );
          })}
        </div>

        {/* Action buttons */}
        <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">

          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-green-800 text-white text-sm font-semibold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg shadow-green-800/20 hover:shadow-green-800/30 hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            Get In Touch
          </a>

          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-green-800 text-sm font-semibold rounded-xl border border-green-200 hover:border-green-400 transition-all duration-300"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </a>

        </div>

        {/* Social media links */}
        <div className="mt-12">
          <h3 className="text-sm font-semibold text-gray-900">
            Connect With Me
          </h3>

          <ul className="mt-4 flex justify-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-green-100 text-green-800 hover:bg-green-800 hover:text-white hover:border-green-800 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
