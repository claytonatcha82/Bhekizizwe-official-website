import React from 'react';
import { PageHero } from '@/components/sections/PageHero';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';

export function CertificationsPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const certs = [
    {
      title: "Level 1 B-BBEE",
      issuer: "SanAS Accredited Agency",
      desc: "Recognized as a Level 1 Contributor to Broad-Based Black Economic Empowerment, demonstrating our commitment to transformation and inclusive growth in South Africa.",
      icon: <Award className="w-12 h-12 text-[#F9A825]" />
    },
    {
      title: "CIDB Registered",
      issuer: "Construction Industry Development Board",
      desc: "Registered with the CIDB, qualifying us for public sector construction contracts and validating our technical capability and financial stability.",
      icon: <ShieldCheck className="w-12 h-12 text-[#1B5E20]" />
    },
    {
      title: "NHBRC Registered",
      issuer: "National Home Builders Registration Council",
      desc: "Fully registered home builder, assuring our clients of quality residential construction that complies with national building regulations and standards.",
      icon: <CheckCircle className="w-12 h-12 text-[#2E7D32]" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Certifications" 
        subtitle="Accredited, compliant, and recognized by South Africa's leading industry regulatory bodies."
      />

      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="section-label mb-2">Compliance</div>
            <div className="gold-divider mx-auto"></div>
            <h2 className="heading-md text-gray-900">Industry Accreditations</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certs.map((cert, idx) => (
              <motion.div 
                key={idx} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={fadeUp} 
                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden card-hover"
              >
                <div className="h-32 bg-[#1B5E20]/5 flex items-center justify-center border-b border-gray-100 relative">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#F9A825]/10 rounded-bl-full"></div>
                  {cert.icon}
                </div>
                <div className="p-8">
                  <div className="text-xs font-bold text-[#F9A825] uppercase tracking-widest mb-1">{cert.issuer}</div>
                  <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">{cert.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{cert.desc}</p>
                  
                  <div className="border border-dashed border-gray-300 bg-gray-50 rounded p-4 text-center">
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Certificate Document</p>
                    <p className="text-sm text-gray-900 font-medium mt-1">Available upon request</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">Need copies of our certification documents for a tender or project proposal?</p>
            <Link href="/contact" className="btn-green">
              Request Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
