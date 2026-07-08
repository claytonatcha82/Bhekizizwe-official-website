import React, { useState } from 'react';
import { PageHero } from '@/components/sections/PageHero';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Globe } from 'lucide-react';
import { Link } from 'wouter';

type Project = {
  id: number;
  name: string;
  location: string;
  desc: string;
  services: string[];
  status: 'Completed' | 'In Progress';
  client: string;
  images: string[];
};

const publicSectorProjects: Project[] = [
  {
    id: 1,
    name: 'Illovo 37 OSS',
    location: 'Illovo, KwaZulu-Natal',
    desc: 'Infrastructure upgrade and building maintenance for a public sector facility, delivering durable and compliant construction solutions.',
    services: ['Building Maintenance', 'Infrastructure Upgrade', 'Civil Works'],
    status: 'Completed',
    client: 'Public Sector',
    images: ['/assets/projects/public-sector/illovo-37-oss-1.jpg', '/assets/projects/public-sector/illovo-37-oss-2.jpg'],
  },
  {
    id: 2,
    name: 'Kwamondi Rural Housing',
    location: 'KwaZulu-Natal',
    desc: 'Rural residential housing development delivering quality, durable homes to communities in KwaZulu-Natal through government-backed housing initiatives.',
    services: ['Residential Construction', 'Community Housing', 'Site Development'],
    status: 'Completed',
    client: 'Government / Municipal',
    images: ['/assets/projects/public-sector/kwamondi-rural-housing.jpg'],
  },
  {
    id: 3,
    name: 'Kwanguza Primary School',
    location: 'KwaZulu-Natal',
    desc: 'Comprehensive roof repairs and installation of water infrastructure at Kwanguza Primary School, improving learning conditions for hundreds of students.',
    services: ['Roof Repairs', 'Water Infrastructure', 'School Maintenance'],
    status: 'Completed',
    client: 'Department of Education',
    images: ['/assets/projects/public-sector/kwanguza-primary-1.jpg', '/assets/projects/public-sector/kwanguza-primary-2.jpg'],
  },
  {
    id: 4,
    name: 'TRU-Mpofana Local Municipality',
    location: 'Mpofana, KwaZulu-Natal',
    desc: 'Municipal infrastructure project delivering critical civic construction works for the Mpofana Local Municipality.',
    services: ['Municipal Infrastructure', 'Civil Engineering', 'Construction'],
    status: 'Completed',
    client: 'Mpofana Local Municipality',
    images: ['/assets/projects/public-sector/tru-mpofana.jpg'],
  },
  {
    id: 5,
    name: 'UFAFA Rural Housing',
    location: 'UFAFA, KwaZulu-Natal',
    desc: 'Government-backed rural housing development programme providing quality residential units to families in the UFAFA area.',
    services: ['Rural Housing', 'Residential Construction', 'Community Development'],
    status: 'Completed',
    client: 'Government / Municipal',
    images: ['/assets/projects/public-sector/ufafa-rural-housing.jpg'],
  },
];

const privateSectorProjects: Project[] = [
  {
    id: 6,
    name: '8 Landers Crescent',
    location: 'Scottburgh, KwaZulu-Natal',
    desc: 'Construction of a double-story luxury apartment complex featuring modern architectural finishes, premium amenities and structural excellence.',
    services: ['Residential Construction', 'Luxury Apartments', 'Structural Engineering'],
    status: 'Completed',
    client: 'Private Developer',
    images: ['/assets/projects/private-sector/8-landers-crescent-1.jpg', '/assets/projects/private-sector/8-landers-crescent-2.jpg'],
  },
  {
    id: 7,
    name: '41 Romsdal Road',
    location: 'Oslo Beach, KwaZulu-Natal',
    desc: 'Development of low-cost residential housing units using durable, cost-effective materials with quality finishes throughout.',
    services: ['Residential Construction', 'Housing Development', 'Site Works'],
    status: 'Completed',
    client: 'Private Developer',
    images: ['/assets/projects/private-sector/41-romsdal-road-1.jpg', '/assets/projects/private-sector/41-romsdal-road-2.jpg'],
  },
  {
    id: 8,
    name: 'Intercity Bus Rank',
    location: 'KwaZulu-Natal',
    desc: 'Full renovation and upgrade of a commercial intercity bus rank facility, improving passenger experience and operational infrastructure.',
    services: ['Commercial Construction', 'Renovation', 'Infrastructure Upgrade'],
    status: 'Completed',
    client: 'Private Sector',
    images: ['/assets/projects/private-sector/intercity-bus-rank.jpg'],
  },
];

const internationalProjects: Project[] = [
  {
    id: 9,
    name: 'Tsumeb Depot Loading Bay Gantry',
    location: 'Tsumeb, Namibia',
    desc: 'Design and construction of a steel loading bay gantry structure at the Tsumeb Depot, showcasing our expanding capability in industrial and structural steel construction across Africa.',
    services: ['Steel Structure Construction', 'Structural Engineering', 'Industrial Construction'],
    status: 'In Progress',
    client: 'International Client',
    images: ['/assets/projects/international-sector/tsumeb-depot.jpg'],
  },
  {
    id: 10,
    name: 'Walvis Bay Metering Bay',
    location: 'Walvis Bay, Namibia',
    desc: 'Civil engineering and construction of a metering bay facility at Walvis Bay, delivering precision concrete works and infrastructure for the industrial sector.',
    services: ['Civil Engineering', 'Concrete Works', 'Industrial Construction'],
    status: 'Completed',
    client: 'International Client',
    images: ['/assets/projects/international-sector/walvis-bay.jpg'],
  },
];

type TabType = 'public' | 'private' | 'international';

function ProjectCard({ project }: { project: Project }) {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden card-hover flex flex-col"
    >
      {/* Image */}
      <div className="h-52 relative overflow-hidden bg-gray-100">
        <img
          src={project.images[imgIndex]}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200"><rect fill="%23e5e7eb" width="400" height="200"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-size="14">Image Coming Soon</text></svg>';
          }}
        />
        {/* Thumbnail dots */}
        {project.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === imgIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display font-bold text-xl text-gray-900 mb-1">{project.name}</h3>
        <div className="flex items-center gap-2 text-gray-500 text-sm font-semibold mb-3">
          <MapPin size={13} className="text-[#F9A825]" />
          {project.location}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>

        <div className="border-t border-gray-100 pt-4">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Services Delivered</p>
          <div className="flex flex-wrap gap-2">
            {project.services.map((s) => (
              <span key={s} className="bg-[#1B5E20]/8 text-[#1B5E20] text-xs font-semibold px-2.5 py-1 rounded-full border border-[#1B5E20]/20">
                {s}
              </span>
            ))}
          </div>
          <p className="text-xs font-semibold text-gray-400 mt-3">Client: <span className="text-gray-600">{project.client}</span></p>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('public');

  const tabs: { id: TabType; label: string; sub: string }[] = [
    { id: 'public', label: 'Public Sector', sub: 'Government · Schools · Municipal' },
    { id: 'private', label: 'Private Sector', sub: 'Residential · Commercial · Apartments' },
    { id: 'international', label: 'International Sector', sub: 'Expanding Across Africa' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Project Portfolio"
        subtitle="A showcase of our capabilities across public, private and international sectors — built with integrity, delivered with excellence."
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">

          {/* Tab Selector */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-left sm:text-center border-2 ${
                  activeTab === tab.id
                    ? 'bg-[#1B5E20] text-white border-[#1B5E20] shadow-lg'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-[#1B5E20] hover:text-[#1B5E20]'
                }`}
              >
                <span className="block font-display font-bold text-lg">{tab.label}</span>
                <span className={`block text-xs font-medium mt-0.5 ${activeTab === tab.id ? 'text-white/70' : 'text-gray-400'}`}>{tab.sub}</span>
              </button>
            ))}
          </div>

          {/* Public Sector */}
          <AnimatePresence mode="wait">
            {activeTab === 'public' && (
              <motion.div
                key="public"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-center mb-10">
                  <h2 className="heading-sm text-gray-900">Public Sector Projects</h2>
                  <p className="text-gray-500 mt-2">Government housing, schools and municipal infrastructure</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {publicSectorProjects.map((p) => <ProjectCard key={p.id} project={p} />)}
                </div>
              </motion.div>
            )}

            {/* Private Sector */}
            {activeTab === 'private' && (
              <motion.div
                key="private"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-center mb-10">
                  <h2 className="heading-sm text-gray-900">Private Sector Projects</h2>
                  <p className="text-gray-500 mt-2">Residential, commercial and apartment developments</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {privateSectorProjects.map((p) => <ProjectCard key={p.id} project={p} />)}
                </div>
              </motion.div>
            )}

            {/* International Sector */}
            {activeTab === 'international' && (
              <motion.div
                key="international"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Africa Vision Banner */}
                <div className="bg-[#1B5E20] text-white rounded-2xl p-10 md:p-14 mb-12 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F9A825]/10 rounded-full translate-y-1/2 -translate-x-1/4"></div>
                  <Globe className="w-16 h-16 text-[#F9A825] mx-auto mb-6 relative z-10" />
                  <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 relative z-10">Expanding Across Africa</h2>
                  <p className="text-white/85 text-lg max-w-2xl mx-auto leading-relaxed relative z-10">
                    Bhekizizwe Projects &amp; Civils is proud to be extending its reach beyond South Africa's borders. Our recent projects in Namibia mark the beginning of our continental growth strategy — bringing the same quality, safety and professionalism that defines every Bhekizizwe Projects &amp; Civils project to clients across Africa.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-6 relative z-10">
                    {['🇿🇦 South Africa', '🇳🇦 Namibia'].map((country) => (
                      <span key={country} className="bg-white/10 border border-white/20 rounded-full px-5 py-2 text-sm font-semibold backdrop-blur">
                        {country}
                      </span>
                    ))}
                    <span className="bg-[#F9A825]/20 border border-[#F9A825]/40 rounded-full px-5 py-2 text-sm font-semibold text-[#F9A825]">
                      + More Coming Soon
                    </span>
                  </div>
                </div>

                <div className="text-center mb-10">
                  <h3 className="heading-sm text-gray-900">International Projects</h3>
                  <p className="text-gray-500 mt-2">Our growing footprint beyond South Africa's borders</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {internationalProjects.map((p) => <ProjectCard key={p.id} project={p} />)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F5F5F5] text-center border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">Have a Project in Mind?</h2>
          <p className="text-gray-600 mb-8">Contact us for a consultation and tailored quote.</p>
          <Link href="/contact" className="btn-green inline-flex items-center gap-2">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
