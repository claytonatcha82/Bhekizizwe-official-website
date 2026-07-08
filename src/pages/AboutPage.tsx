import React from 'react';
import { PageHero } from '@/components/sections/PageHero';
import { motion } from 'framer-motion';
import {
  Eye, Target, Heart, Users, Shield, Award,
  Hammer, Lightbulb, BookOpen, Star, Wrench, TrendingUp, Phone
} from 'lucide-react';
import { Link } from 'wouter';

export function AboutPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const expertiseItems = [
    { icon: <Hammer />, title: 'Construction Expertise', desc: 'Decades of hands-on building experience across all sectors.' },
    { icon: <Wrench />, title: 'Civil Engineering', desc: 'Technical knowledge in infrastructure and civil works.' },
    { icon: <Star />, title: 'Quality Workmanship', desc: 'Commitment to the highest standards on every project.' },
    { icon: <Award />, title: 'Technical Excellence', desc: 'Certified professionals delivering precise engineering solutions.' },
    { icon: <BookOpen />, title: 'Mentorship', desc: 'Passing skills and knowledge to the next generation of builders.' },
    { icon: <Lightbulb />, title: 'Innovation', desc: 'Embracing modern methods to deliver smarter, better outcomes.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="About Us"
        subtitle="100% Black-Owned enterprise leading the construction and civil engineering sector in South Africa."
      />

      {/* WHO WE ARE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}>
              <div className="section-label mb-2">Who We Are</div>
              <div className="gold-divider"></div>
              <h2 className="heading-md text-gray-900 mb-6">A Legacy of Quality and Trust</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in May 2022, Bhekizizwe Projects &amp; Civils (Pty) Ltd is a proudly South African, 100% Black-owned construction and civil engineering company based in KwaZulu-Natal. Since its establishment, the company has built a reputation for delivering reliable, high-quality construction solutions across the residential, commercial, industrial and public sectors.
                </p>
                <p>
                  The company is led by Clinton Stuart, whose passion for construction was developed through years of mentorship under his father and business partner, Mr James Stuart. With more than 60 years of industry experience, Mr Stuart's knowledge, craftsmanship and commitment to excellence continue to guide the company and shape its vision for the future.
                </p>
                <p>
                  Bhekizizwe Projects &amp; Civils is committed to delivering projects with integrity, professionalism, quality and safety while creating sustainable value for clients, employees and communities. Through innovation, skills development and local empowerment, the company strives to become one of South Africa's leading construction and civil engineering firms.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="bg-[#F5F5F5] p-5 rounded-lg border-l-4 border-[#1B5E20]">
                  <p className="font-display font-bold text-2xl text-[#1B5E20]">Level 1</p>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">B-BBEE Status</p>
                </div>
                <div className="bg-[#F5F5F5] p-5 rounded-lg border-l-4 border-[#1B5E20]">
                  <p className="font-display font-bold text-2xl text-[#1B5E20]">100%</p>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Black Owned</p>
                </div>
                <div className="bg-[#F5F5F5] p-5 rounded-lg border-l-4 border-[#F9A825]">
                  <p className="font-display font-bold text-2xl text-[#1B5E20]">2022</p>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Founded</p>
                </div>
                <div className="bg-[#F5F5F5] p-5 rounded-lg border-l-4 border-[#F9A825]">
                  <p className="font-display font-bold text-2xl text-[#1B5E20]">KZN</p>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Based In</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}>
              <div className="bg-[#F5F5F5] p-8 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F9A825]/20 rounded-bl-full"></div>
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-6 relative z-10">Leadership</h3>

                <div className="relative z-10">
                  <div className="mb-5">
                    <h4 className="font-display font-bold text-2xl text-[#1B5E20] mb-1">Clinton Stuart</h4>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-[#F9A825] uppercase tracking-widest">Director</span>
                      <div className="h-px flex-1 bg-[#F9A825]/40"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Driving the strategic vision of Bhekizizwe Projects &amp; Civils with a commitment to uncompromised quality, safety, and community upliftment across all operations. Mentored by his father James Stuart, whose over 60 years of industry experience continue to guide the company's craftsmanship and values.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Clinton leads every project with a hands-on approach, ensuring that the Bhekizizwe standard of excellence is maintained from planning through to completion — whether delivering public infrastructure, private developments, or international contracts.
                  </p>
                  <a href="tel:0606682342" className="inline-flex items-center gap-2 text-[#1B5E20] font-bold text-sm hover:underline">
                    <Phone size={14} />
                    060 668 2342
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 relative z-10">
                  <h4 className="font-display font-bold text-lg text-gray-900 mb-2">James Stuart</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Business Partner &amp; Mentor</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    With over 60 years of industry experience, Mr Stuart's craftsmanship, knowledge and commitment to excellence continue to guide the company and shape its vision.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 60+ YEARS SECTION */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <div className="section-label mb-2">Our Heritage</div>
            <div className="gold-divider mx-auto"></div>
            <h2 className="heading-md text-gray-900">60+ Years of Combined Industry Experience</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
              The knowledge, craftsmanship and commitment that built great structures across South Africa — now guiding the next generation.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {expertiseItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 card-hover group flex gap-5 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-[#1B5E20]/10 flex items-center justify-center text-[#1B5E20] shrink-0 group-hover:bg-[#1B5E20] group-hover:text-white transition-colors duration-300">
                  {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5' })}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Counter row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { val: '60+', label: 'Years Combined Experience' },
              { val: '25+', label: 'Projects Completed' },
              { val: '100%', label: 'Black Owned' },
              { val: 'Level 1', label: 'B-BBEE Certified' },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-[#1B5E20] text-white p-6 rounded-xl text-center shadow-md">
                <p className="font-display font-extrabold text-4xl text-[#F9A825] mb-2">{s.val}</p>
                <p className="text-white/80 text-sm font-semibold uppercase tracking-wide">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OUR BRAND STORY */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Brand Story Illustration */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="relative"
              >
                <div className="absolute inset-0 bg-[#1B5E20]/5 rounded-2xl blur-3xl scale-110"></div>
                <img
                  src="/assets/brand-story/brand-story-logo.jpg"
                  alt="Bhekizizwe Brand Story Illustration"
                  className="relative z-10 rounded-2xl shadow-xl max-w-sm w-full object-contain border border-gray-100"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>

            {/* Right: Story Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
            >
              <div className="section-label mb-2">Our Brand Story</div>
              <div className="gold-divider"></div>
              <h2 className="heading-md text-gray-900 mb-6">
                Building Nations.<br />Empowering Communities.
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-[#1B5E20]">BHEKIZIZWE</strong> is an isiZulu name meaning <em>"to take care of the nations."</em> This is more than our name — it is our purpose and the foundation of everything we do.
                </p>
                <p>
                  As a construction and civil engineering company, we see ourselves as Builders of the Nation. Every project we undertake is an opportunity to strengthen communities, create opportunities and leave a lasting legacy through quality infrastructure and meaningful social impact.
                </p>
                <p>
                  At the heart of our brand illustration are four silhouettes, representing the diverse men and women who form our workforce and the communities we proudly serve. They symbolise unity, collaboration and the shared responsibility of building a stronger future together.
                </p>
                <p>
                  The builder's trowel reflects our humble beginnings. It is one of the first tools every builder learns to use — a reminder that every great achievement starts with strong foundations, skilled hands and an unwavering commitment to quality.
                </p>
                <p>
                  Encircling the illustration are the colours of the South African flag, representing our heritage, diversity and commitment to transformation.
                </p>
                <p className="text-[#1B5E20] font-semibold italic border-l-4 border-[#F9A825] pl-4">
                  "Whether delivering rural housing projects, investing in education, celebrating Mandela Day community handovers or maintaining our Level 1 B-BBEE status, our purpose remains the same: To uplift communities. Create opportunities. Build nations."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Eye />, title: 'Our Vision',
                desc: 'To be recognised as a premier provider of construction and civil engineering services, known for quality, integrity and exceptional value throughout South Africa and beyond.'
              },
              {
                icon: <Target />, title: 'Our Mission',
                desc: 'To deliver superior construction solutions while fostering sustainable development, maintaining rigorous safety standards, and upliftng local communities through every project we undertake.'
              },
              {
                icon: <Heart />, title: 'Core Values',
                desc: 'Integrity in all dealings, uncompromised quality, strict safety compliance, continuous innovation, community empowerment, and deep respect for our clients and partners.'
              }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#1B5E20] card-hover text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#1B5E20]/10 flex items-center justify-center text-[#1B5E20] mb-6">
                  {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-8 h-8' })}
                </div>
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1B5E20] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Ready to Build With Us?</h2>
          <p className="text-white/80 text-lg mb-8">"Take Care of The Nation by Providing Excellence."</p>
          <Link href="/contact" className="btn-gold text-lg px-8 py-4 inline-block">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
