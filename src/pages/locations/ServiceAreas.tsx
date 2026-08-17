import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import PageSEO from '../../components/PageSEO';
import JsonLd from '../../components/JsonLd';
import { LOCATIONS } from '../../data/locations';

const SITE_URL = 'https://www.jac-itfoundationrepair.com';

export default function ServiceAreas({ isLoading }: { isLoading?: boolean }) {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Jac-It House Leveling & Foundation Repair Service Areas',
    description:
      'Cities and counties across East Texas and Deep East Texas served by Jac-It House Leveling & Foundation Repair.',
    itemListElement: LOCATIONS.map((location, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `Foundation Repair in ${location.city}, TX`,
      url: `${SITE_URL}/locations/${location.slug}`,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE_URL}/locations` },
    ],
  };

  return (
    <>
      <PageSEO
        title="East Texas Service Areas | Jac-It House Leveling & Foundation Repair"
        description="Foundation repair and house leveling across East Texas — Tyler, Longview, Lufkin, Nacogdoches, Marshall, Livingston, Huntsville and more. Free inspections."
        path="/locations"
        image="/jacitgallery.jpeg"
        keywords="East Texas foundation repair, Deep East Texas house leveling, foundation repair near me, Tyler Longview Lufkin Nacogdoches foundation contractor"
      />
      <JsonLd id="service-areas-list" data={itemListSchema} />
      <JsonLd id="service-areas-breadcrumb" data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-jac-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/jacitgallery2.jpeg"
            alt="Foundation repair crew working on an East Texas home"
            className="w-full h-full object-cover object-center grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-jac-charcoal/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-jac-green/20 mix-blend-overlay"></div>

          <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
            <motion.div
              initial={{ opacity: 0, x: 100, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: isLoading ? 1.0 : 0.3 }}
              className="absolute inset-0 bg-white/20"
              style={{ clipPath: 'polygon(calc(100% - 38vw) 100%, 100% calc(100% - 38vw), 100% 100%)' }}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: isLoading ? 0.9 : 0.2 }}
              className="absolute inset-0 bg-white/40"
              style={{ clipPath: 'polygon(calc(100% - 34vw) 100%, 100% calc(100% - 34vw), 100% 100%)' }}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: isLoading ? 0.8 : 0.1 }}
              className="absolute inset-0 bg-white"
              style={{ clipPath: 'polygon(calc(100% - 30vw) 100%, 100% calc(100% - 30vw), 100% 100%)' }}
            ></motion.div>
          </div>
        </div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 text-left">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: isLoading ? 0.8 : 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-white uppercase tracking-tight mb-4 max-w-4xl"
          >
            East Texas Service Areas
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: isLoading ? 0.9 : 0.2 }}
            className="text-lg md:text-2xl text-jac-lime font-bold uppercase tracking-widest max-w-2xl"
          >
            25+ Years Across Deep East Texas
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="font-display font-black text-2xl md:text-4xl uppercase text-jac-charcoal mb-6 leading-tight">
              One Region, <span className="text-jac-green">Very Different</span> Ground
            </h2>
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <p>
                East Texas is not a single soil type, and foundation repair here should not be a single
                approach. The sandy iron-ore ridges around Tyler behave nothing like the expansive clays
                west of Palestine, and neither behaves like the saturated bottomland soils near Lake
                Livingston. A method that holds in one county can fail in the next.
              </p>
              <p>
                That is why we build each repair plan around the property in front of us — elevation survey
                first, drainage assessment second, method chosen third. Below is where we work, and what
                makes the ground in each place its own problem.
              </p>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="bg-gray-50 border-l-4 border-jac-green p-8">
              <h3 className="font-subdisplay font-bold text-2xl uppercase tracking-wide text-jac-charcoal mb-4">
                Not on the list?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We cover a wide radius across East Texas and Deep East Texas, including hundreds of small
                communities and rural acreage properties between these cities. If you do not see your town,
                call — we very likely still service it.
              </p>
              <a
                href="tel:18776552248"
                className="inline-flex items-center gap-3 font-bold text-jac-charcoal hover:text-jac-green transition-colors text-lg"
              >
                <Phone className="w-5 h-5 text-jac-green" /> 1-877-65-JACIT
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location grid */}
      <section className="bg-gray-50 border-t border-gray-200 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((location, i) => (
              <Link
                key={location.slug}
                to={`/locations/${location.slug}`}
                className="group relative bg-white border border-gray-200/80 p-8 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
              >
                <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-gray-50 rounded-full z-0 group-hover:scale-[30] group-hover:bg-jac-charcoal transition-all duration-700 ease-in-out"></div>
                <div className="absolute top-5 right-6 font-display font-black text-5xl text-gray-100 group-hover:text-white/5 transition-colors duration-500 z-0 select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-2 text-jac-green group-hover:text-jac-lime transition-colors duration-500 mb-3">
                    <MapPin className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-widest">{location.county}</span>
                  </div>
                  <h2 className="font-subdisplay font-bold text-3xl uppercase mb-4 text-jac-charcoal group-hover:text-white transition-colors duration-500">
                    {location.city}, TX
                  </h2>
                  <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed mb-6 transition-colors duration-500 flex-grow">
                    {location.cardSummary}
                  </p>
                  <span className="font-bold tracking-wide flex items-center gap-2 text-jac-charcoal group-hover:text-jac-lime transition-colors duration-500 mt-auto uppercase text-sm">
                    {location.city} Foundation Repair
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-jac-charcoal py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-jac-green/10 via-jac-charcoal to-jac-charcoal"></div>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-5xl text-white uppercase mb-6 tracking-tight">
            Free Inspection, Anywhere We Serve
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Elevation survey, drainage assessment and a written, itemized estimate — at no cost and with no
            obligation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-stretch group relative overflow-hidden border border-jac-lime"
          >
            <div className="absolute inset-0 bg-jac-lime w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
            <div className="bg-black/30 group-hover:bg-transparent group-hover:text-jac-charcoal backdrop-blur-sm text-jac-lime px-6 sm:px-10 py-4 sm:py-5 font-bold tracking-wide text-sm sm:text-xl flex items-center justify-center relative z-10 transition-all duration-300 uppercase">
              Schedule Free Inspection
            </div>
            <div className="bg-jac-lime/10 group-hover:bg-transparent border-l border-jac-lime/30 px-4 sm:px-6 flex items-center justify-center relative z-10 transition-colors duration-300">
              <ArrowRight className="w-6 h-6 text-jac-lime group-hover:text-jac-charcoal group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
