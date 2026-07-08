import React from 'react';
import { PageHero } from '@/components/sections/PageHero';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { 
  Building2, HardHat, Hammer, Factory,
  Wrench, PaintRoller, Ruler, Activity, Shield,
  ArrowRight
} from 'lucide-react';
import { FaHome, FaBuilding, FaIndustry, FaHardHat, FaProjectDiagram, FaTools, FaWrench, FaLayerGroup, FaCogs, FaWarehouse, FaRoad } from 'react-icons/fa';

const services = [
  { icon: <FaHome />, name: "Residential Construction", desc: "Custom homes, luxury apartments, and affordable housing developments built to exact specifications." },
  { icon: <FaBuilding />, name: "Commercial Construction", desc: "Office blocks, retail centers, and educational facilities designed for optimal functionality." },
  { icon: <FaIndustry />, name: "Industrial Construction", desc: "Heavy-duty industrial facilities, factories, and specialized production plants." },
  { icon: <FaRoad />, name: "Civil Engineering", desc: "Earthworks, road infrastructure, drainage systems, and foundational engineering." },
  { icon: <FaProjectDiagram />, name: "Project Management", desc: "End-to-end project oversight ensuring timeline adherence, budget control, and quality assurance." },
  { icon: <FaTools />, name: "Renovations", desc: "Structural upgrades, modernizations, and comprehensive building rehabilitations." },
  { icon: <FaWrench />, name: "Maintenance", desc: "Preventative and corrective facility maintenance to extend asset lifecycles." },
  { icon: <FaLayerGroup />, name: "Retaining Walls", desc: "Engineered structural walls for soil retention, landscaping, and site stabilization." },
  { icon: <FaHardHat />, name: "Roofing", desc: "Installation, repair, and remediation of commercial and residential roofing systems." },
  { icon: <FaCogs />, name: "Steel Structures", desc: "Fabrication and erection of robust steel frameworks for diverse applications." },
  { icon: <FaWarehouse />, name: "Warehousing", desc: "Large-scale storage facilities optimized for logistics and inventory management." }
];

export function ServicesPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Our Services" 
        subtitle="Comprehensive construction and civil engineering solutions delivered with uncompromising quality."
      />

      {/* Main Service Pillars */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="section-label mb-2">Core Pillars</div>
            <div className="gold-divider mx-auto"></div>
            <h2 className="heading-md text-gray-900">Expertise Across Sectors</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#F5F5F5] rounded-xl overflow-hidden border border-gray-100 card-hover">
              <div className="h-48 bg-[#1B5E20] flex items-center justify-center">
                <Building2 className="w-20 h-20 text-white/50" />
              </div>
              <div className="p-8">
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">Building Construction</h3>
                <p className="text-gray-600 mb-6">From luxury residential developments to expansive commercial complexes. We manage the entire lifecycle of vertical construction with precision.</p>
                <ul className="space-y-2 text-gray-700 font-medium text-sm">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#F9A825]"></div> Residential Housing</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#F9A825]"></div> Commercial Centers</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#F9A825]"></div> Industrial Facilities</li>
                </ul>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#F5F5F5] rounded-xl overflow-hidden border border-gray-100 card-hover">
              <div className="h-48 bg-[#1B5E20] flex items-center justify-center">
                <Ruler className="w-20 h-20 text-white/50" />
              </div>
              <div className="p-8">
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">Civil Engineering</h3>
                <p className="text-gray-600 mb-6">Robust horizontal infrastructure development including earthworks, drainage, and structural stabilization systems.</p>
                <ul className="space-y-2 text-gray-700 font-medium text-sm">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#F9A825]"></div> Earthworks & Foundations</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#F9A825]"></div> Retaining Structures</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#F9A825]"></div> Water & Drainage Systems</li>
                </ul>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#F5F5F5] rounded-xl overflow-hidden border border-gray-100 card-hover">
              <div className="h-48 bg-[#1B5E20] flex items-center justify-center">
                <Activity className="w-20 h-20 text-white/50" />
              </div>
              <div className="p-8">
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">Project Management</h3>
                <p className="text-gray-600 mb-6">Comprehensive oversight ensuring your project is delivered on time, within budget, and to the highest quality standards.</p>
                <ul className="space-y-2 text-gray-700 font-medium text-sm">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#F9A825]"></div> Timeline Optimization</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#F9A825]"></div> Budget Control</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#F9A825]"></div> Quality Assurance</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Services List */}
      <section className="py-24 section-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="section-label mb-2">Capabilities</div>
            <div className="gold-divider mx-auto"></div>
            <h2 className="heading-md text-gray-900">All Services</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover group"
              >
                <div className="w-14 h-14 bg-[#F5F5F5] rounded-full flex items-center justify-center text-[#1B5E20] mb-4 group-hover:bg-[#1B5E20] group-hover:text-white transition-colors">
                  {React.cloneElement(service.icon, { className: "w-6 h-6" })}
                </div>
                <h4 className="font-display font-bold text-lg text-gray-900 mb-2 group-hover:text-[#1B5E20] transition-colors">{service.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1B5E20] text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl mb-6">Need a custom solution?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Contact our engineering team to discuss your specific requirements and get a detailed proposal.</p>
          <Link href="/contact" className="btn-gold text-lg">
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
