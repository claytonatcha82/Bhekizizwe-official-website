import React from 'react';
import { PageHero } from '@/components/sections/PageHero';
import { motion } from 'framer-motion';
import {
  GraduationCap, Users, BookOpen, TrendingUp,
  Handshake, Globe, FlaskConical, Heart, ArrowRight
} from 'lucide-react';
import { Link } from 'wouter';

export function CareersPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const devPillars = [
    {
      icon: <GraduationCap />,
      title: 'Graduate Development',
      desc: 'We actively invest in the academic and professional growth of graduates, providing structured pathways from study to industry. Our graduates gain real-world experience alongside seasoned professionals.',
    },
    {
      icon: <Users />,
      title: 'Mentorship',
      desc: 'Every team member benefits from direct mentorship from senior leaders including Director Clinton Stuart. We believe that knowledge shared is knowledge multiplied across the industry.',
    },
    {
      icon: <BookOpen />,
      title: 'Training & Skills Development',
      desc: 'Ongoing on-site and off-site training programmes equip our people with the technical, safety and leadership skills needed to grow their careers in construction and civil engineering.',
    },
    {
      icon: <TrendingUp />,
      title: 'Career Growth',
      desc: 'From artisan to engineer to project manager — Bhekizizwe Projects &amp; Civils provides clear growth pathways for those with the drive and dedication to advance within the company and the broader industry.',
    },
  ];

  const mancosaPartnership = [
    { icon: <Handshake />, title: 'Business Partnership', desc: 'A formal strategic alliance supporting business development and corporate education.' },
    { icon: <GraduationCap />, title: 'Student Development', desc: 'Providing Bhekizizwe Projects & Civils employees and community members access to quality higher education.' },
    { icon: <Globe />, title: 'Graduate Opportunities', desc: 'Creating employment pathways for MANCOSA graduates within Bhekizizwe Projects & Civils and its network.' },
    { icon: <FlaskConical />, title: 'Research', desc: 'Collaborative research initiatives linking academic insight with real-world construction challenges.' },
    { icon: <Heart />, title: 'Community Development', desc: 'Joint community upliftment projects that combine educational and social impact.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Careers & Partnerships"
        subtitle="Investing in people, knowledge and long-term relationships that build a stronger South Africa."
      />

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="section-label mb-2">Our Culture</div>
              <div className="gold-divider"></div>
              <h2 className="heading-md text-gray-900 mb-6">More Than Just a Job</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                At Bhekizizwe Projects and Civils, we don't just build structures — we build careers, skills and futures. We are committed to nurturing talent, sharing knowledge and creating opportunities that extend far beyond the construction site.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                As a Level 1 B-BBEE company, we champion diversity, continuous learning, and internal growth. Our team is our greatest asset, and we invest in every person who joins our family.
              </p>
              <Link href="/contact" className="btn-green inline-flex items-center gap-2 group">
                Join Our Team
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { emoji: '🎓', label: 'Graduate Development' },
                { emoji: '🤝', label: 'Mentorship' },
                { emoji: '📈', label: 'Career Growth' },
                { emoji: '🏗️', label: 'Skills Transfer' },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className={`bg-[#F5F5F5] p-6 rounded-xl border border-gray-100 text-center card-hover ${i % 2 !== 0 ? 'mt-6' : ''}`}>
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h4 className="font-bold text-gray-900 text-sm">{item.label}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <div className="section-label mb-2">Professional Development</div>
            <div className="gold-divider mx-auto"></div>
            <h2 className="heading-md text-gray-900">Investing in Our People</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
              We believe that building great people is just as important as building great structures. Our development programmes create leaders, specialists and community builders.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {devPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 card-hover flex gap-6 items-start"
              >
                <div className="w-14 h-14 rounded-full bg-[#1B5E20]/10 flex items-center justify-center text-[#1B5E20] shrink-0">
                  {React.cloneElement(pillar.icon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-2">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MANCOSA Partnership */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <div className="section-label mb-2">Strategic Partnership</div>
            <div className="gold-divider mx-auto"></div>
            <h2 className="heading-md text-gray-900">MANCOSA Partnership</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
              Bhekizizwe Projects &amp; Civils is proud to partner with the Management College of Southern Africa (MANCOSA) — one of South Africa's premier private higher education institutions.
            </p>
          </motion.div>

          {/* MANCOSA Logo + description */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex items-center justify-center max-w-md w-full">
                <img
                  src="/assets/partners/mancosa/mancosa.png"
                  alt="MANCOSA - Management College of Southern Africa"
                  className="w-full max-w-[320px] h-auto object-contain"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">Building Futures Through Education</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our partnership with MANCOSA reflects our unwavering commitment to education, skills development and community upliftment. Together, we are creating academic and professional opportunities for the next generation of South African business and construction leaders.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Through this alliance, Bhekizizwe Projects &amp; Civils employees, community members and graduates gain access to world-class higher education, professional development pathways and career opportunities — reinforcing our Level 1 B-BBEE commitment to meaningful transformation.
              </p>
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2 group">
                Partner With Us
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Partnership pillars */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
          >
            {mancosaPartnership.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-[#F5F5F5] p-6 rounded-xl border border-gray-100 card-hover text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#1B5E20]/10 flex items-center justify-center text-[#1B5E20] mb-4">
                  {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5' })}
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-2">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Application CTA */}
      <section className="py-16 bg-[#1B5E20] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl mb-4">Interested in Joining Our Team?</h2>
          <p className="text-white/80 text-lg mb-2">We welcome passionate individuals who share our values.</p>
          <p className="text-white/70 mb-8">Send your CV and a brief introduction to:</p>
          <a href="mailto:bhekizizweinfo@gmail.com" className="font-bold text-[#F9A825] text-xl hover:underline block mb-6">
            bhekizizweinfo@gmail.com
          </a>
          <Link href="/contact" className="btn-gold inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
