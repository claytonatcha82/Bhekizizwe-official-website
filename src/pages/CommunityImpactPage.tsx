import React from 'react';
import { PageHero } from '@/components/sections/PageHero';
import { motion } from 'framer-motion';
import { GraduationCap, Home, Heart, Star, Users, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export function CommunityImpactPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const graduates = [
    {
      name: 'Buyiswa Molefe',
      qualification: 'Human Resource Management',
      institution: 'MANCOSA',
      image: '/assets/community-impact/students-with-degrees/buyiswa-molefe.jpg',
      story: 'A proud achievement supported by the Bhekizizwe Projects & Civils–MANCOSA partnership. Buyiswa exemplifies the transformational power of investing in people — turning opportunity into excellence.',
    },
    {
      name: 'Jamie Stuart',
      qualification: 'Local Governance and Administration',
      institution: 'MANCOSA',
      image: '/assets/community-impact/students-with-degrees/jamie-stuart.jpg',
      story: 'Jamie\'s qualification in Local Governance and Administration positions her to make a meaningful contribution to public administration and community development across South Africa.',
    },
  ];

  const impactStats = [
    { icon: <GraduationCap />, val: '10+', label: 'Bursaries Awarded' },
    { icon: <Home />, val: '50+', label: 'Housing Units Built' },
    { icon: <Users />, val: '100+', label: 'Local Jobs Created' },
    { icon: <Heart />, val: '1', label: 'Mandela Day Handover' },
  ];

  const timeline = [
    { year: '2022', event: 'Company Founded', desc: 'Bhekizizwe Projects & Civils established with a commitment to community-first construction.' },
    { year: '2023', event: 'First Rural Housing', desc: 'Delivered rural housing projects in KwaZulu-Natal, providing families with dignified homes.' },
    { year: '2024', event: 'MANCOSA Partnership', desc: 'Formalised strategic educational partnership with MANCOSA, investing in graduate development.' },
    { year: '2024', event: 'First Graduates', desc: 'Celebrated our supported graduates completing their qualifications through the MANCOSA partnership.' },
    { year: '2025', event: 'Mandela Day Handover', desc: 'Successful housing handover ceremony celebrating community impact and Mandela Day legacy.' },
    { year: '2026', event: 'Expanding Across Africa', desc: 'International projects in Namibia mark the beginning of our continental growth journey.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Community Impact"
        subtitle="Building structures is our profession. Building people and communities is our purpose."
      />

      {/* Impact Statistics */}
      <section className="py-16 bg-[#1B5E20]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {impactStats.map((stat, idx) => (
              <motion.div key={idx} variants={fadeUp} className="text-center">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-[#F9A825] mx-auto mb-4">
                  {React.cloneElement(stat.icon as React.ReactElement<{ className?: string }>, { className: 'w-7 h-7' })}
                </div>
                <p className="font-display font-extrabold text-4xl text-[#F9A825] mb-1">{stat.val}</p>
                <p className="text-white/75 text-sm font-semibold uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-white/70 text-sm text-center max-w-2xl mx-auto mt-10 leading-relaxed"
          >
            We are proud to have awarded more than 10 bursaries, investing in the education and future of young South Africans as part of our commitment to building people as well as infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Students With Degrees */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <div className="section-label mb-2">Education & Achievement</div>
            <div className="gold-divider mx-auto"></div>
            <h2 className="heading-md text-gray-900">Students With Degrees</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
              Through our partnership with MANCOSA, Bhekizizwe Projects &amp; Civils proudly supports individuals from our community and team in achieving their academic qualifications and building better futures.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto"
          >
            {graduates.map((grad, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden card-hover"
              >
                {/* Graduate photo */}
                <div className="h-80 bg-gray-100 overflow-hidden relative">
                  <img
                    src={grad.image}
                    alt={grad.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="320"><rect fill="%23e5e7eb" width="400" height="320"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-size="14">Photo Coming Soon</text></svg>';
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1B5E20]/90 to-transparent p-6">
                    <div className="flex items-center gap-2 text-[#F9A825] mb-1">
                      <GraduationCap className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">{grad.institution}</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white">{grad.name}</h3>
                    <p className="text-white/85 text-sm font-semibold">{grad.qualification}</p>
                  </div>
                </div>

                {/* Story */}
                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[#F9A825] shrink-0 mt-0.5" />
                    <p className="text-gray-600 leading-relaxed text-sm">{grad.story}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/careers" className="btn-outline-green inline-flex items-center gap-2">
              View Our Education Partnerships <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mandela Day Handover */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <div className="section-label mb-2">Mandela Day</div>
            <div className="gold-divider mx-auto"></div>
            <h2 className="heading-md text-gray-900">Mandela Day Housing Handover</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
              In the spirit of Nelson Mandela's legacy of service and community upliftment, Bhekizizwe Projects &amp; Civils was honoured to participate in a successful Mandela Day housing handover ceremony — delivering the gift of a home to a deserving family.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#F9A825]/20 rounded-xl z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#1B5E20]/10 rounded-xl z-0"></div>
              <img
                src="/assets/community-impact/mandela-day-handover/handover.jpg"
                alt="Successful Mandela Day Housing Handover"
                className="relative z-10 rounded-2xl shadow-xl w-full object-cover max-h-[450px]"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450"><rect fill="%23e5e7eb" width="600" height="450"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-size="16">Image Coming Soon</text></svg>';
                }}
              />
            </motion.div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display font-bold text-3xl text-gray-900 mb-6">
                A Home. A Community. A Legacy.
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Mandela Day is a global call to action for people to recognise their individual power to make an imprint and change the world around them. For Bhekizizwe Projects &amp; Civils, this means using our construction expertise to make a tangible, lasting difference.
                </p>
                <p>
                  The housing handover was a moment of profound community celebration — bringing together families, local leaders and our team to mark the completion of quality housing that will provide safety, dignity and shelter for years to come.
                </p>
                <p>
                  Every home we build is not just a structure — it is a foundation for a family, a milestone for a community, and a legacy that reflects our deepest values.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: 'Event Type', val: 'Housing Handover' },
                  { label: 'Occasion', val: 'Mandela Day' },
                  { label: 'Location', val: 'KwaZulu-Natal' },
                  { label: 'Impact', val: 'Community Upliftment' },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg border-l-4 border-[#1B5E20]">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">{item.label}</p>
                    <p className="font-semibold text-gray-800 text-sm">{item.val}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <div className="section-label mb-2">Our Journey</div>
            <div className="gold-divider mx-auto"></div>
            <h2 className="heading-md text-gray-900">Impact Timeline</h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-0.5 hidden sm:block"></div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-10"
            >
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className={`flex flex-col sm:flex-row gap-6 items-start ${idx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${idx % 2 === 0 ? 'sm:text-right sm:pr-10' : 'sm:text-left sm:pl-10'}`}>
                    <div className={`bg-white border border-gray-100 shadow-sm rounded-xl p-6 card-hover inline-block w-full`}>
                      <span className="inline-block bg-[#F9A825] text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-3">{item.year}</span>
                      <h4 className="font-display font-bold text-lg text-gray-900 mb-2">{item.event}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="hidden sm:flex w-4 h-4 rounded-full bg-[#1B5E20] border-4 border-white shadow-md shrink-0 mt-8 z-10"></div>

                  {/* Spacer */}
                  <div className="flex-1 hidden sm:block"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1B5E20] text-white text-center">
        <div className="container mx-auto px-4">
          <Heart className="w-12 h-12 text-[#F9A825] mx-auto mb-6" />
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Join Us in Building a Better South Africa</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Whether as a client, partner, investor or community member — together we can create lasting impact.
          </p>
          <Link href="/contact" className="btn-gold inline-block">
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  );
}
