/**
 * Post-build prerenderer.
 *
 * The site is a client-rendered SPA, which means every URL is served the exact
 * same empty index.html shell. Search engines can execute JavaScript, but they
 * do it on a delay and inconsistently, and most non-Google crawlers (Bing,
 * social preview bots, AI crawlers) do far less of it. For a brand new set of
 * location pages competing on local intent, that is the difference between
 * being indexed in days and being indexed in months — or not at all.
 *
 * This script writes one real static HTML file per route, containing:
 *   - a route-specific <title>, meta description, canonical and OG/Twitter tags
 *   - route-specific JSON-LD (LocalBusiness / FAQPage / BreadcrumbList)
 *   - for location pages, the actual page copy as crawlable HTML in #root
 *
 * React still boots normally and takes over the DOM on mount; PageSEO and JsonLd
 * both upsert by selector/id, so they reuse these tags rather than duplicating
 * them. The static copy is generated from src/data/locations.ts — the same
 * source the React components render from — so the two cannot drift apart.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { LOCATIONS, type Location } from '../src/data/locations.ts';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const SITE_URL = 'https://www.jac-itfoundationrepair.com';
const DEFAULT_OG_IMAGE = '/jacitlogohorizontal.png';

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** JSON-LD lives inside a <script> block, so only </script> and HTML comments need neutralizing. */
function escapeJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

interface RouteMeta {
  /** URL path, no trailing slash. '' means the site root. */
  path: string;
  title: string;
  description: string;
  image?: string;
  ogType?: string;
  keywords?: string;
  /** Extra <script type="application/ld+json"> blocks, keyed by JsonLd id */
  jsonLd?: { id: string; data: object }[];
  /** Crawlable body markup injected into #root */
  body?: string;
}

// ---------------------------------------------------------------------------
// schema builders — mirror the React components exactly
// ---------------------------------------------------------------------------

function locationBusinessSchema(location: Location) {
  const pageUrl = `${SITE_URL}/locations/${location.slug}`;
  const areaServedNames = [location.city, ...location.nearby.map((n) => n.name)];

  return {
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
    areaServed: areaServedNames.map((name) => ({ '@type': 'City', name: `${name}, TX` })),
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
}

function locationBreadcrumbSchema(location: Location) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE_URL}/locations` },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${location.city}, TX`,
        item: `${SITE_URL}/locations/${location.slug}`,
      },
    ],
  };
}

function locationFaqSchema(location: Location) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

// ---------------------------------------------------------------------------
// crawlable body markup
// ---------------------------------------------------------------------------

function locationBody(location: Location): string {
  const others = LOCATIONS.filter((l) => l.slug !== location.slug);

  return `
<article>
  <nav aria-label="Breadcrumb">
    <ol>
      <li><a href="/">Home</a></li>
      <li><a href="/locations">Service Areas</a></li>
      <li>${escapeHtml(location.city)}, TX</li>
    </ol>
  </nav>

  <h1>Foundation Repair &amp; House Leveling in ${escapeHtml(location.city)}, TX</h1>
  <p><strong>${escapeHtml(location.tagline)}</strong></p>
  <p>${escapeHtml(location.county)}, ${escapeHtml(location.region)} &middot;
     <a href="tel:18776552248">1-877-65-JACIT</a> &middot; Free Inspections &amp; Estimates</p>

  <h2>Trusted ${escapeHtml(location.city)} Foundation Contractors</h2>
  ${location.intro.map((p) => `<p>${escapeHtml(p)}</p>`).join('\n  ')}

  <h3>${escapeHtml(location.soil.heading)}</h3>
  <p>${escapeHtml(location.soil.body)}</p>

  <h2>${escapeHtml(location.city)} Service Snapshot</h2>
  <dl>
    <dt>County</dt><dd>${escapeHtml(location.county)}</dd>
    <dt>ZIP Codes Served</dt><dd>${escapeHtml(location.zips.join(', '))}</dd>
    <dt>Areas We Work</dt><dd>${escapeHtml(location.neighborhoods.join(', '))}</dd>
    <dt>Near</dt><dd>${escapeHtml(location.landmarks.join(', '))}</dd>
    <dt>Hours</dt><dd>Monday&ndash;Friday, 8:00 AM &ndash; 6:00 PM</dd>
  </dl>

  <h2>Foundation Warning Signs in ${escapeHtml(location.city)}</h2>
  <ul>
    ${location.localSigns.map((s) => `<li>${escapeHtml(s)}</li>`).join('\n    ')}
  </ul>

  <h2>Our Services in ${escapeHtml(location.city)}, Texas</h2>
  ${location.services
    .map(
      (s) => `<h3><a href="/services/${s.slug}">${escapeHtml(s.name)} in ${escapeHtml(
        location.city
      )}</a></h3>
  <p>${escapeHtml(s.blurb)}</p>`
    )
    .join('\n  ')}

  <h2>Communities We Serve Around ${escapeHtml(location.city)}</h2>
  <ul>
    ${location.nearby
      .map((n) =>
        n.slug
          ? `<li><a href="/locations/${n.slug}">${escapeHtml(n.name)}, TX</a></li>`
          : `<li>${escapeHtml(n.name)}, TX</li>`
      )
      .join('\n    ')}
  </ul>

  <h2>${escapeHtml(location.city)} Foundation Questions</h2>
  ${location.faqs
    .map(
      (faq) => `<h3>${escapeHtml(faq.question)}</h3>
  <p>${escapeHtml(faq.answer)}</p>`
    )
    .join('\n  ')}

  <h2>Other East Texas Service Areas</h2>
  <ul>
    ${others
      .map(
        (o) =>
          `<li><a href="/locations/${o.slug}">Foundation Repair in ${escapeHtml(o.city)}, TX</a></li>`
      )
      .join('\n    ')}
    <li><a href="/locations">View all service areas</a></li>
  </ul>

  <h2>Level up your ${escapeHtml(location.city)} home &mdash; call Jac-It today</h2>
  <p>Free inspection, free elevation survey and a written estimate with no obligation, anywhere in
     ${escapeHtml(location.county)}.</p>
  <p>
    <a href="tel:18776552248">1-877-65-JACIT</a> &middot;
    <a href="tel:14303526085">1-430-352-6085</a> &middot;
    <a href="mailto:james@jac-itfoundationrepair.com">james@jac-itfoundationrepair.com</a> &middot;
    <a href="/contact">Schedule a free inspection</a>
  </p>
</article>`.trim();
}

function serviceAreasBody(): string {
  return `
<article>
  <nav aria-label="Breadcrumb">
    <ol>
      <li><a href="/">Home</a></li>
      <li>Service Areas</li>
    </ol>
  </nav>

  <h1>East Texas Service Areas</h1>
  <p><strong>25+ Years Across Deep East Texas</strong></p>

  <h2>One Region, Very Different Ground</h2>
  <p>East Texas is not a single soil type, and foundation repair here should not be a single approach.
     The sandy iron-ore ridges around Tyler behave nothing like the expansive clays west of Palestine,
     and neither behaves like the saturated bottomland soils near Lake Livingston. A method that holds
     in one county can fail in the next.</p>
  <p>That is why we build each repair plan around the property in front of us &mdash; elevation survey
     first, drainage assessment second, method chosen third. Below is where we work, and what makes the
     ground in each place its own problem.</p>

  <h2>Cities We Serve</h2>
  <ul>
    ${LOCATIONS.map(
      (l) =>
        `<li><a href="/locations/${l.slug}">Foundation Repair &amp; House Leveling in ${escapeHtml(
          l.city
        )}, TX</a> &mdash; ${escapeHtml(l.county)}. ${escapeHtml(l.cardSummary)}</li>`
    ).join('\n    ')}
  </ul>

  <h2>Not on the list?</h2>
  <p>We cover a wide radius across East Texas and Deep East Texas, including hundreds of small
     communities and rural acreage properties between these cities. If you do not see your town, call
     &mdash; we very likely still service it. <a href="tel:18776552248">1-877-65-JACIT</a></p>
</article>`.trim();
}

// ---------------------------------------------------------------------------
// routes
// ---------------------------------------------------------------------------

/**
 * Metadata for the pre-existing pages. These must stay in sync with the
 * <PageSEO /> props inside each page component.
 */
const STATIC_ROUTES: RouteMeta[] = [
  {
    path: '',
    title: 'Jac-It House Leveling & Foundation Repair',
    description:
      'Providing dependable foundation repair and house leveling services across Deep East Texas for over 25 years.',
  },
  {
    path: '/about',
    title: 'About Us | Jac-It House Leveling & Foundation Repair',
    description:
      'Learn about Jac-It House Leveling & Foundation Repair — 25+ years of dependable foundation repair and house leveling across Deep East Texas.',
  },
  {
    path: '/gallery',
    title: 'Project Gallery | Jac-It House Leveling & Foundation Repair',
    description:
      'See completed foundation repair, house leveling and pier & beam projects from Jac-It House Leveling & Foundation Repair across East Texas.',
  },
  {
    path: '/contact',
    title: 'Contact Us | Jac-It House Leveling & Foundation Repair',
    description:
      'Contact Jac-It House Leveling & Foundation Repair for a free foundation inspection and estimate anywhere in Deep East Texas. Call 1-877-65-JACIT.',
  },
  {
    path: '/services/pier-and-beam',
    title: 'Pier & Beam Repair | Jac-It House Leveling & Foundation Repair',
    description:
      'Professional pier and beam repair across Deep East Texas. We repair, replace and level beams and piers for lasting stability.',
  },
  {
    path: '/services/foundation-repair',
    title: 'Foundation Repair | Jac-It House Leveling & Foundation Repair',
    description:
      'Expert foundation inspections, repairs and reinforcement designed for East Texas soils and climate.',
  },
  {
    path: '/services/slab-repair',
    title: 'Slab Repair | Jac-It House Leveling & Foundation Repair',
    description:
      'Concrete slab foundation repair and lifting across Deep East Texas from Jac-It House Leveling & Foundation Repair.',
  },
  {
    path: '/services/house-leveling',
    title: 'House Leveling | Jac-It House Leveling & Foundation Repair',
    description:
      'Restore balance and stability to your home with professional house leveling from Jac-It House Leveling & Foundation Repair in Deep East Texas.',
  },
  {
    path: '/services/press-piers',
    title: 'Press Piers | Jac-It House Leveling & Foundation Repair',
    description:
      'Hydraulically driven press piers that reach stable bearing soil to support and stabilize East Texas foundations.',
  },
  {
    path: '/services/repair-methods',
    title: 'Repair Methods | Jac-It House Leveling & Foundation Repair',
    description:
      'The foundation repair methods we use, how each one works and when it is the right choice for your East Texas home.',
  },
  {
    path: '/services/foam-injection',
    title: 'Foam Injection | Jac-It House Leveling & Foundation Repair',
    description:
      'Polyurethane foam injection to fill voids and lift settled slabs with minimal excavation across Deep East Texas.',
  },
  {
    path: '/services/drainage-solutions',
    title: 'Drainage Solutions | Jac-It House Leveling & Foundation Repair',
    description:
      'French drains, grading and moisture barriers that protect East Texas foundations from water damage and future settling.',
  },
  {
    path: '/services/root-barriers',
    title: 'Root Barriers | Jac-It House Leveling & Foundation Repair',
    description:
      'Root barrier installation to stop trees from drawing moisture out from beneath your East Texas foundation.',
  },
  {
    path: '/services/commercial-prep',
    title: 'Commercial Prep | Jac-It House Leveling & Foundation Repair',
    description:
      'Commercial foundation preparation and structural support services from Jac-It House Leveling & Foundation Repair.',
  },
];

function buildRoutes(): RouteMeta[] {
  const serviceAreasHub: RouteMeta = {
    path: '/locations',
    title: 'East Texas Service Areas | Jac-It House Leveling & Foundation Repair',
    description:
      'Foundation repair and house leveling across East Texas — Tyler, Longview, Lufkin, Nacogdoches, Marshall, Livingston, Huntsville and more. Free inspections.',
    image: '/jacitgallery.jpeg',
    keywords:
      'East Texas foundation repair, Deep East Texas house leveling, foundation repair near me, Tyler Longview Lufkin Nacogdoches foundation contractor',
    body: serviceAreasBody(),
    jsonLd: [
      {
        id: 'service-areas-list',
        data: {
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
        },
      },
      {
        id: 'service-areas-breadcrumb',
        data: {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE_URL}/locations` },
          ],
        },
      },
    ],
  };

  const locationRoutes: RouteMeta[] = LOCATIONS.map((location) => ({
    path: `/locations/${location.slug}`,
    title: location.metaTitle,
    description: location.metaDescription,
    image: location.heroImage,
    ogType: 'business.business',
    keywords: `foundation repair ${location.city} TX, house leveling ${location.city}, pier and beam repair ${location.city} Texas, slab repair ${location.county}, foundation company ${location.city}`,
    body: locationBody(location),
    jsonLd: [
      { id: `location-business-${location.slug}`, data: locationBusinessSchema(location) },
      { id: `location-breadcrumb-${location.slug}`, data: locationBreadcrumbSchema(location) },
      { id: `location-faq-${location.slug}`, data: locationFaqSchema(location) },
    ],
  }));

  return [...STATIC_ROUTES, serviceAreasHub, ...locationRoutes];
}

// ---------------------------------------------------------------------------
// html assembly
// ---------------------------------------------------------------------------

function renderRoute(shell: string, route: RouteMeta): string {
  const url = `${SITE_URL}${route.path || '/'}`;
  const imageUrl = `${SITE_URL}${route.image || DEFAULT_OG_IMAGE}`;

  const headTags = [
    `<title>${escapeHtml(route.title)}</title>`,
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
    route.keywords ? `<meta name="keywords" content="${escapeHtml(route.keywords)}" />` : '',
    `<link rel="canonical" href="${escapeHtml(url)}" />`,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(url)}" />`,
    `<meta property="og:type" content="${escapeHtml(route.ogType || 'website')}" />`,
    `<meta property="og:image" content="${escapeHtml(imageUrl)}" />`,
    `<meta property="og:site_name" content="Jac-It House Leveling" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`,
    ...(route.jsonLd || []).map(
      (block) =>
        `<script type="application/ld+json" id="ld-json-${escapeHtml(block.id)}">${escapeJsonLd(
          block.data
        )}</script>`
    ),
  ]
    .filter(Boolean)
    .join('\n    ');

  // Strip the shell's generic head tags so we do not emit duplicates.
  let html = shell
    .replace(/\s*<title>[\s\S]*?<\/title>/i, '')
    .replace(/\s*<meta\s+name="description"[^>]*>/i, '')
    .replace(/\s*<meta\s+property="og:title"[^>]*>/i, '')
    .replace(/\s*<meta\s+property="og:description"[^>]*>/i, '')
    .replace(/\s*<meta\s+property="og:site_name"[^>]*>/i, '');

  html = html.replace('</head>', `  ${headTags}\n  </head>`);

  if (route.body) {
    html = html.replace('<div id="root"></div>', `<div id="root">${route.body}</div>`);
  }

  return html;
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------

function main() {
  const shellPath = join(DIST, 'index.html');
  if (!existsSync(shellPath)) {
    throw new Error(`prerender: ${shellPath} not found — run "vite build" first.`);
  }

  const shell = readFileSync(shellPath, 'utf8');
  const routes = buildRoutes();

  for (const route of routes) {
    const html = renderRoute(shell, route);
    // '' -> dist/index.html, '/locations/tyler-tx' -> dist/locations/tyler-tx.html
    const outPath = route.path ? join(DIST, `${route.path}.html`) : join(DIST, 'index.html');
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, 'utf8');
  }

  // Regenerate the sitemap so it can never fall out of sync with the routes.
  const today = new Date().toISOString().slice(0, 10);
  const priorityFor = (path: string) => {
    if (path === '') return '1.0';
    if (path === '/locations') return '0.9';
    if (path.startsWith('/locations/')) return '0.9';
    return path.startsWith('/services/') ? '0.7' : '0.8';
  };
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.path || '/'}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.path === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${priorityFor(route.path)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
  writeFileSync(join(DIST, 'sitemap.xml'), sitemap, 'utf8');

  console.log(`prerender: wrote ${routes.length} static HTML routes + sitemap.xml`);
}

main();
