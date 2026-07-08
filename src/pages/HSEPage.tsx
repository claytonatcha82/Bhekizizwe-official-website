import React from 'react';
import { PageHero } from '@/components/sections/PageHero';
import { motion } from 'framer-motion';
import { ShieldAlert, HeartPulse, Leaf, AlertTriangle, BookOpen, CheckCircle } from 'lucide-react';

export function HSEPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Health, Safety & Environment" 
        subtitle="Our unwavering commitment to Zero Harm across all operations."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <div className="w-20 h-20 bg-[#1B5E20]/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShieldAlert className="w-10 h-10 text-[#1B5E20]" />
          </div>
          <h2 className="heading-md text-gray-900 mb-6">The Zero Harm Philosophy</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            At Bhekizizwe Projects and Civils, we believe that all occupational injuries and illnesses are preventable. Our HSE framework is built on the principle of "Zero Harm" to our people, our clients, and the environment in which we operate.
          </p>
          <div className="inline-block bg-[#F9A825] text-gray-900 font-display font-bold px-8 py-3 rounded-full text-lg shadow-sm">
            Current Record: Zero Major Incidents
          </div>
        </div>
      </section>

      <section className="py-24 section-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="section-label mb-2">HSE Pillars</div>
            <div className="gold-divider mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#1B5E20] card-hover">
              <HeartPulse className="w-12 h-12 text-[#1B5E20] mb-6" />
              <h3 className="font-display font-bold text-xl text-gray-900 mb-4">Occupational Health</h3>
              <p className="text-gray-600">Continuous monitoring of workplace conditions, provision of required PPE, and regular health assessments to ensure our workforce remains fit and healthy.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#F9A825] card-hover">
              <AlertTriangle className="w-12 h-12 text-[#F9A825] mb-6" />
              <h3 className="font-display font-bold text-xl text-gray-900 mb-4">Safety Protocols</h3>
              <p className="text-gray-600">Strict adherence to OHS Act requirements, daily toolbox talks, comprehensive site inductions, and rigorous hazard identification procedures.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#2E7D32] card-hover">
              <Leaf className="w-12 h-12 text-[#2E7D32] mb-6" />
              <h3 className="font-display font-bold text-xl text-gray-900 mb-4">Environmental Care</h3>
              <p className="text-gray-600">Minimizing our ecological footprint through responsible waste management, pollution prevention, and sustainable resource utilization.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="bg-[#1B5E20] rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 flex flex-col justify-center text-white relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full"></div>
              <BookOpen className="w-12 h-12 text-[#F9A825] mb-6" />
              <h3 className="font-display font-bold text-3xl mb-4">Continuous Training</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Safety is a culture, not just a manual. We invest heavily in ongoing HSE training for all staff levels, ensuring compliance with the latest industry standards and best practices.
              </p>
              <ul className="space-y-3">
                {['First Aid & CPR', 'Working at Heights', 'Hazard Identification', 'Emergency Response'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle className="text-[#F9A825] w-5 h-5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 bg-gray-200 min-h-[300px] relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356fce?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply">
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
