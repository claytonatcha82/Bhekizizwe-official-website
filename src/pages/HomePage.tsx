import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, MapPin } from 'lucide-react';
import {
  FaHome, FaBuilding, FaIndustry, FaHardHat, FaProjectDiagram,
  FaTools, FaWrench, FaLayerGroup, FaCogs, FaWarehouse, FaRoad, FaCheck
} from 'react-icons/fa';

const backgrounds = [
  "linear-gradient(rgba(27, 94, 32, 0.78), rgba(27, 94, 32, 0.88)), url('/assets/projects/public-sector/kwanguza-primary-1.jpg')",
  "linear-gradient(rgba(27, 94, 32, 0.78), rgba(27, 94, 32, 0.88)), url('/assets/projects/public-sector/illovo-37-oss-1.jpg')",
  "linear-gradient(rgba(27, 94, 32, 0.78), rgba(27, 94, 32, 0.88)), url('/assets/projects/public-sector/tru-mpofana.jpg')",
];

const featuredProjects = [
  {
    name: 'Illovo 37 OSS',
    subtitle: 'Infrastructure Upgrade',
    location: 'Illovo, KwaZulu-Natal',
    desc: 'Infrastructure upgrade and building maintenance for a public sector facility, delivering durable and compliant construction solutions.',
    services: ['Building Maintenance', 'Infrastructure Upgrade', 'Civil Works'],
    cat: 'Public Sector',
    image: '/assets/projects/public-sector/illovo-37-oss-1.jpg',
  },
  {
    name: 'Kwanguza Primary School',
    subtitle: 'Roof Repairs & Water Infrastructure',
    location: 'KwaZulu-Natal',
    desc: 'Comprehensive roof remediation and installation of water infrastructure at Kwanguza Primary School, improving learning conditions for hundreds of students.',
    services: ['Roof Repairs', 'Water Infrastructure', 'School Maintenance'],
    cat: 'Public Sector',
    image: '/assets/projects/public-sector/kwanguza-primary-1.jpg',
  },
  {
    name: 'Low Cost Housing Project',
    subtitle: 'Rural Housing Development',
    location: 'KwaZulu-Natal',
    desc: 'Government-backed rural housing development programme providing quality residential units to families across KwaZulu-Natal.',
    services: ['Rural Housing', 'Residential Construction', 'Community Development'],
    cat: 'Public Sector',
    image: '/assets/projects/public-sector/kwamondi-rural-housing.jpg',
  },
];

export function HomePage() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const services = [
    { icon: <FaHome className="w-8 h-8" />, name: 'Residential Construction' },
    { icon: <FaBuilding className="w-8 h-8" />, name: 'Commercial Construction' },
    { icon: <FaIndustry className="w-8 h-8" />, name: 'Industrial Construction' },
    { icon: <FaRoad className="w-8 h-8" />, name: 'Civil Engineering' },
    { icon: <FaProjectDiagram className="w-8 h-8" />, name: 'Project Management' },
    { icon: <FaTools className="w-8 h-8" />, name: 'Renovations' },
    { icon: <FaWrench className="w-8 h-8" />, name: 'Maintenance' },
    { icon: <FaLayerGroup className="w-8 h-8" />, name: 'Retaining Walls' },
    { icon: <FaHardHat className="w-8 h-8" />, name: 'Roofing' },
    { icon: <FaCogs className="w-8 h-8" />, name: 'Steel Structures' },
    { icon: <FaWarehouse className="w-8 h-8" />, name: 'Warehousing' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8 }}
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: backgrounds[bgIndex] }}
          />
        </AnimatePresence>

        <div className="container mx-auto px-4 relative z-20 text-center mt-0 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-5xl mx-auto"
          >
            <div className="inline-block bg-[#F9A825] text-gray-900 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6">
              KwaZulu-Natal, South Africa
            </div>
            <h1 className="heading-xl mb-6 text-white leading-[1.1]">
              BUILDING AFRICA'S FUTURE
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium max-w-3xl mx-auto mb-10 leading-relaxed font-sans">
              Delivering premium construction, civil engineering and infrastructure solutions throughout South Africa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <Link href="/contact" className="btn-gold w-full sm:w-auto text-lg">
                Request a Quote
              </Link>
              <Link href="/projects" className="btn-outline-green bg-transparent border-white text-white hover:bg-white hover:text-[#1B5E20] w-full sm:w-auto text-lg">
                View Projects
              </Link>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-4"
            >
              {['✓ Level 1 B-BBEE', '✓ NHBRC Registered', '✓ CIDB Registered'].map((badge, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-white/10 backdrop-blur-md border border-white/25 rounded-full px-5 py-2 flex items-center gap-2"
                >
                  <span className="text-white text-sm font-semibold">{badge}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <div className="w-[2px] h-16 bg-white/20 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute top-0 w-full h-1/2 bg-[#F9A825]"
              animate={{ y: [0, 64] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ─── ABOUT PREVIEW ─── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
            >
              <div className="section-label mb-2">About Bhekizizwe</div>
              <div className="gold-divider"></div>
              <h2 className="heading-lg mb-6 text-[#1B5E20]">Excellence in<br />Every Foundation</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Founded in May 2022 and based in KwaZulu-Natal, Bhekizizwe Projects and Civils (Pty) Ltd is a 100% Black-owned enterprise building a reputation for reliable, high-quality construction solutions across the residential, commercial, industrial and public sectors.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Led by Clinton Stuart and guided by 60+ years of combined industry experience, we deliver every project with integrity, professionalism and a commitment to community upliftment.
              </p>
              <Link href="/about" className="btn-green inline-flex items-center gap-2 group">
                Discover Our Story
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                { title: 'Founded', desc: 'May 2022' },
                { title: 'Location', desc: 'KwaZulu-Natal' },
                { title: 'Ownership', desc: '100% Black-Owned' },
                { title: 'Experience', desc: '60+ Combined Years' },
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-[#F5F5F5] p-6 rounded-lg border-l-4 border-[#1B5E20] card-hover">
                  <h4 className="font-display font-bold text-xl text-gray-900 mb-2">{stat.title}</h4>
                  <p className="text-[#1B5E20] font-semibold">{stat.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section className="py-24 section-light">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="section-label mb-2">Our Services</div>
            <div className="gold-divider mx-auto"></div>
            <h2 className="heading-lg text-gray-900">Comprehensive Solutions</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover group text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#1B5E20]/10 flex items-center justify-center text-[#1B5E20] mb-4 group-hover:bg-[#1B5E20] group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display font-bold text-sm md:text-base text-gray-900 group-hover:text-[#1B5E20] transition-colors">{service.name}</h3>
              </motion.div>
            ))}
            {/* Learn More tile */}
            <motion.div variants={fadeUp} className="bg-[#1B5E20] p-6 rounded-xl shadow-sm card-hover text-center flex flex-col items-center justify-center group">
              <Link href="/services" className="text-white flex flex-col items-center gap-2">
                <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                <span className="font-display font-bold text-sm text-white">All Services</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="section-label mb-2">Why Choose Us</div>
            <div className="gold-divider mx-auto"></div>
            <h2 className="heading-lg text-gray-900">The Bhekizizwe Advantage</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {['Level 1 B-BBEE', 'CIDB Registered', 'NHBRC Registered', 'Experienced Team', 'Reliable Delivery', 'Quality Workmanship', 'Safety First', 'Community Development'].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-[#F5F5F5] p-6 rounded-lg text-center flex flex-col items-center card-hover">
                <CheckCircle className="text-[#1B5E20] w-8 h-8 mb-4" />
                <h4 className="font-display font-bold text-gray-900 text-sm">{item}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PROCESS TIMELINE ─── */}
      <section className="py-24 section-green overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-white">How We Work</h2>
            <div className="w-24 h-1 bg-[#F9A825] mx-auto mt-6"></div>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-[#2E7D32] z-0"></div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10"
            >
              {[
                { step: '01', title: 'Consultation', desc: 'Understanding your vision and project requirements.' },
                { step: '02', title: 'Planning', desc: 'Detailed engineering and architectural planning.' },
                { step: '03', title: 'Construction', desc: 'Executing with precision and quality control.' },
                { step: '04', title: 'Handover', desc: 'Final inspection and project delivery.' },
              ].map((phase, idx) => (
                <motion.div key={idx} variants={fadeUp} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#F9A825] border-4 border-[#1B5E20] flex items-center justify-center text-[#1B5E20] font-display font-bold text-xl mb-6 shadow-lg">
                    {phase.step}
                  </div>
                  <h4 className="font-display font-bold text-xl text-white mb-3">{phase.title}</h4>
                  <p className="text-white/80">{phase.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS (3 only) ─── */}
      <section className="py-24 section-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="section-label mb-2">Our Portfolio</div>
              <div className="gold-divider"></div>
              <h2 className="heading-lg text-gray-900">Featured Projects</h2>
            </motion.div>
            <Link href="/projects" className="btn-outline-green mt-6 md:mt-0">
              View All Projects
            </Link>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-white rounded-xl overflow-hidden shadow-md card-hover group flex flex-col">
                {/* Image */}
                <div className="h-52 relative overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="208"><rect fill="%23e5e7eb" width="400" height="208"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-size="14">Image Coming Soon</text></svg>';
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-[#1B5E20] text-white text-xs font-bold px-3 py-1 rounded">
                    {project.cat}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-1">{project.name}</h3>
                  <p className="text-[#F9A825] font-semibold text-sm mb-2">{project.subtitle}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm font-semibold mb-3">
                    <MapPin size={13} className="text-[#1B5E20]" />
                    {project.location}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.services.map((s) => (
                      <span key={s} className="bg-[#1B5E20]/8 text-[#1B5E20] text-xs font-semibold px-2 py-0.5 rounded border border-[#1B5E20]/15">{s}</span>
                    ))}
                  </div>
                  <Link href="/projects" className="text-[#1B5E20] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    View Project <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── STATISTICS ─── */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center"
          >
            {[
              { val: '25+', label: 'Projects Completed' },
              { val: '60+', label: 'Combined Years Experience' },
              { val: '100%', label: 'Client Satisfaction' },
              { val: 'Level 1', label: 'B-BBEE Status' },
              { val: 'Zero', label: 'Safety Incidents' },
            ].map((stat, idx) => (
              <motion.div key={idx} variants={fadeUp}>
                <div className="text-4xl md:text-5xl font-display font-extrabold text-[#1B5E20] mb-2">{stat.val}</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 green-gradient relative overflow-hidden text-center text-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Ready to Build With Confidence?
            </h2>
            <p className="text-xl text-white/90 font-medium mb-10">
              "Take Care of The Nation by Providing Excellence."
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-[#1B5E20] font-bold py-4 px-10 rounded shadow-lg hover:bg-gray-100 transition-colors">
                Contact Us
              </Link>
              <Link href="/contact" className="bg-[#F9A825] text-gray-900 font-bold py-4 px-10 rounded shadow-lg hover:bg-[#FDD835] transition-colors">
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
