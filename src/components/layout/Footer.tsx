import React from 'react';
import { Link } from 'wouter';
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "@/assets/Bhekizizwe_logo_1783348910396.jpg";

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Project Portfolio', href: '/projects' },
  { name: 'Community Impact', href: '/community-impact' },
  { name: 'HSE', href: '/hse' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Careers & Partnerships', href: '/careers' },
];

export function Footer() {
  return (
    <footer className="bg-[#1B5E20] pt-20 pb-10 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6 bg-white p-2 rounded">
              <img src={logo} alt="Bhekizizwe Projects and Civils" className="h-[60px] w-auto object-contain" />
            </Link>
            <p className="text-[#F9A825] font-display font-bold text-lg mb-6 leading-snug">
              "Take Care of The Nation by Providing Excellence."
            </p>
            <p className="text-white/80 mb-6 font-light leading-relaxed">
              Delivering premium construction, civil engineering and infrastructure solutions across South Africa.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-[#F9A825] hover:bg-white/20 transition-all">
                <FaFacebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-[#F9A825] hover:bg-white/20 transition-all">
                <FaInstagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-[#F9A825] hover:bg-white/20 transition-all">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/80 hover:text-[#F9A825] transition-colors flex items-center gap-2 text-sm uppercase tracking-wider font-semibold">
                    <span className="w-2 h-[2px] bg-[#F9A825]"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {[
                'Residential Construction',
                'Commercial Construction',
                'Civil Engineering',
                'Project Management',
                'Maintenance',
                'Renovations',
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-white/80 hover:text-[#F9A825] transition-colors flex items-center gap-2 text-sm uppercase tracking-wider font-semibold">
                    <span className="w-2 h-[2px] bg-[#F9A825]"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-white/90">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#F9A825]">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider font-bold text-white mb-1">Call Us</p>
                  <a href="tel:0606682342" className="hover:text-[#F9A825] transition-colors">060 668 2342</a>
                </div>
              </li>
              <li className="flex items-start gap-4 text-white/90">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#F9A825]">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider font-bold text-white mb-1">Email Us</p>
                  <a href="mailto:bhekizizweinfo@gmail.com" className="hover:text-[#F9A825] transition-colors break-all">bhekizizweinfo@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4 text-white/90">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#F9A825]">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider font-bold text-white mb-1">Location</p>
                  <p>KwaZulu-Natal, South Africa</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#F9A825]/30 mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Bhekizizwe Projects and Civils (Pty) Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <a href="mailto:bhekizizweinfo@gmail.com" className="hover:text-[#F9A825] transition-colors">bhekizizweinfo@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
