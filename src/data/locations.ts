/**
 * Location (service area) content.
 *
 * Every entry is written to stand on its own as a unique, indexable page:
 * distinct soil/geology notes, distinct housing stock, distinct neighborhoods,
 * distinct FAQs and distinct service copy. Nothing here is boilerplate that
 * gets reused across cities — duplicate copy across near-identical city pages
 * is the single fastest way to get a location page set ignored by search.
 */

export interface LocationFaq {
  question: string;
  answer: string;
}

export interface LocationService {
  /** Route slug under /services */
  slug: string;
  name: string;
  /** City-specific reason this service matters here */
  blurb: string;
}

export interface NearbyPlace {
  name: string;
  /** Set when the nearby town has its own location page */
  slug?: string;
}

export interface Location {
  slug: string;
  city: string;
  county: string;
  region: string;
  lat: number;
  lng: number;
  zips: string[];
  heroImage: string;
  bodyImage: string;
  /** Short uppercase line under the H1 */
  tagline: string;
  /** One-sentence summary used on the /locations hub cards */
  cardSummary: string;
  metaTitle: string;
  metaDescription: string;
  /** Opening body copy — three unique paragraphs per city */
  intro: string[];
  soil: {
    heading: string;
    body: string;
  };
  /** What foundation trouble actually looks like in this specific city */
  localSigns: string[];
  neighborhoods: string[];
  landmarks: string[];
  nearby: NearbyPlace[];
  services: LocationService[];
  faqs: LocationFaq[];
}

export const LOCATIONS: Location[] = [
  {
    slug: 'tyler-tx',
    city: 'Tyler',
    county: 'Smith County',
    region: 'East Texas',
    lat: 32.3513,
    lng: -95.3011,
    zips: ['75701', '75702', '75703', '75704', '75707', '75708', '75709'],
    heroImage: '/jacitgallery.jpeg',
    bodyImage: '/Survey-Automatic-Level-on-Tripod.H03.2k.png',
    tagline: 'Foundation Repair in the Rose Capital',
    cardSummary:
      'Sandy loam over dense clay on rolling iron-ore ridges — Tyler foundations fail from erosion and washout far more often than from clay swell.',
    metaTitle: 'Foundation Repair & House Leveling in Tyler, TX | Jac-It',
    metaDescription:
      'Foundation repair and house leveling in Tyler, TX. Pier & beam, slab lifting and drainage built for Smith County soil. Free inspection — 1-877-65-JACIT.',
    intro: [
      "Tyler sits on rolling, iron-ore ridges where sandy loam sits over a dense clay subsoil, and that layered profile is exactly what puts foundations here under stress. Rain moves fast through the sandy top layer, then stalls on the clay beneath it. The result is water that travels sideways under a home rather than draining away, softening bearing soil on the downhill side of the house while the uphill side stays put.",
      "That pattern shows up differently depending on which part of Tyler you're in. The older pier and beam homes around the Azalea and Charnwood districts tend to develop sagging interior floors and separated beam joints as original wood piers give up moisture protection. Newer slab construction along the Old Bullard Road and Cumberland corridors more often shows corner drop and diagonal sheetrock cracking where the slab edge overhangs poorly compacted fill.",
      "Jac-It House Leveling & Foundation Repair has worked Smith County homes for more than 25 years, and we approach a Tyler house by reading its lot before we touch its structure. Elevation survey first, drainage assessment second, repair plan third — because on Tyler's slopes, lifting a house without correcting what moved it just buys a few seasons.",
    ],
    soil: {
      heading: 'Why Tyler Foundations Move',
      body: "Smith County's uplands are dominated by deep sandy and loamy surface soils over firmer clay horizons. Sand doesn't swell the way heavy clay does, so Tyler homeowners often assume they're safe from foundation movement — but the real risk here is erosion and washout. Water that channels beneath a footing carries fine material with it, leaving voids that the foundation eventually settles into. Add Tyler's noticeable grade changes, mature pines and oaks pulling moisture from beneath slabs during dry summers, and you get settlement that is uneven rather than uniform. Uneven settlement is what cracks brick and racks door frames.",
    },
    localSigns: [
      'Downhill corners dropping on sloped lots in Hollytree, The Woods and Gresham',
      'Interior floors sloping toward the center in 1920s–1940s Azalea District pier and beam homes',
      'Soil washing out from under slab edges after heavy spring storms',
      'Gaps opening between brick veneer and window frames on the sun-exposed south wall',
      'Tree roots from mature pines drawing moisture out from under slab perimeters in late summer',
    ],
    neighborhoods: [
      'Azalea District',
      'Charnwood Historic District',
      'Hollytree',
      'The Woods',
      'Cumberland',
      'Gresham',
      'Flint',
      'Noonday',
    ],
    landmarks: [
      'Tyler Rose Garden',
      'Bergfeld Park',
      'UT Tyler',
      'Tyler Junior College',
      'Lake Tyler',
    ],
    nearby: [
      { name: 'Whitehouse' },
      { name: 'Bullard' },
      { name: 'Lindale' },
      { name: 'Chapel Hill' },
      { name: 'Troup' },
      { name: 'Arp' },
      { name: 'Hideaway' },
      { name: 'Jacksonville', slug: 'jacksonville-tx' },
    ],
    services: [
      {
        slug: 'house-leveling',
        name: 'House Leveling',
        blurb:
          "Precision lifting for Tyler homes that have settled unevenly across a sloped lot, bringing floors back to a consistent plane before finishes are repaired.",
      },
      {
        slug: 'pier-and-beam',
        name: 'Pier & Beam Repair',
        blurb:
          'Beam, joist and pier replacement for Tyler\'s older historic-district housing stock where original wood supports have taken on moisture damage.',
      },
      {
        slug: 'slab-repair',
        name: 'Slab Repair',
        blurb:
          'Slab lifting and stabilization for the newer subdivisions south and west of Tyler where perimeter settlement follows fill placement.',
      },
      {
        slug: 'drainage-solutions',
        name: 'Drainage Solutions',
        blurb:
          "French drains and grading corrections that stop hillside runoff from channeling under a Tyler foundation in the first place.",
      },
      {
        slug: 'root-barriers',
        name: 'Root Barriers',
        blurb:
          'Barrier installation to keep the mature pines and oaks Tyler is known for from pulling moisture out from beneath your slab perimeter.',
      },
    ],
    faqs: [
      {
        question: 'What causes foundation problems in Tyler, TX?',
        answer:
          "In Tyler the dominant cause is erosion and washout rather than clay swelling. Sandy surface soils drain quickly onto a denser clay layer below, so water runs laterally under the home, carries away fine material and leaves voids the foundation settles into. Tyler's sloped lots and heavy tree cover both make this worse.",
      },
      {
        question: 'Do you work on older homes in the Azalea District?',
        answer:
          "Yes. Historic Tyler homes are typically pier and beam with original wood supports, and they are some of our most common projects. We replace deteriorated piers and beams, re-shim to a level plane and address the crawlspace moisture that caused the damage — while working carefully around original finishes, porches and landscaping.",
      },
      {
        question: 'How much does foundation repair cost in Tyler?',
        answer:
          'Cost depends on how much of the structure has moved, the foundation type and how many support points are needed. We will not quote a number without seeing the home. Our inspection and written estimate are free, and the estimate itemizes what is being done so you can compare it to any other bid.',
      },
      {
        question: 'How long does a foundation repair take in Tyler?',
        answer:
          'Most residential projects in the Tyler area take one to three days on site. Larger homes, deep pier installations or projects that include drainage work can run longer. We give you a schedule with the estimate rather than after the crew arrives.',
      },
      {
        question: 'Do you serve areas outside the Tyler city limits?',
        answer:
          'We do. Our Smith County work regularly includes Whitehouse, Bullard, Lindale, Flint, Noonday, Chapel Hill, Troup, Arp and Hideaway, plus rural acreage properties throughout the county.',
      },
      {
        question: 'Is the Tyler inspection really free?',
        answer:
          'Yes. We come out, take elevation readings across the home, look at the drainage and crawlspace or slab perimeter, and give you a written assessment and estimate at no cost and with no obligation. Call 1-877-65-JACIT to schedule.',
      },
    ],
  },

  {
    slug: 'longview-tx',
    city: 'Longview',
    county: 'Gregg County',
    region: 'East Texas',
    lat: 32.5007,
    lng: -94.7405,
    zips: ['75601', '75602', '75603', '75604', '75605'],
    heroImage: '/jacitgallery2.jpeg',
    bodyImage: '/Construction-Foundation-Pit.H03.2k.png',
    tagline: 'Stabilizing Gregg County Homes',
    cardSummary:
      'A city full of 1930s oil-boom pier and beam homes sitting on Sabine-area soils with a genuinely high water table.',
    metaTitle: 'Foundation Repair & House Leveling in Longview, TX | Jac-It',
    metaDescription:
      'Foundation repair and house leveling in Longview, TX. Boom-era pier & beam homes, slab settlement and wet-crawlspace drainage. Free Gregg County inspection.',
    intro: [
      "Longview grew fast during the East Texas oil boom, and a large share of the city's housing stock still dates to that period. Those 1930s and 1940s homes were built on pier and beam foundations using materials and spacing standards that have had eighty-plus years of Gregg County humidity to work against them. Sill plates rot, wood piers sink into softened soil, and floors develop the pronounced rolls and dips homeowners describe as walking through a boat.",
      "The other half of the Longview picture is water. The city sits near the Sabine River drainage, and neighborhoods that back up to creeks and bottomland see a genuinely high water table. Soils that stay saturated lose bearing capacity, and a footing that was adequate in 1946 is not adequate in soil that never fully dries out. This is why Longview foundation problems tend to appear in wet years rather than drought years — the opposite of what homeowners in clay-dominant parts of Texas expect.",
      "We have been leveling and repairing homes across Longview, Greggton, Pine Tree, Spring Hill and Judson for over 25 years. Owner James Wilson is on site for the lift on Longview projects, because raising a boom-era house that has settled in four directions at once is not a job you hand to a crew and drive away from.",
    ],
    soil: {
      heading: 'The Longview Soil and Water Problem',
      body: "Gregg County soils run from sandy uplands to genuinely wet clay-rich bottomland, sometimes within the same subdivision. Where clay content is high, seasonal shrink and swell moves footings up and down. Where the water table is high, saturated soil simply cannot carry the load it once did and the structure settles into it. Longview's older neighborhoods compound this because many were built before modern drainage requirements — downspouts discharge at the foundation, lots are graded flat or toward the house, and there is nowhere for storm water to go except under the structure.",
    },
    localSigns: [
      'Pronounced floor rolls and dips in 1930s–1950s oil-boom-era pier and beam homes',
      'Persistent standing water or a damp crawlspace in neighborhoods near creek bottoms',
      'Rotted sill plates and sunken wood piers in homes that have never had crawlspace drainage',
      'Doors that stick badly in wet months and free up in dry months',
      'Slab cracking in South Longview and Judson subdivisions built over mixed fill',
    ],
    neighborhoods: [
      'Pine Tree',
      'Spring Hill',
      'Judson',
      'Greggton',
      'South Longview',
      'Oak Forest',
      'Downtown Historic District',
    ],
    landmarks: [
      'LeTourneau University',
      'Longview Arboretum and Nature Center',
      'Maude Cobb Convention Center',
      'Gregg County Historical Museum',
    ],
    nearby: [
      { name: 'Kilgore' },
      { name: 'White Oak' },
      { name: 'Gladewater' },
      { name: 'Hallsville' },
      { name: 'Lakeport' },
      { name: 'Easton' },
      { name: 'Marshall', slug: 'marshall-tx' },
      { name: 'Henderson', slug: 'henderson-tx' },
    ],
    services: [
      {
        slug: 'pier-and-beam',
        name: 'Pier & Beam Repair',
        blurb:
          "Full pier, beam and joist rehabilitation for Longview's oil-boom housing stock, replacing failed wood supports with concrete piers and steel shims.",
      },
      {
        slug: 'house-leveling',
        name: 'House Leveling',
        blurb:
          'Controlled multi-point lifting for Longview homes that have settled unevenly over decades of wet-and-dry cycling.',
      },
      {
        slug: 'drainage-solutions',
        name: 'Drainage Solutions',
        blurb:
          'French drains, downspout extensions and crawlspace moisture barriers for Longview lots that sit low or drain toward the house.',
      },
      {
        slug: 'foundation-repair',
        name: 'Foundation Repair',
        blurb:
          'Structural evaluation and repair across Gregg County, from single settled corners to whole-structure realignment.',
      },
      {
        slug: 'press-piers',
        name: 'Press Piers',
        blurb:
          'Hydraulically driven concrete piers that reach stable bearing soil beneath Longview\'s softer saturated upper layers.',
      },
    ],
    faqs: [
      {
        question: 'Why do so many Longview homes need leveling?',
        answer:
          "Longview has an unusually large stock of pier and beam homes built during the 1930s and 1940s oil boom. Those foundations used wood piers and spacing that have not held up to eighty years of Gregg County humidity and a high water table. Add lots that were graded before modern drainage standards and you get widespread, gradual settlement.",
      },
      {
        question: 'My crawlspace stays wet. Is that a foundation problem?',
        answer:
          'It is a foundation problem in progress. Standing water or persistently damp soil under a Longview home rots sill plates and beams, softens the bearing soil under the piers and invites structural decay. We address the water with drainage and a vapor barrier at the same time we repair the structure, because repairing one without the other does not last.',
      },
      {
        question: 'Do you work in Kilgore, White Oak and Gladewater too?',
        answer:
          'Yes. Our Gregg County service area covers Longview, Kilgore, White Oak, Gladewater, Lakeport, Easton and Hallsville, along with rural properties in between.',
      },
      {
        question: 'Will you have to take up my floors to level the house?',
        answer:
          "In most Longview pier and beam projects, no. The work happens from the crawlspace beneath the home. If joists or subfloor sections are rotted through, those specific areas have to be replaced, and we will show you exactly what needs replacing before we start.",
      },
      {
        question: 'How soon can you inspect my Longview home?',
        answer:
          'Usually within a few days. Call 1-877-65-JACIT or 1-430-352-6085 and we will schedule the free inspection. You get elevation readings, an explanation of what is moving and a written no-obligation estimate.',
      },
      {
        question: 'Do you guarantee foundation work in Longview?',
        answer:
          'Yes. Our lifting work carries a long-term warranty. We will walk you through exactly what the warranty covers before you sign anything, in writing.',
      },
    ],
  },

  {
    slug: 'lufkin-tx',
    city: 'Lufkin',
    county: 'Angelina County',
    region: 'Deep East Texas',
    lat: 31.3382,
    lng: -94.7291,
    zips: ['75901', '75904'],
    heroImage: '/jacitgallery3.jpeg',
    bodyImage: '/Concrete-Pillar.H03.2k.png',
    tagline: 'Piney Woods Foundation Specialists',
    cardSummary:
      'Close to fifty inches of rain a year, sand perched over tight clay, and pine roots pulling moisture from one side of the house at a time.',
    metaTitle: 'Foundation Repair & House Leveling in Lufkin, TX | Jac-It',
    metaDescription:
      'House leveling and foundation repair in Lufkin, TX. Built for Angelina County rainfall, sandy-over-clay soil and pine roots. Free inspection, 25+ years.',
    intro: [
      "Lufkin sits in the heart of the Piney Woods, and the same conditions that grow timber that well are hard on foundations. Angelina County receives close to fifty inches of rain in a typical year — among the wettest areas in Texas — and the soil profile here is a deep sandy surface layer sitting on a tight clay subsoil that water does not readily pass through. Water saturates the top layer, perches on the clay and stays there.",
      "Layer mature pine and hardwood root systems on top of that. During a dry East Texas summer, a large pine within twenty or thirty feet of a house pulls a remarkable volume of moisture out of the soil, and it does so on one side of the structure only. Soil under that side contracts, the foundation follows it down, and by fall the homeowner is looking at a stair-step crack in the brick that was not there in April. The next wet season the soil rebounds and the crack partly closes — which is why so many Lufkin homeowners spend years assuming the problem is cosmetic.",
      "We have worked Lufkin, Diboll, Hudson, Huntington and the surrounding Angelina County communities for more than 25 years. On Lufkin projects we treat the tree line, the gutters and the grade as part of the foundation problem, because in this rainfall and this soil, they are.",
    ],
    soil: {
      heading: 'Rainfall, Sand Over Clay, and Pine Roots',
      body: "Angelina County's soils are typically deep and sandy at the surface with a firm clay subsoil beneath. That combination produces perched water: rain infiltrates fast, hits the clay and moves sideways instead of down. Under a house that means chronically wet bearing soil in wet seasons. Then in drought, the region's dense tree cover reverses the situation aggressively, drawing moisture out and letting the soil contract. The seasonal swing between those two states is what moves Lufkin foundations, and because trees and downspouts are never evenly distributed around a house, the movement is never even either.",
    },
    localSigns: [
      'Stair-step brick cracking that opens in late summer and partially closes after fall rains',
      'Crawlspaces that hold standing water for days after a heavy Angelina County rain',
      'Floor sag concentrated on the side of the house closest to large pines',
      'Rotted floor joists and subfloor in older homes without a vapor barrier',
      'Slab perimeter dropping where downspouts discharge directly against the foundation',
    ],
    neighborhoods: [
      'Old Town Lufkin',
      'Crown Colony',
      'Lufkin Heights',
      'Herty',
      'Redland',
      'Hudson',
    ],
    landmarks: [
      'Texas Forestry Museum',
      'Ellen Trout Zoo',
      'Angelina College',
      'The Museum of East Texas',
      'Sam Rayburn Reservoir',
    ],
    nearby: [
      { name: 'Diboll' },
      { name: 'Huntington' },
      { name: 'Hudson' },
      { name: 'Zavalla' },
      { name: 'Burke' },
      { name: 'Pollok' },
      { name: 'Nacogdoches', slug: 'nacogdoches-tx' },
      { name: 'Crockett' },
    ],
    services: [
      {
        slug: 'house-leveling',
        name: 'House Leveling',
        blurb:
          'Full-structure leveling for Lufkin homes that have settled on one side following seasonal moisture swings.',
      },
      {
        slug: 'pier-and-beam',
        name: 'Pier & Beam Repair',
        blurb:
          "Joist, beam and subfloor replacement for Angelina County crawlspaces where Lufkin's humidity has caused wood decay.",
      },
      {
        slug: 'drainage-solutions',
        name: 'Drainage Solutions',
        blurb:
          'French drains and vapor barriers sized for Lufkin rainfall, keeping water from perching under the structure.',
      },
      {
        slug: 'root-barriers',
        name: 'Root Barriers',
        blurb:
          'Root barrier installation to stop Piney Woods pines and hardwoods from drawing moisture out from under your foundation.',
      },
      {
        slug: 'foam-injection',
        name: 'Foam Injection',
        blurb:
          'Polyurethane injection to fill voids and lift settled slab sections without heavy excavation across the yard.',
      },
    ],
    faqs: [
      {
        question: 'Why do Lufkin foundations crack in summer and close up in winter?',
        answer:
          "That seasonal pattern is the signature of moisture-driven soil movement in the Piney Woods. Large trees pull water out of the soil during dry summers, the soil contracts and the foundation drops with it. Fall and winter rains rehydrate the soil, it expands and the structure partially rises again. It looks like the problem fixed itself, but each cycle does a little more damage.",
      },
      {
        question: 'Do trees really cause foundation damage in Lufkin?',
        answer:
          'They contribute significantly here. A mature pine near the house removes a lot of soil moisture during dry spells, and it does it from one side only. That produces uneven settlement. We often recommend a root barrier alongside the structural repair so the same conditions do not undo the work.',
      },
      {
        question: 'What is the wet crawlspace under my Lufkin home doing to it?',
        answer:
          'Standing water in an Angelina County crawlspace rots joists, beams and subfloor, and it softens the soil holding your piers. Homes here need a moisture barrier and a way for water to leave the crawlspace. We handle that as part of the repair rather than treating it as a separate job.',
      },
      {
        question: 'Which communities around Lufkin do you serve?',
        answer:
          'We regularly work Lufkin, Diboll, Hudson, Huntington, Zavalla, Burke, Pollok and Central, along with rural Angelina County properties and homes out toward Sam Rayburn.',
      },
      {
        question: 'How long does house leveling take in Lufkin?',
        answer:
          'Most Lufkin residential jobs run one to three days. If rotted joists or subfloor need replacing, or if drainage work is part of the scope, plan on longer. You will get a realistic schedule with the written estimate.',
      },
      {
        question: 'Do you offer free estimates in Lufkin?',
        answer:
          'Yes. Inspection and written estimate are free with no obligation anywhere in Angelina County. Call 1-877-65-JACIT to set it up.',
      },
    ],
  },

  {
    slug: 'nacogdoches-tx',
    city: 'Nacogdoches',
    county: 'Nacogdoches County',
    region: 'Deep East Texas',
    lat: 31.6035,
    lng: -94.6555,
    zips: ['75961', '75964', '75965'],
    heroImage: '/jacitgallery4.jpeg',
    bodyImage: '/Broken-Wall-Panel.H03.2k.png',
    tagline: "Foundation Care for the Oldest Town in Texas",
    cardSummary:
      'Redland clay loam and real topography under the oldest town in Texas — plus historic homes on original hand-set piers.',
    metaTitle: 'Foundation Repair & House Leveling in Nacogdoches, TX | Jac-It',
    metaDescription:
      'Foundation repair and house leveling in Nacogdoches, TX. Historic-home pier & beam work and redland clay soil expertise. Free inspection, 25+ years.',
    intro: [
      "Nacogdoches is the oldest town in Texas, and its housing stock proves it. The neighborhoods around Washington Square, Zion Hill and the North Street corridor include homes that predate anything approaching a modern foundation code — hand-set brick piers, original heart pine sills and beams, and crawlspaces that were never designed to be ventilated or drained. Those homes are worth preserving, and they need someone who will work around historic finishes rather than through them.",
      "The soil here is different from most of East Texas too. Nacogdoches sits on the redland belt — deep red sandy clay loam with meaningfully more clay content than the sandy uplands west of here. More clay means more shrink and swell, and Nacogdoches also has genuine topography. Homes on sloped lots around the SFA campus and the older hill neighborhoods deal with both seasonal soil movement and downslope water, which is a harder combination than either one alone.",
      "For over 25 years we have repaired and leveled homes throughout Nacogdoches County, from century-old houses in the historic districts to newer construction out toward Appleby and Douglass. On historic properties we document elevations carefully, lift slowly and in small increments, and protect original plaster and trim — because the whole point of the repair is to keep what makes the house worth fixing.",
    ],
    soil: {
      heading: 'Redland Soils and Nacogdoches Slopes',
      body: "The Nacogdoches redlands are deep, reddish sandy clay loams with a higher clay fraction than the surrounding Piney Woods sands. Higher clay content means the soil actually expands when it takes on water and contracts when it dries — the shrink-swell behavior that lifts and drops foundations seasonally. Combine that with the real elevation change across Nacogdoches and you get water traveling downhill through the soil profile, keeping the low side of a house wet while the high side dries and contracts. Historic homes with original brick piers set directly on grade have essentially no defense against this.",
    },
    localSigns: [
      'Original brick or stone piers settling unevenly beneath pre-1940 historic homes',
      'Seasonal door and window binding that tracks with wet and dry periods',
      'Sloped-lot homes near the SFA campus dropping on the downhill side',
      'Cracked plaster along ceiling-to-wall joints in older Washington Square properties',
      'Heart pine sills and beams showing rot at points of ground contact',
    ],
    neighborhoods: [
      'Washington Square Historic District',
      'Zion Hill',
      'North Street corridor',
      'Austin Heights',
      'Appleby',
    ],
    landmarks: [
      'Stephen F. Austin State University',
      'Old Stone Fort Museum',
      'Ruby M. Mize Azalea Garden',
      'Millard’s Crossing Historic Village',
      'Historic Downtown Nacogdoches',
    ],
    nearby: [
      { name: 'Appleby' },
      { name: 'Garrison' },
      { name: 'Cushing' },
      { name: 'Douglass' },
      { name: 'Chireno' },
      { name: 'Woden' },
      { name: 'Martinsville' },
      { name: 'Lufkin', slug: 'lufkin-tx' },
    ],
    services: [
      {
        slug: 'pier-and-beam',
        name: 'Pier & Beam Repair',
        blurb:
          'Careful pier, sill and beam restoration for Nacogdoches historic homes, preserving original structure wherever it can be saved.',
      },
      {
        slug: 'house-leveling',
        name: 'House Leveling',
        blurb:
          'Slow, incremental lifting for century-old Nacogdoches houses where a fast lift would crack original plaster and trim.',
      },
      {
        slug: 'foundation-repair',
        name: 'Foundation Repair',
        blurb:
          'Structural repair for redland-soil movement across Nacogdoches County, including newer construction toward Appleby and Douglass.',
      },
      {
        slug: 'drainage-solutions',
        name: 'Drainage Solutions',
        blurb:
          'Grade correction and drain installation for the sloped Nacogdoches lots where water arrives from uphill neighbors.',
      },
      {
        slug: 'repair-methods',
        name: 'Repair Methods',
        blurb:
          'A plain explanation of which technique we would use on your Nacogdoches home and why, before any work begins.',
      },
    ],
    faqs: [
      {
        question: 'Can you level a historic home in Nacogdoches without damaging it?',
        answer:
          'Yes, and it is a large part of what we do here. Historic homes get lifted slowly and in small increments across many support points at once, with elevations checked continuously. The goal is to bring the structure back into plane at a rate the original plaster, trim and masonry can tolerate. We will tell you honestly if a section is too far gone to save.',
      },
      {
        question: 'What is different about Nacogdoches soil?',
        answer:
          'Nacogdoches sits on the redland belt — deep red sandy clay loam with more clay than the sandy soils common further west in East Texas. That extra clay content means the soil swells when wet and shrinks when dry, so foundations here move seasonally in a way that pure sandy sites do not.',
      },
      {
        question: 'My house is on a hill near SFA. Does that change the repair?',
        answer:
          'It does. On a sloped Nacogdoches lot, water moving downhill through the soil keeps the low side of the house wet while the uphill side dries out. Leveling alone will not hold if that continues, so the repair plan normally includes intercepting the water with drainage before or alongside the structural work.',
      },
      {
        question: 'Do you replace original wood beams or repair them?',
        answer:
          'Whichever the wood justifies. Sound heart pine is worth keeping and we will keep it. Members with rot at ground contact points or structural checking get replaced. We show you the condition of each affected member before anything is cut.',
      },
      {
        question: 'Which Nacogdoches County towns do you serve?',
        answer:
          'Nacogdoches, Appleby, Garrison, Cushing, Douglass, Chireno, Woden, Martinsville and Etoile, plus rural properties throughout the county.',
      },
      {
        question: 'How do I schedule an inspection in Nacogdoches?',
        answer:
          'Call 1-877-65-JACIT or 1-430-352-6085, or email james@jac-itfoundationrepair.com. The inspection and written estimate are free with no obligation.',
      },
    ],
  },

  {
    slug: 'henderson-tx',
    city: 'Henderson',
    county: 'Rusk County',
    region: 'East Texas',
    lat: 32.1532,
    lng: -94.7994,
    zips: ['75652', '75654'],
    heroImage: '/jacitgallery5.png',
    bodyImage: '/presspiers.png',
    tagline: 'Rusk County Foundation Repair',
    cardSummary:
      'Rural acreage homes and owner-built additions on separate footings, where the damage concentrates at the seam between old and new.',
    metaTitle: 'Foundation Repair & House Leveling in Henderson, TX | Jac-It',
    metaDescription:
      'Foundation repair and house leveling in Henderson, TX. Rural pier & beam homes, acreage properties and settled additions across Rusk County. Free inspection.',
    intro: [
      "Henderson sits at the heart of the old East Texas Oil Field, and Rusk County's housing reflects it — a large number of homes built in the boom years on modest pier foundations, plus a great many rural houses on acreage where the nearest neighbor is a quarter mile away. Rural homes have a particular foundation history: they were often built by their owners, added onto more than once, and the additions were rarely tied into the original foundation properly.",
      "That matters, because an addition on its own separate footing moves independently of the house it is attached to. The seam between old and new is where Henderson homeowners see the cracking — along the joint where a room was added, across the ceiling at the transition, or as a floor that steps down noticeably when you cross from the original house into the addition. Leveling that kind of structure means bringing two foundations that have moved apart back into a single plane.",
      "We have worked Henderson, Tatum, Overton, Mount Enterprise, New London and rural Rusk County for more than 25 years. Distance is not an obstacle — we route crews across the county regularly, and acreage properties get the same elevation survey and the same written estimate as a house in town.",
    ],
    soil: {
      heading: 'Rusk County Soil and Add-On Construction',
      body: "Rusk County soils are largely sandy uplands with clay lenses running through them, which produces one of the more frustrating patterns in East Texas: one part of a house sits on soil that behaves one way and another part sits on soil that behaves differently. Add the region's very common history of owner-built additions on separate, shallower footings, and structures end up with two or three independent foundation systems under one roof. Each responds differently to the same rainfall. The visible damage almost always concentrates at the joints between them.",
    },
    localSigns: [
      'A noticeable step down in the floor where an addition meets the original house',
      'Cracking that runs along the seam between old construction and an added room',
      'Rural pier and beam homes with block piers that have sunk into softened soil',
      'Porches and carports pulling away from the main structure',
      'Sagging floors in oilfield-era homes with undersized or widely spaced piers',
    ],
    neighborhoods: [
      'Downtown Henderson',
      'Lake Forest',
      'Tatum',
      'Mount Enterprise',
      'Laneville',
      'New London',
    ],
    landmarks: [
      'Depot Museum Complex',
      'Howard-Dickinson House',
      'Rusk County Courthouse',
      'East Texas Oil Field region',
    ],
    nearby: [
      { name: 'Tatum' },
      { name: 'Overton' },
      { name: 'Mount Enterprise' },
      { name: 'New London' },
      { name: 'Laneville' },
      { name: 'Carthage' },
      { name: 'Longview', slug: 'longview-tx' },
      { name: 'Jacksonville', slug: 'jacksonville-tx' },
    ],
    services: [
      {
        slug: 'house-leveling',
        name: 'House Leveling',
        blurb:
          'Whole-structure leveling for Henderson homes where an addition and the original house have settled onto different planes.',
      },
      {
        slug: 'pier-and-beam',
        name: 'Pier & Beam Repair',
        blurb:
          'Replacing sunken block piers and undersized supports common in rural Rusk County pier and beam construction.',
      },
      {
        slug: 'press-piers',
        name: 'Press Piers',
        blurb:
          'Driven concrete piers that reach firm bearing beneath the shallow footings used on many older Henderson-area homes.',
      },
      {
        slug: 'foundation-repair',
        name: 'Foundation Repair',
        blurb:
          'Full structural repair for Henderson and rural Rusk County properties, including acreage homes well outside the city limits.',
      },
      {
        slug: 'drainage-solutions',
        name: 'Drainage Solutions',
        blurb:
          'Grading and drain work for rural Henderson lots where sheet flow across open ground runs straight under the house.',
      },
    ],
    faqs: [
      {
        question: 'Why does my Henderson home have a step down into the back room?',
        answer:
          'That is the classic sign of an addition built on its own separate footing. The addition and the original house sit on different foundation systems, so they move independently and eventually end up on different planes. We level both back to a single plane and tie the transition together properly.',
      },
      {
        question: 'Do you travel to rural properties outside Henderson?',
        answer:
          'Yes. A large share of our Rusk County work is on acreage well outside town — Tatum, Mount Enterprise, Laneville, New London, Overton and points between. Rural properties get the same free inspection, elevation survey and written estimate as in-town homes.',
      },
      {
        question: 'My house sits on concrete blocks. Can that be repaired?',
        answer:
          'It can. Stacked block piers are extremely common on older rural East Texas homes and they sink into softened soil over time. We replace them with properly footed concrete piers and steel shims that will not compress or rot, then bring the structure back to level.',
      },
      {
        question: 'What does foundation repair cost in Henderson?',
        answer:
          'It depends entirely on how many support points are needed, how far the structure has moved and the foundation type. There is no honest way to price it over the phone. The inspection and itemized written estimate are free.',
      },
      {
        question: 'How long will the repair take?',
        answer:
          'Most Rusk County residential projects finish in one to three days on site. Homes with additions to reconcile, or projects that include pier replacement throughout, can take longer. We give you the schedule up front.',
      },
      {
        question: 'Is your work warranted?',
        answer:
          'Yes. Our lifting work carries a long-term warranty, and we go through what it does and does not cover in writing before you commit to anything.',
      },
    ],
  },

  {
    slug: 'jacksonville-tx',
    city: 'Jacksonville',
    county: 'Cherokee County',
    region: 'East Texas',
    lat: 31.9638,
    lng: -95.2705,
    zips: ['75766'],
    heroImage: '/jacitgallery6.png',
    bodyImage: '/Survey-Automatic-Level-on-Tripod.H03.2k.png',
    tagline: 'Hillside Foundation Work in Cherokee County',
    cardSummary:
      'Cut-and-fill homesites on the Love\'s Lookout ridges, where the downhill half of a house settles and the uphill half does not.',
    metaTitle: 'Foundation Repair & House Leveling in Jacksonville, TX | Jac-It',
    metaDescription:
      'House leveling and foundation repair in Jacksonville, TX. Hillside lots, cut-and-fill settlement and Cherokee County drainage. Free inspection, 25+ years.',
    intro: [
      "Jacksonville has more elevation change than almost anywhere else in East Texas. The Love's Lookout escarpment runs just north of town, and the ridges and slopes it creates define how homes here are built and how they fail. A house on a Cherokee County hillside is not resting on uniform ground — the downhill side often sits on fill or on soil that is slowly creeping downslope, while the uphill side sits on undisturbed native material.",
      "Two things follow from that. First, settlement in Jacksonville is almost always directional: one corner or one full side of the house drops while the rest stays close to original elevation. Second, water is the driver. Storm water sheeting down a slope finds the path of least resistance, and a foundation trench or a poorly compacted fill pad is exactly that. Homeowners frequently tell us the cracking got noticeably worse after one particular storm season, and that is usually accurate.",
      "We have leveled and repaired homes in Jacksonville, Rusk, Alto, Troup, Bullard and New Summerfield for over 25 years. On hillside lots we survey elevations across the entire structure before proposing anything, because on a slope the difference between a repair that holds and one that does not is whether you dealt with the water.",
    ],
    soil: {
      heading: 'Ridge Soils, Slopes and Downhill Creep',
      body: "Cherokee County's sandy loam ridges drain quickly but hold very little together on a slope. On graded homesites, the cut-and-fill work that made the lot buildable leaves half the house on native soil and half on compacted fill — and fill continues to consolidate for years. Combine that with surface and subsurface water moving downhill after every significant rain, and the downhill portion of a Jacksonville home settles steadily while the uphill portion does not. That differential is what produces the diagonal cracking, out-of-square door frames and separated brick veneer we see across town.",
    },
    localSigns: [
      'One side or corner of the house dropping while the rest holds elevation',
      'Damage that visibly worsened after a heavy storm season',
      'Retaining walls, driveways and patios tilting or separating from the house',
      'Erosion channels forming along the foundation on the downhill side',
      'Sticking doors concentrated in the rooms on the low side of the home',
    ],
    neighborhoods: [
      'Downtown Jacksonville',
      'Lake Jacksonville',
      'Love’s Lookout area',
      'New Summerfield',
      'Rusk',
    ],
    landmarks: [
      'Love’s Lookout Park',
      'Lake Jacksonville',
      'Jacksonville College',
      'Tomato Bowl',
    ],
    nearby: [
      { name: 'Rusk' },
      { name: 'Bullard' },
      { name: 'Troup' },
      { name: 'Alto' },
      { name: 'New Summerfield' },
      { name: 'Wells' },
      { name: 'Tyler', slug: 'tyler-tx' },
      { name: 'Palestine', slug: 'palestine-tx' },
    ],
    services: [
      {
        slug: 'house-leveling',
        name: 'House Leveling',
        blurb:
          'Directional lifting for Jacksonville hillside homes where one side has settled well below the other.',
      },
      {
        slug: 'drainage-solutions',
        name: 'Drainage Solutions',
        blurb:
          'Interceptor drains and regrading to divert slope runoff before it reaches a Cherokee County foundation.',
      },
      {
        slug: 'press-piers',
        name: 'Press Piers',
        blurb:
          'Piers driven through unstable fill to firm bearing soil beneath Jacksonville cut-and-fill homesites.',
      },
      {
        slug: 'slab-repair',
        name: 'Slab Repair',
        blurb:
          'Lifting and stabilizing settled slab sections on graded Jacksonville lots where fill has consolidated.',
      },
      {
        slug: 'foam-injection',
        name: 'Foam Injection',
        blurb:
          'Void filling and lifting via polyurethane injection where excavation on a steep lot would be impractical.',
      },
    ],
    faqs: [
      {
        question: 'Why is only one side of my Jacksonville house settling?',
        answer:
          'Because on a Cherokee County hillside the two sides are sitting on different material. The downhill side is frequently on engineered or unengineered fill placed to make the lot buildable, and fill keeps consolidating for years. The uphill side sits on undisturbed native soil that does not. That difference is exactly what produces one-sided settlement.',
      },
      {
        question: 'Do I need drainage work or just leveling?',
        answer:
          'On sloped Jacksonville lots, usually both. Lifting the house corrects the symptom; intercepting the slope water corrects the cause. We will tell you honestly if drainage is not a factor on your property, but on most hillside lots here it is the deciding factor in whether the repair holds.',
      },
      {
        question: 'My driveway and retaining wall are tilting too. Is that related?',
        answer:
          'Almost certainly. Tilting flatwork and retaining structures on a slope point to soil movement across the whole site, not just under the house. We include them in the inspection so you understand the full picture before deciding what to repair.',
      },
      {
        question: 'Can you lift a slab without tearing up my yard?',
        answer:
          'Often, yes. Polyurethane foam injection lifts settled slab sections through small injection ports with minimal excavation, which is a real advantage on steep or heavily landscaped Jacksonville lots. Whether it is the right method depends on what we find during the inspection.',
      },
      {
        question: 'What areas around Jacksonville do you cover?',
        answer:
          'Jacksonville, Rusk, Alto, Bullard, Troup, New Summerfield, Wells, Gallatin and Cuney, plus rural Cherokee County properties.',
      },
      {
        question: 'Is the estimate free?',
        answer:
          'Yes — free inspection, free elevation survey and a free written estimate with no obligation. Call 1-877-65-JACIT.',
      },
    ],
  },

  {
    slug: 'palestine-tx',
    city: 'Palestine',
    county: 'Anderson County',
    region: 'East Texas',
    lat: 31.7621,
    lng: -95.6308,
    zips: ['75801', '75803'],
    heroImage: '/jacitgallery7.png',
    bodyImage: '/Broken-Wall-Panel.H03.2k.png',
    tagline: 'Where the Clay Belt Meets the Piney Woods',
    cardSummary:
      'The western edge of the Piney Woods, where expansive clay takes over and Victorian-era homes ride the shrink-swell cycle every year.',
    metaTitle: 'Foundation Repair & House Leveling in Palestine, TX | Jac-It',
    metaDescription:
      'Foundation repair and house leveling in Palestine, TX. Expansive clay movement and historic pier & beam homes in Anderson County. Free inspection, 25+ years.',
    intro: [
      "Palestine sits on the western edge of the Piney Woods, right where the sandy soils of East Texas give way to genuinely expansive clays. That transition is why foundation behavior in Anderson County looks different from what we see forty miles east. Here, shrink and swell is a real and dominant force: clay soils take on water and expand with substantial pressure, then shrink and pull away as they dry, and a foundation sitting on them rides that cycle up and down every year.",
      "Palestine also has one of the finest collections of Victorian and early-twentieth-century homes in the region. Those houses were built on brick or stone piers set shallow, well above the depth where soil moisture stays stable. Every wet season lifts them, every dry season drops them, and after a hundred years of that the piers have shifted, cracked or sunk out of alignment. The tell is usually in the plaster and the door frames long before it is visible from the street.",
      "Our crews have worked Palestine, Elkhart, Frankston, Grapeland and rural Anderson County for over 25 years. On clay-soil sites we design the repair around getting support below the active moisture zone, because a pier that stops in the layer that is moving will simply move with it.",
    ],
    soil: {
      heading: 'Expansive Clay in Anderson County',
      body: "Anderson County marks the transition from the sandy Piney Woods into soils with a much higher expansive clay fraction. Expansive clay changes volume with moisture content — it swells hard enough to lift a loaded footing when it takes on water, and it contracts and pulls away from foundations as it dries, leaving gaps you can sometimes see along the slab edge in late summer. The seasonal cycle is relentless, and it is what makes Palestine foundation work different from work in Lufkin or Tyler. Repairs here have to reach past the active zone to soil whose moisture content stays reasonably constant, or the movement continues.",
    },
    localSigns: [
      'Visible gaps opening between the soil and the slab edge during dry summers',
      'Doors and windows that bind in spring and swing freely by August',
      'Shifted or cracked original brick piers under historic Palestine homes',
      'Diagonal cracks above door and window corners that recur after being patched',
      'Slab heave in the center of the house rather than settlement at the edges',
    ],
    neighborhoods: [
      'Palestine Historic District',
      'Old Town Palestine',
      'North Palestine',
      'Westwood',
      'Elmwood',
    ],
    landmarks: [
      'Texas State Railroad',
      'Davey Dogwood Park',
      'Anderson County Courthouse',
      'Historic Downtown Palestine',
    ],
    nearby: [
      { name: 'Elkhart' },
      { name: 'Frankston' },
      { name: 'Grapeland' },
      { name: 'Montalba' },
      { name: 'Neches' },
      { name: 'Tennessee Colony' },
      { name: 'Jacksonville', slug: 'jacksonville-tx' },
      { name: 'Crockett' },
    ],
    services: [
      {
        slug: 'foundation-repair',
        name: 'Foundation Repair',
        blurb:
          'Repair engineered around Anderson County clay movement, with support carried below the active moisture zone.',
      },
      {
        slug: 'press-piers',
        name: 'Press Piers',
        blurb:
          'Hydraulically driven concrete piers that pass through Palestine’s expansive clay to stable bearing material.',
      },
      {
        slug: 'pier-and-beam',
        name: 'Pier & Beam Repair',
        blurb:
          "Restoring shallow original piers under Palestine's Victorian and early-1900s homes with properly footed supports.",
      },
      {
        slug: 'slab-repair',
        name: 'Slab Repair',
        blurb:
          'Correcting both settlement and clay-driven heave in Anderson County slab foundations.',
      },
      {
        slug: 'drainage-solutions',
        name: 'Drainage Solutions',
        blurb:
          'Moisture management that keeps clay soil at a steadier water content year round instead of swinging with the seasons.',
      },
    ],
    faqs: [
      {
        question: 'Is Palestine soil different from the rest of East Texas?',
        answer:
          'Yes, and it matters. Palestine sits where the sandy Piney Woods soils transition into expansive clays. Clay changes volume with moisture — swelling when wet, shrinking when dry — so Anderson County foundations move seasonally in a way sandier sites east of here do not.',
      },
      {
        question: 'I can see a gap between my slab and the dirt. Is that serious?',
        answer:
          'It is a clear indicator of expansive clay pulling away from the foundation during a dry period. It means the soil supporting your slab edge is shrinking, and it usually means the perimeter is losing support. It is worth an inspection before the next wet cycle drives it further.',
      },
      {
        question: 'Why do my cracks keep coming back after I patch them?',
        answer:
          'Because patching addresses the drywall, not the movement underneath it. As long as the clay under the foundation keeps expanding and contracting seasonally, the structure keeps flexing and the same cracks reopen. Stopping the movement is the only thing that makes the patch permanent.',
      },
      {
        question: 'Can you work on a historic home in the Palestine Historic District?',
        answer:
          'Yes. Historic homes here typically sit on shallow original brick or stone piers. We replace or re-support them with properly footed piers and lift slowly enough that original plaster, trim and masonry come through it intact.',
      },
      {
        question: 'What towns near Palestine do you serve?',
        answer:
          'Palestine, Elkhart, Frankston, Grapeland, Montalba, Neches and Tennessee Colony, along with rural Anderson County properties.',
      },
      {
        question: 'How do I get a free inspection in Palestine?',
        answer:
          'Call 1-877-65-JACIT or 1-430-352-6085, or email james@jac-itfoundationrepair.com. We will schedule the inspection and provide a written, itemized estimate at no cost.',
      },
    ],
  },

  {
    slug: 'marshall-tx',
    city: 'Marshall',
    county: 'Harrison County',
    region: 'East Texas',
    lat: 32.5449,
    lng: -94.3674,
    zips: ['75670', '75672'],
    heroImage: '/jacitgallery.jpeg',
    bodyImage: '/Concrete-Pillar.H03.2k.png',
    tagline: 'Preserving Historic Harrison County Homes',
    cardSummary:
      'Red clay uplands under one of the largest collections of 1800s architecture in East Texas, still on shallow original piers.',
    metaTitle: 'Foundation Repair & House Leveling in Marshall, TX | Jac-It',
    metaDescription:
      'Foundation repair and house leveling in Marshall, TX. Harrison County red clay and 19th-century homes on original piers. Free inspection, 25+ years.',
    intro: [
      "Marshall has one of the largest concentrations of nineteenth-century architecture in East Texas. The Ginocchio Historic District and the neighborhoods surrounding downtown are full of homes built in the 1880s and 1890s — long before poured footings, treated lumber or any expectation that a crawlspace should be ventilated. Those homes are still standing because they were built well, but their original pier systems have been carrying load through 130-plus wet-and-dry seasons in Harrison County red clay.",
      "Harrison County clay behaves aggressively. It holds water, swells, and then contracts hard during dry stretches, and shallow-set brick and stone piers ride every bit of that motion. Over a century the cumulative result is piers that have tilted, cracked, spalled or driven themselves down into softened soil. Inside, homeowners see cracked plaster running from door corners, floors that pitch noticeably toward one wall, and interior doors that have been planed down repeatedly by previous owners chasing a problem that was never in the door.",
      "We have repaired and leveled Marshall homes for more than 25 years — historic properties near downtown, mid-century homes throughout the city, and rural houses out toward Elysian Fields, Karnack and Waskom. Historic work is deliberate work: slow lifts, many support points, elevations checked continuously, and no shortcuts through original fabric.",
    ],
    soil: {
      heading: 'Harrison County Red Clay',
      body: "Marshall sits on red clay uplands with a thinner sandy cap in places. The clay content is high enough to produce meaningful shrink-swell movement through the year — expansion under a footing when the soil takes on water, then contraction and loss of support as it dries out. Nineteenth-century homes are especially exposed to this because their piers were set shallow, often directly on grade with no real footing. Every seasonal cycle works those piers a little further out of alignment, and unlike a modern foundation there is no rigid structure tying them together to distribute the movement.",
    },
    localSigns: [
      'Original brick or stone piers tilted, cracked or spalled beneath 1800s homes',
      'Plaster cracking radiating from door and window corners in historic properties',
      'Floors pitching consistently toward one wall across multiple rooms',
      'Interior doors that have been planed or trimmed repeatedly over the years',
      'Crawlspaces with no ventilation or vapor barrier, holding moisture year round',
    ],
    neighborhoods: [
      'Ginocchio Historic District',
      'Downtown Marshall',
      'Starr Family area',
      'Elysian Fields',
      'Scottsville',
    ],
    landmarks: [
      'Harrison County Courthouse',
      'Wiley College',
      'East Texas Baptist University',
      'Starr Family Home State Historic Site',
      'Caddo Lake',
    ],
    nearby: [
      { name: 'Hallsville' },
      { name: 'Waskom' },
      { name: 'Scottsville' },
      { name: 'Elysian Fields' },
      { name: 'Karnack' },
      { name: 'Jefferson' },
      { name: 'Harleton' },
      { name: 'Longview', slug: 'longview-tx' },
    ],
    services: [
      {
        slug: 'pier-and-beam',
        name: 'Pier & Beam Repair',
        blurb:
          "Rebuilding original pier systems under Marshall's nineteenth-century homes with properly footed concrete supports.",
      },
      {
        slug: 'house-leveling',
        name: 'House Leveling',
        blurb:
          'Slow, many-point lifting designed to bring historic Marshall homes back into plane without damaging original plaster.',
      },
      {
        slug: 'foundation-repair',
        name: 'Foundation Repair',
        blurb:
          'Structural repair across Harrison County for red-clay movement, on both historic and modern construction.',
      },
      {
        slug: 'drainage-solutions',
        name: 'Drainage Solutions',
        blurb:
          'Crawlspace ventilation, vapor barriers and perimeter drainage for Marshall homes built before any of it was standard.',
      },
      {
        slug: 'root-barriers',
        name: 'Root Barriers',
        blurb:
          "Protecting foundations from the mature shade trees that define Marshall's older neighborhoods.",
      },
    ],
    faqs: [
      {
        question: 'Can an 1890s Marshall home really be leveled safely?',
        answer:
          'Yes, when it is done slowly. Historic homes get lifted in small increments across many support points simultaneously with elevations monitored throughout, so the structure comes back into plane at a rate original plaster and masonry can absorb. Rushing a historic lift is what damages these houses.',
      },
      {
        question: 'What is wrong with my original brick piers?',
        answer:
          'Usually not the brick itself. The problem is that they were set shallow, frequently right on grade, into Harrison County clay that swells and shrinks with the seasons. After a century of that cycle the piers tilt, crack or sink. We replace or re-support them with properly footed piers that reach below the active soil zone.',
      },
      {
        question: 'Why do my floors slope toward one side of the house?',
        answer:
          'Consistent pitch across multiple rooms points to one whole side of the foundation having settled relative to the other, rather than a single failed pier. That is a leveling job, not a spot repair, and the elevation survey during your free inspection will show exactly how much and where.',
      },
      {
        question: 'Do you work outside Marshall in Harrison County?',
        answer:
          'Yes — Hallsville, Waskom, Scottsville, Elysian Fields, Karnack, Harleton and Jefferson, plus rural properties throughout Harrison County and out toward Caddo Lake.',
      },
      {
        question: 'Will leveling damage my original plaster?',
        answer:
          'Some hairline movement in century-old plaster is possible on any lift, and we will say so honestly rather than promise otherwise. Working slowly across many points keeps it minimal, and we discuss what to expect before the lift starts so there are no surprises.',
      },
      {
        question: 'Do you offer free estimates in Marshall?',
        answer:
          'Yes. The inspection, elevation survey and written estimate are free with no obligation. Call 1-877-65-JACIT to schedule.',
      },
    ],
  },

  {
    slug: 'livingston-tx',
    city: 'Livingston',
    county: 'Polk County',
    region: 'Deep East Texas',
    lat: 30.7108,
    lng: -94.933,
    zips: ['77351'],
    heroImage: '/jacitgallery2.jpeg',
    bodyImage: '/Steel-Shower-Drain.H03.2k.png',
    tagline: 'Lake Country Foundation Repair',
    cardSummary:
      'Lake and bottomland soils that stay saturated, under weekend properties and cabins nobody walks through often enough to catch it early.',
    metaTitle: 'Foundation Repair & House Leveling in Livingston, TX | Jac-It',
    metaDescription:
      'House leveling and foundation repair in Livingston, TX. Lake homes, high water table and Polk County pier & beam work. Free inspection, 25+ years.',
    intro: [
      "Livingston is lake country, and that shapes everything about foundation work here. Homes around Lake Livingston and along the Trinity River bottoms sit on sandy soils with a water table that is genuinely high and that rises further with lake level and heavy rain. Saturated soil does not carry load the way drained soil does. A pier that was adequate when the house was built settles gradually into ground that spends much of the year too wet to support it.",
      "A large portion of Polk County housing is also weekend and seasonal property — lake houses, cabins and manufactured homes on pier and block foundations, often built quickly and inexpensively, and frequently sitting unoccupied for long stretches. Problems that a full-time resident would catch early go unnoticed for years in a house nobody is walking through every day. By the time an owner notices the floor feels wrong, several piers have usually already sunk or shifted.",
      "We have worked Livingston, Onalaska, Goodrich, Corrigan and the communities around Lake Livingston for more than 25 years. On lake properties the first question is always where the water is going, because in Polk County soil, drainage is not a finishing touch — it is the repair.",
    ],
    soil: {
      heading: 'High Water Table and Lake Livingston Soils',
      body: "Polk County soils near the lake and in the Trinity bottoms are sandy and hold water at shallow depth. When soil is saturated its bearing capacity drops sharply, and a foundation loaded onto it settles. Waterfront lots add a second problem: the ground near a shoreline or a slope down to water can move, eroding and creeping toward the water over time. Piers set shallow into wet sandy soil have very little to resist that. This is why so much Livingston work involves both replacing sunken supports and re-establishing where storm water and ground water actually go.",
    },
    localSigns: [
      'Floors that feel spongy or bounce underfoot in lake homes and cabins',
      'Block or wood piers visibly sunk into soft, wet ground beneath the structure',
      'Skirting separating from the structure on manufactured and seasonal homes',
      'Standing water under the home for extended periods after rain or high lake levels',
      'Decks, porches and steps pulling away from the main house on waterfront lots',
    ],
    neighborhoods: [
      'Lake Livingston waterfront',
      'Downtown Livingston',
      'Onalaska',
      'Point Blank',
      'Goodrich',
    ],
    landmarks: [
      'Lake Livingston',
      'Lake Livingston State Park',
      'Polk County Courthouse',
      'Alabama-Coushatta Tribe of Texas Reservation',
      'Big Thicket National Preserve',
    ],
    nearby: [
      { name: 'Onalaska' },
      { name: 'Goodrich' },
      { name: 'Corrigan' },
      { name: 'Leggett' },
      { name: 'Point Blank' },
      { name: 'Seven Oaks' },
      { name: 'Woodville' },
      { name: 'Huntsville', slug: 'huntsville-tx' },
    ],
    services: [
      {
        slug: 'house-leveling',
        name: 'House Leveling',
        blurb:
          'Leveling for Livingston lake homes and cabins where piers have settled unevenly into saturated ground.',
      },
      {
        slug: 'pier-and-beam',
        name: 'Pier & Beam Repair',
        blurb:
          'Replacing sunken block and wood piers with properly footed concrete supports that hold in wet Polk County soil.',
      },
      {
        slug: 'drainage-solutions',
        name: 'Drainage Solutions',
        blurb:
          'French drains, grading and vapor barriers to get standing water out from under Lake Livingston area homes.',
      },
      {
        slug: 'foundation-repair',
        name: 'Foundation Repair',
        blurb:
          'Structural repair for waterfront and bottomland properties throughout Polk County.',
      },
      {
        slug: 'press-piers',
        name: 'Press Piers',
        blurb:
          'Driven piers that reach firm bearing beneath the soft saturated layers common near the lake.',
      },
    ],
    faqs: [
      {
        question: 'Why do lake homes around Livingston settle so often?',
        answer:
          'Because the water table near Lake Livingston and the Trinity bottoms is high, and saturated soil carries far less load than drained soil. Piers set shallow into ground that stays wet most of the year settle gradually. Many lake properties also went up quickly on minimal foundations to begin with.',
      },
      {
        question: 'Can you level a manufactured or mobile home?',
        answer:
          'Yes. Re-leveling and re-supporting manufactured homes is common work in Polk County. We reset the pier system on proper footings, bring the structure back to level and address the ground water that caused the piers to sink in the first place.',
      },
      {
        question: 'My floors bounce when I walk across them. What does that mean?',
        answer:
          'A spongy or bouncing floor usually means the supports beneath it are no longer carrying load — piers have sunk, a beam has failed, or joists have taken moisture damage. In Livingston it is most often all three, since the same wet conditions cause each one.',
      },
      {
        question: 'Do you service Onalaska and the north side of the lake?',
        answer:
          'Yes. We cover Livingston, Onalaska, Point Blank, Goodrich, Corrigan, Leggett and Seven Oaks, and we work waterfront properties around Lake Livingston regularly.',
      },
      {
        question: 'Can you inspect a weekend property if I am not there?',
        answer:
          'We can, with your authorization and access arrangements. Many Polk County properties are second homes. We will document the inspection with elevations and findings so you can review everything before deciding anything.',
      },
      {
        question: 'Is the Livingston inspection free?',
        answer:
          'Yes — free inspection and free written estimate with no obligation anywhere in Polk County. Call 1-877-65-JACIT.',
      },
    ],
  },

  {
    slug: 'huntsville-tx',
    city: 'Huntsville',
    county: 'Walker County',
    region: 'Deep East Texas',
    lat: 30.7235,
    lng: -95.5508,
    zips: ['77320', '77340', '77341'],
    heroImage: '/jacitgallery4.jpeg',
    bodyImage: '/Gear-Setting-Repair-Symbol.H03.2k.png',
    tagline: 'Walker County Foundation Specialists',
    cardSummary:
      'A true soil transition zone where sandy uplands and expansive clay pockets sit a street apart, so diagnosis has to come before method.',
    metaTitle: 'Foundation Repair & House Leveling in Huntsville, TX | Jac-It',
    metaDescription:
      'Foundation repair and house leveling in Huntsville, TX. Walker County sits on a soil transition zone — we survey, level and stabilize. Free inspection.',
    intro: [
      "Huntsville sits on a genuine soil boundary. Walker County is where the Piney Woods gives way to the Post Oak Savannah, and that means the ground under this city is not consistent. Some homesites sit on sandy upland soil that drains well. Others, sometimes only a street away, sit on pockets of expansive clay that swell and shrink hard with the seasons. Two nearly identical houses in the same subdivision can behave completely differently, which is why generic advice about Texas foundations tends to be wrong here.",
      "The practical consequence is that a Huntsville inspection has to actually be an inspection. We take elevation readings across the whole structure, look at what the drainage is doing, and identify which soil behavior is actually driving the movement before proposing a repair method. A press pier solution that is correct for a clay-pocket lot near Elkins Lake may be unnecessary on a sandy site in another part of town, and quoting one without checking is how homeowners end up overpaying.",
      "Huntsville also carries a large rental and student-housing population around Sam Houston State, and rental properties tend to accumulate deferred foundation problems. We work with owners and property managers throughout Walker County — Huntsville, New Waverly, Riverside and Willis — for more than 25 years, and we put everything in writing so an owner who is not local can see exactly what is being done.",
    ],
    soil: {
      heading: 'A Soil Transition Zone',
      body: "Walker County straddles the boundary between the Piney Woods and the Post Oak Savannah, producing genuinely mixed soil conditions across short distances. Sandy uplands that drain quickly sit alongside pockets with a high expansive clay fraction that swell when wet and shrink when dry. Rolling terrain across much of the county adds surface water movement to the picture. The result: foundation problems in Huntsville do not have one signature. Some homes settle from erosion and washout, others heave and drop from clay volume change, and correctly identifying which one you have is the difference between a repair that lasts and one that does not.",
    },
    localSigns: [
      'Neighboring homes on the same street showing completely different damage patterns',
      'Center-of-slab heave rather than perimeter settlement on clay-pocket lots',
      'Sticking doors and windows that change noticeably between wet and dry seasons',
      'Deferred maintenance and unnoticed floor slope in long-term rental properties',
      'Erosion at the foundation on the rolling, sloped lots common around the county',
    ],
    neighborhoods: [
      'Downtown Huntsville',
      'Elkins Lake',
      'Forest Hills',
      'Westridge',
      'New Waverly',
    ],
    landmarks: [
      'Sam Houston State University',
      'Sam Houston Memorial Museum',
      'Huntsville State Park',
      'Texas Prison Museum',
      'Walker County Courthouse',
    ],
    nearby: [
      { name: 'New Waverly' },
      { name: 'Riverside' },
      { name: 'Willis' },
      { name: 'Trinity' },
      { name: 'Coldspring' },
      { name: 'Madisonville' },
      { name: 'Livingston', slug: 'livingston-tx' },
    ],
    services: [
      {
        slug: 'foundation-repair',
        name: 'Foundation Repair',
        blurb:
          'Diagnosis-first repair for Huntsville, where the correct method depends entirely on which soil type your lot actually sits on.',
      },
      {
        slug: 'house-leveling',
        name: 'House Leveling',
        blurb:
          'Whole-structure leveling for Walker County homes that have settled or heaved out of plane.',
      },
      {
        slug: 'slab-repair',
        name: 'Slab Repair',
        blurb:
          'Correcting both settlement and clay-driven center heave in Huntsville slab foundations.',
      },
      {
        slug: 'press-piers',
        name: 'Press Piers',
        blurb:
          'Driven piers carried below the active clay zone on Huntsville lots where seasonal movement is the driver.',
      },
      {
        slug: 'drainage-solutions',
        name: 'Drainage Solutions',
        blurb:
          'Grading and drain systems for the rolling Walker County lots where surface water runs toward the house.',
      },
    ],
    faqs: [
      {
        question: 'Why does my neighbor have foundation problems and I do not?',
        answer:
          'Walker County sits on a soil transition zone. Sandy upland soil and pockets of expansive clay can exist within a block of each other, so two similar homes on the same street genuinely can behave differently. It is not luck — it is what is under each lot.',
      },
      {
        question: 'My slab is high in the middle, not sunk at the edges. Is that normal?',
        answer:
          'It is a clay signature rather than a settlement signature. Expansive clay under the center of a slab stays wetter than the exposed perimeter and expands, pushing the middle up. It is a real structural problem and the repair approach is different from ordinary perimeter settlement, which is why the diagnosis has to come first.',
      },
      {
        question: 'Do you work with landlords and property managers in Huntsville?',
        answer:
          'Regularly. Rental property around Sam Houston State often accumulates deferred foundation issues. We provide written, itemized estimates and documented elevation findings so out-of-town owners can make decisions without being on site.',
      },
      {
        question: 'What towns near Huntsville do you serve?',
        answer:
          'Huntsville, New Waverly, Riverside, Willis, Trinity, Coldspring and Madisonville, plus rural Walker County properties.',
      },
      {
        question: 'How do you decide which repair method to use?',
        answer:
          'From the inspection. We take elevations across the structure, examine the drainage and foundation perimeter or crawlspace, and identify what is actually causing the movement. In Huntsville that step matters more than almost anywhere, because the soil is not uniform and the wrong method simply will not hold.',
      },
      {
        question: 'Is the inspection free in Huntsville?',
        answer:
          'Yes. Free inspection, free elevation survey and a free written estimate with no obligation. Call 1-877-65-JACIT or 1-430-352-6085.',
      },
    ],
  },
];

export const LOCATION_SLUGS = LOCATIONS.map((l) => l.slug);

export function getLocation(slug: string | undefined): Location | undefined {
  if (!slug) return undefined;
  return LOCATIONS.find((l) => l.slug === slug);
}

/** Cities other than the given one, used for the "nearby service areas" links. */
export function otherLocations(slug: string): Location[] {
  return LOCATIONS.filter((l) => l.slug !== slug);
}
