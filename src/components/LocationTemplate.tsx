import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronDown,
  Phone,
  MapPin,
  AlertTriangle,
  Layers,
  CheckCircle2,
  Mail,
} from 'lucide-react';
import JsonLd from './JsonLd';
import PageSEO from './PageSEO';
import { Location, otherLocations } from '../data/locations';

const SITE_URL = 'https://www.jac-itfoundationrepair.com';

const BrandName = () => (
  <span className="inline-flex items-baseline font-normal tracking-normal lowercase">
    <span
      style={{ fontFamily: "'Birds of Paradise  Personal use', cursive" }}
      className="text-[1.5em] leading-none mr-0 capitalize"
    >
      j
    </span>
    <span style={{ fontFamily: "'Ethnocentric Rg', sans-serif" }} className="text-[0.85em]">
      ac-it
    </span>
  </span>
);

interface LocationTemplateProps {
  location: Location;
  isLoading?: boolean;
}

export default function LocationTemplate({ location, isLoading }: LocationTemplateProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const path = `/locations/${location.slug}`;
  const pageUrl = `${SITE_URL}${path}`;
  const others = otherLocations(location.slug);

  const areaServedNames = [location.city, ...location.nearby.map((n) => n.name)];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${pageUrl}#business`,
    name: `Jac-It House Leveling & Foundation Repair — ${location.city}, TX`,
    description: location.metaDescription,
    url: pageUrl,
    image: `${SITE_URL}${location.heroImage}`,
    logo: `${SITE_URL}/jacitlogohorizontal.png`,
    telephone: '+1-877-655-2248',
    email: 'james@jac-itfoundationrepair.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    areaServed: areaServedNames.map((name) => ({
      '@type': 'City',
      name: `${name}, TX`,
    })),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.lat,
      longitude: location.lng,
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: location.lat,
        longitude: location.lng,
      },
      geoRadius: '40000',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Foundation services in ${location.city}, TX`,
      itemListElement: location.services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: `${s.name} in ${location.city}, TX`,
          description: s.blurb,
          url: `${SITE_URL}/services/${s.slug}`,
        },
      })),
    },
    sameAs: ['https://www.facebook.com/profile.php?id=61582509133880'],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE_URL}/locations` },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${location.city}, TX`,
        item: pageUrl,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <PageSEO
        title={location.metaTitle}
        description={location.metaDescription}
        path={path}
        image={location.heroImage}
        ogType="business.business"
        keywords={`foundation repair ${location.city} TX, house leveling ${location.city}, pier and beam repair ${location.city} Texas, slab repair ${location.county}, foundation company ${location.city}`}
      />
      <JsonLd id={`location-business-${location.slug}`} data={localBusinessSchema} />
      <JsonLd id={`location-breadcrumb-${location.slug}`} data={breadcrumbSchema} />
      <JsonLd id={`location-faq-${location.slug}`} data={faqSchema} />

      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-jac-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={location.heroImage}
            alt={`Foundation repair and house leveling work in ${location.city}, Texas`}
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
          {/* Breadcrumb */}
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: isLoading ? 0.7 : 0.05 }}
            className="mb-5"
          >
            <ol className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">
              <li>
                <Link to="/" className="hover:text-jac-lime transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/locations" className="hover:text-jac-lime transition-colors">
                  Service Areas
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-jac-lime" aria-current="page">
                {location.city}
              </li>
            </ol>
          </motion.nav>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: isLoading ? 0.8 : 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-white uppercase tracking-tight mb-4 max-w-4xl"
          >
            Foundation Repair &amp; House Leveling in {location.city}, TX
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: isLoading ? 0.9 : 0.2 }}
            className="text-lg md:text-2xl text-jac-lime font-bold uppercase tracking-widest max-w-2xl"
          >
            {location.tagline}
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: isLoading ? 1.0 : 0.3 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8 text-gray-300 text-sm font-medium"
          >
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-jac-lime" /> {location.county}, {location.region}
            </span>
            <a href="tel:18776552248" className="flex items-center gap-2 hover:text-jac-lime transition-colors">
              <Phone className="w-4 h-4 text-jac-lime" /> 1-877-65-JACIT
            </a>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-jac-lime" /> Free Inspections &amp; Estimates
            </span>
          </motion.div>
        </div>
      </section>

      {/* Intro / main body */}
      <section className="relative bg-white overflow-hidden py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="order-2 lg:order-1">
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase text-jac-charcoal mb-8 leading-tight">
              Trusted <span className="text-jac-green">{location.city}</span> Foundation Contractors
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              {location.intro.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Soil / geology block */}
            <div className="mt-10 bg-gray-50 border-l-4 border-jac-green p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Layers className="w-6 h-6 text-jac-green shrink-0" />
                <h3 className="font-display font-bold text-xl md:text-2xl text-jac-charcoal uppercase">
                  {location.soil.heading}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{location.soil.body}</p>
            </div>

            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-stretch group relative overflow-hidden border border-jac-green text-jac-charcoal"
              >
                <div className="absolute inset-0 bg-jac-green w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
                <div className="group-hover:text-white px-6 sm:px-8 py-4 font-bold tracking-wide text-sm flex items-center justify-center relative z-10 transition-colors duration-300 uppercase">
                  Free {location.city} Inspection
                </div>
                <div className="border-l border-jac-green group-hover:border-transparent group-hover:text-white px-6 flex items-center justify-center relative z-10 transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 w-full flex flex-col gap-8">
            <div className="overflow-hidden rounded-sm group flex items-start justify-center lg:justify-end">
              <img
                src={location.bodyImage}
                alt={`Foundation repair equipment used on ${location.city}, Texas homes`}
                className="w-full max-w-md lg:max-w-[90%] xl:max-w-[80%] h-auto object-contain object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Quick facts card — real, page-unique data */}
            <div className="bg-jac-charcoal text-white p-8 shadow-xl lg:ml-auto lg:max-w-[90%] w-full">
              <h3 className="font-subdisplay font-bold text-2xl uppercase tracking-wide mb-2">
                {location.city} Service Snapshot
              </h3>
              <div className="w-10 h-[3px] bg-jac-lime mb-6"></div>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-jac-lime font-bold uppercase tracking-widest text-[11px] mb-1">County</dt>
                  <dd className="text-gray-300">{location.county}</dd>
                </div>
                <div>
                  <dt className="text-jac-lime font-bold uppercase tracking-widest text-[11px] mb-1">
                    ZIP Codes Served
                  </dt>
                  <dd className="text-gray-300">{location.zips.join(', ')}</dd>
                </div>
                <div>
                  <dt className="text-jac-lime font-bold uppercase tracking-widest text-[11px] mb-1">
                    Areas We Work
                  </dt>
                  <dd className="text-gray-300">{location.neighborhoods.join(' · ')}</dd>
                </div>
                <div>
                  <dt className="text-jac-lime font-bold uppercase tracking-widest text-[11px] mb-1">
                    Near
                  </dt>
                  <dd className="text-gray-300">{location.landmarks.join(' · ')}</dd>
                </div>
                <div>
                  <dt className="text-jac-lime font-bold uppercase tracking-widest text-[11px] mb-1">Hours</dt>
                  <dd className="text-gray-300">Mon–Fri, 8:00 AM – 6:00 PM</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Local warning signs */}
      <section className="bg-black py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div
            className="absolute inset-0 bg-white/[0.02]"
            style={{ clipPath: 'polygon(0 100%, 0 calc(100% - 60vw), 60vw 100%)' }}
          ></div>
          <div
            className="absolute inset-0 bg-white/[0.04]"
            style={{ clipPath: 'polygon(0 100%, 0 calc(100% - 45vw), 45vw 100%)' }}
          ></div>
          <div
            className="absolute inset-0 bg-white/[0.06]"
            style={{ clipPath: 'polygon(0 100%, 0 calc(100% - 30vw), 30vw 100%)' }}
          ></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display font-black text-3xl md:text-5xl uppercase text-white mb-4 leading-tight">
              Foundation Warning Signs in {location.city}
            </h2>
            <div className="w-24 h-1 bg-jac-lime mb-6"></div>
            <p className="text-gray-400 text-lg leading-relaxed">
              These are the specific symptoms we are called out for most often in {location.city} and
              throughout {location.county}. If you recognize any of them, an inspection now is cheaper than
              an inspection two seasons from now.
            </p>
          </div>

          <ul className="grid md:grid-cols-2 gap-5">
            {location.localSigns.map((sign, i) => (
              <li
                key={i}
                className="flex items-start gap-4 bg-white/[0.03] border border-white/10 p-6 hover:border-jac-lime/50 hover:bg-white/[0.06] transition-all duration-300"
              >
                <AlertTriangle className="w-6 h-6 text-jac-lime shrink-0 mt-0.5" />
                <span className="text-gray-200 leading-relaxed">{sign}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services in this city */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display font-black text-3xl md:text-5xl uppercase text-jac-charcoal mb-4 leading-tight">
              Our Services in {location.city}, Texas
            </h2>
            <div className="w-24 h-1 bg-jac-lime mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Every method below is one we actually use on {location.city} homes, chosen for the way the
              ground here behaves — not a generic list.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {location.services.map((service, i) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group relative bg-white border border-gray-200/80 p-8 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
              >
                <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-gray-50 rounded-full z-0 group-hover:scale-[30] group-hover:bg-jac-charcoal transition-all duration-700 ease-in-out"></div>
                <div className="absolute top-5 right-6 font-display font-black text-5xl text-gray-100 group-hover:text-white/5 transition-colors duration-500 z-0 select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-10 h-[3px] bg-jac-lime mb-5 group-hover:w-full transition-all duration-500"></div>
                  <h3 className="font-subdisplay font-bold text-2xl uppercase mb-4 text-jac-charcoal group-hover:text-white transition-colors duration-500">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed mb-8 transition-colors duration-500 flex-grow">
                    {service.blurb}
                  </p>
                  <span className="font-bold tracking-wide flex items-center gap-2 text-jac-charcoal group-hover:text-jac-lime transition-colors duration-500 mt-auto uppercase text-sm">
                    Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby communities */}
      <section className="bg-gray-50 border-y border-gray-200 py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="font-display font-black text-2xl md:text-3xl uppercase text-jac-charcoal mb-4 leading-tight">
              Communities We Serve Around {location.city}
            </h2>
            <div className="w-16 h-1 bg-jac-lime mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Our crews cover {location.county} and the surrounding Deep East Texas communities. If your town
              is not listed, call us — we very likely still service it.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-3">
              {location.nearby.map((place) =>
                place.slug ? (
                  <Link
                    key={place.name}
                    to={`/locations/${place.slug}`}
                    className="inline-flex items-center gap-2 border border-jac-green/40 bg-white px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-jac-charcoal hover:bg-jac-green hover:text-white hover:border-jac-green transition-all"
                  >
                    <MapPin className="w-4 h-4" />
                    {place.name}, TX
                  </Link>
                ) : (
                  <span
                    key={place.name}
                    className="inline-flex items-center gap-2 border border-gray-300 bg-white px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-gray-600"
                  >
                    <MapPin className="w-4 h-4 text-jac-green" />
                    {place.name}, TX
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-display font-black text-3xl md:text-5xl uppercase text-jac-charcoal mb-4">
              {location.city} Foundation Questions
            </h2>
            <div className="w-24 h-1 bg-jac-lime mx-auto"></div>
          </div>

          <div className="space-y-4">
            {location.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`border border-gray-200 bg-white overflow-hidden transition-all duration-300 ${
                    isOpen ? 'shadow-lg border-jac-green/50' : 'hover:border-gray-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                  >
                    <h3
                      className={`font-subdisplay font-bold text-lg md:text-xl uppercase tracking-wide pr-8 transition-colors duration-300 ${
                        isOpen ? 'text-jac-green' : 'text-jac-charcoal group-hover:text-jac-green'
                      }`}
                    >
                      {index + 1}. {faq.question}
                    </h3>
                    <div
                      className={`flex items-center justify-center shrink-0 w-8 h-8 rounded-full border transition-all duration-300 ${
                        isOpen
                          ? 'border-jac-green bg-jac-green text-white rotate-180'
                          : 'border-gray-300 text-gray-500 group-hover:border-jac-green group-hover:text-jac-green'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="p-6 md:p-8 pt-0 text-gray-600 leading-relaxed text-base md:text-lg">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other service areas — internal linking */}
      <section className="bg-gray-50 border-t border-gray-200 py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="font-subdisplay font-bold text-xl uppercase tracking-wide text-jac-charcoal mb-2">
            Other East Texas Service Areas
          </h2>
          <div className="w-12 h-[3px] bg-jac-lime mb-8"></div>
          <div className="flex flex-wrap gap-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                to={`/locations/${other.slug}`}
                className="text-sm font-bold uppercase tracking-wide text-gray-600 border border-gray-300 bg-white px-4 py-2.5 hover:border-jac-green hover:text-jac-green transition-colors"
              >
                Foundation Repair {other.city}
              </Link>
            ))}
            <Link
              to="/locations"
              className="text-sm font-bold uppercase tracking-wide text-white bg-jac-charcoal border border-jac-charcoal px-4 py-2.5 hover:bg-jac-green hover:border-jac-green transition-colors"
            >
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-jac-charcoal py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-jac-green/10 via-jac-charcoal to-jac-charcoal"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-5xl text-white uppercase mb-4 tracking-tight">
            Level up your {location.city} home—
            <br className="hidden md:block" />
            Call <BrandName /> today!
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
            Free inspection, free elevation survey and a written estimate with no obligation, anywhere in{' '}
            {location.county}.
          </p>

          <div className="flex flex-col items-center gap-6 justify-center text-white mt-10">
            <div className="flex flex-col items-center gap-2">
              <a
                href="tel:18776552248"
                className="text-2xl sm:text-3xl md:text-5xl font-bold hover:text-jac-lime transition-colors tracking-wide flex items-center gap-4"
              >
                <Phone className="w-7 h-7 md:w-10 md:h-10 text-jac-lime" />
                1-877-65-JACIT
              </a>
              <a
                href="tel:14303526085"
                className="text-2xl sm:text-3xl md:text-5xl font-bold hover:text-jac-lime transition-colors tracking-wide mt-2"
              >
                1-430-352-6085
              </a>
              <a
                href="mailto:james@jac-itfoundationrepair.com"
                className="flex items-center gap-2 text-gray-400 hover:text-jac-lime transition-colors mt-4 text-sm sm:text-base"
              >
                <Mail className="w-4 h-4" /> james@jac-itfoundationrepair.com
              </a>
            </div>

            <div className="mt-4 inline-block">
              <Link to="/contact" className="flex items-stretch group relative overflow-hidden border border-jac-lime">
                <div className="absolute inset-0 bg-jac-lime w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
                <div className="bg-black/30 group-hover:bg-transparent group-hover:text-jac-charcoal backdrop-blur-sm text-jac-lime px-6 sm:px-10 py-4 sm:py-5 font-bold tracking-wide text-sm sm:text-xl flex items-center justify-center relative z-10 transition-all duration-300 uppercase">
                  Schedule Free Inspection
                </div>
                <div className="bg-jac-lime/10 group-hover:bg-transparent border-l border-jac-lime/30 group-hover:border-jac-lime/0 px-4 sm:px-6 flex items-center justify-center relative z-10 transition-colors duration-300">
                  <ArrowRight className="w-6 h-6 text-jac-lime group-hover:text-jac-charcoal group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
