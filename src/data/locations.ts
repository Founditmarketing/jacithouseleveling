export interface LocationFactor {
  title: string;
  description: string;
}

export interface LocationFaq {
  question: string;
  answer: string;
}

export interface Location {
  slug: string;
  city: string;
  county: string;
  navLabel: string;
  subtitle: string;
  teaser: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  image: string;
  intro: string[];
  factors: LocationFactor[];
  nearbyAreas: string[];
  faqs: LocationFaq[];
}

export const locations: Location[] = [
  {
    slug: 'tyler',
    city: 'Tyler',
    county: 'Smith County',
    navLabel: 'Tyler, TX',
    subtitle: 'Foundation Repair & House Leveling in Tyler, TX',
    teaser:
      "Expansive clay soil and rolling terrain drive most of the movement we correct here, from historic pier and beam homes in the Azalea District to newer slab construction south of town.",
    metaTitle: 'Foundation Repair in Tyler, TX | Jac-It House Leveling',
    metaDescription:
      'Foundation repair and house leveling in Tyler, TX. Free inspections for pier & beam, slab, and drainage issues across Smith County. 25+ years of experience. Call 1-877-65-JACIT.',
    heroImage: '/jacitgallery.jpeg',
    image: '/Survey-Automatic-Level-on-Tripod.H03.2k.png',
    intro: [
      "Jac-It House Leveling & Foundation Repair has been stabilizing homes throughout Tyler and Smith County for more than 25 years. From century-old pier and beam houses in the historic Azalea District to newer slab-on-grade construction on the south side of town, we have worked on nearly every kind of foundation Tyler has to offer.",
      "Tyler sits on a mix of sandy loam and expansive clay, and that combination is hard on foundations. Clay swells when it takes on water and shrinks back during the dry stretches of an East Texas summer, and the resulting movement shows up as sloping floors, stair-step cracks in brick, and doors that no longer latch. Sandy pockets bring the opposite problem: water moves through them quickly and can wash out the support under a footing.",
      "We start every Tyler project with a free, no-obligation inspection. We take elevation readings across the whole structure, look at how water moves around the property, and then explain exactly what we found and what it will take to correct it — in plain language, with a written estimate and no pressure.",
    ],
    factors: [
      {
        title: 'Expansive Clay Movement',
        description:
          "Much of Smith County has clay-heavy soil that expands and contracts with the seasons. That cycle lifts and drops foundations unevenly, and it is the single most common cause of the cracking and sloping we correct in Tyler homes.",
      },
      {
        title: 'Historic Pier & Beam Homes',
        description:
          "Tyler's older neighborhoods are full of pier and beam houses. Decades of settling take a toll on piers, sills, and floor joists, and rotted or shifted supports need to be replaced or reset rather than simply shimmed.",
      },
      {
        title: 'Slope & Drainage',
        description:
          "Tyler's rolling terrain sends runoff straight toward some foundations. We routinely pair leveling work with grading corrections, French drains, and gutter extensions so the repair actually holds.",
      },
      {
        title: 'Mature Tree Root Systems',
        description:
          "The large oaks and pines that make Tyler's established streets attractive also pull enormous amounts of moisture out of the soil near foundations. Root barriers keep that drying effect away from your footing.",
      },
    ],
    nearbyAreas: [
      'Whitehouse',
      'Lindale',
      'Flint',
      'Bullard',
      'Chapel Hill',
      'Troup',
      'Arp',
      'New Chapel Hill',
    ],
    faqs: [
      {
        question: 'Do you offer free foundation inspections in Tyler, TX?',
        answer:
          'Yes. Inspections and estimates in Tyler and throughout Smith County are free and carry no obligation. We measure elevations across your home, identify what is causing the movement, and give you a written estimate before any work begins.',
      },
      {
        question: 'What causes foundation problems in Tyler homes?',
        answer:
          "Expansive clay soil is the leading cause. It swells during wet weather and shrinks in dry heat, moving your foundation up and down through the year. Poor drainage, Tyler's rolling terrain, plumbing leaks, and moisture drawn out by mature trees all make it worse.",
      },
      {
        question: 'Can you repair pier and beam homes in the Azalea District and other historic areas?',
        answer:
          "Absolutely. Older pier and beam homes are some of our most common work in Tyler. We replace deteriorated piers, sister or replace damaged joists and sills, shim to correct elevations, and address crawl space moisture that caused the deterioration in the first place.",
      },
      {
        question: 'How long does foundation repair take in Tyler?',
        answer:
          'Most residential projects are finished in one to three days. Larger structures, or jobs that include drainage work or extensive subfloor repair, can run longer. We give you a realistic schedule with your estimate.',
      },
      {
        question: 'What are the warning signs I should watch for?',
        answer:
          'Sloping or bouncy floors, cracks in sheetrock above doorways, stair-step cracks in brick or mortar, doors and windows that stick, gaps between baseboards and the floor, and separation around exterior trim. Any one of these is worth an inspection.',
      },
      {
        question: 'Do you serve the smaller communities around Tyler?',
        answer:
          'Yes. Along with Tyler we regularly work in Whitehouse, Lindale, Flint, Bullard, Chapel Hill, Troup, Arp, and the surrounding Smith County communities.',
      },
    ],
  },
  {
    slug: 'lufkin',
    city: 'Lufkin',
    county: 'Angelina County',
    navLabel: 'Lufkin, TX',
    subtitle: 'Foundation Repair & House Leveling in Lufkin, TX',
    teaser:
      "Heavy Piney Woods rainfall and sandy soil over clay keep crawl spaces damp, rotting wood piers and beams in Lufkin's older pier and beam housing stock.",
    metaTitle: 'Foundation Repair in Lufkin, TX | Jac-It House Leveling',
    metaDescription:
      'Foundation repair and house leveling in Lufkin, TX. Free inspections for pier & beam, slab, and crawl space moisture problems in Angelina County. Call 1-877-65-JACIT.',
    heroImage: '/jacitgallery3.jpeg',
    image: '/Concrete-Pillar.H03.2k.png',
    intro: [
      "Lufkin is home territory for us. Jac-It House Leveling & Foundation Repair has spent more than 25 years leveling homes, replacing piers, and correcting drainage problems throughout Lufkin and Angelina County, and that local experience shows up in how quickly we can diagnose what is happening under a house here.",
      "Deep in the Piney Woods, Lufkin gets substantial rainfall and holds a lot of moisture in the ground. Sandy surface soils sit over denser clay, so water tends to collect and linger beneath crawl spaces instead of draining away. The result is wood rot in piers and beams, high humidity under the floor, and gradual settling that homeowners often notice first as a soft or springy spot in a hallway.",
      "We handle the structural correction and the cause behind it. That may mean resetting or replacing piers, reinforcing girders and joists, lifting a settled slab, installing a vapor barrier, or routing water away from the house with a French drain. Inspections and estimates in Lufkin are always free.",
    ],
    factors: [
      {
        title: 'High Ground Moisture',
        description:
          "Heavy Piney Woods rainfall combined with slow-draining subsoil keeps crawl spaces damp. Persistent moisture rots wood piers, sills, and joists — and it is the reason we so often pair leveling with vapor barriers.",
      },
      {
        title: 'Sandy Soil Over Clay',
        description:
          "Water passes quickly through Lufkin's sandy topsoil and then stalls on the clay beneath it. That perched water erodes support under footings and creates uneven settling across a single structure.",
      },
      {
        title: 'Aging Pier & Beam Stock',
        description:
          "A large share of Lufkin's housing is pier and beam built decades ago. Original wood supports eventually reach the end of their service life, and replacing them properly restores both level and load-bearing capacity.",
      },
      {
        title: 'Tree Cover & Root Pressure',
        description:
          "Pines and hardwoods growing close to the house draw moisture from the soil and push roots against footings and piers. Root barriers and targeted drainage protect the repair long term.",
      },
    ],
    nearbyAreas: ['Diboll', 'Hudson', 'Huntington', 'Zavalla', 'Burke', 'Central', 'Pollok', 'Wells'],
    faqs: [
      {
        question: 'Do you offer free foundation inspections in Lufkin?',
        answer:
          'Yes. Inspections and written estimates throughout Lufkin and Angelina County are free with no obligation. We take elevation readings, inspect the crawl space or slab, and walk you through exactly what we found.',
      },
      {
        question: 'Why do so many Lufkin homes have crawl space moisture problems?',
        answer:
          "Lufkin sits in the Piney Woods and gets heavy rainfall, and sandy surface soil over denser clay keeps water trapped under the house. That standing moisture rots wood piers and beams and drives up humidity in the crawl space. Vapor barriers and French drains are usually part of the fix.",
      },
      {
        question: 'My floors feel soft and springy in one spot. What is that?',
        answer:
          "That usually means a failing pier, a rotted sill, or a damaged floor joist beneath that area rather than a whole-house settlement problem. It is very common in older Lufkin pier and beam homes and is straightforward to repair once we locate the failed support.",
      },
      {
        question: 'Do you work on slab foundations in Lufkin as well as pier and beam?',
        answer:
          'Yes. We repair and lift slab foundations using press piers and foam injection, and we handle pier and beam leveling, subfloor and beam repair, drainage work, and root barriers.',
      },
      {
        question: 'How much does foundation repair cost in Lufkin?',
        answer:
          'It depends on the size of the home, the foundation type, and how much movement has occurred. Because we inspect for free and put the price in writing before any work starts, you will know the cost with no guesswork and no obligation.',
      },
      {
        question: 'What areas around Lufkin do you cover?',
        answer:
          'We work throughout Angelina County, including Diboll, Hudson, Huntington, Zavalla, Burke, Central, Pollok, and Wells.',
      },
    ],
  },
  {
    slug: 'longview',
    city: 'Longview',
    county: 'Gregg County',
    navLabel: 'Longview, TX',
    subtitle: 'Foundation Repair & House Leveling in Longview, TX',
    teaser:
      "Clay that swells and shrinks with the seasons puts stair-step cracks in brick and separates door frames. We lift settled slabs and correct the drainage behind it.",
    metaTitle: 'Foundation Repair in Longview, TX | Jac-It House Leveling',
    metaDescription:
      'Foundation repair and house leveling in Longview, TX. Free inspections for slab and pier & beam foundations across Gregg County. 25+ years of experience. Call 1-877-65-JACIT.',
    heroImage: '/jacitgallery2.jpeg',
    image: '/Broken-Wall-Panel.H03.2k.png',
    intro: [
      "Jac-It House Leveling & Foundation Repair serves homeowners across Longview and Gregg County with foundation repair, house leveling, and drainage work backed by more than 25 years in the field. Whether your home is slab-on-grade or pier and beam, we correct the movement and address what caused it.",
      "Longview's soils shift. Clay-rich ground swells with rain and pulls back in dry weather, and that seasonal cycle is what puts stair-step cracks in brick veneer and separates door frames from walls. Because the movement happens gradually, most homeowners do not notice until a crack widens enough to be obvious — which is why a free inspection is worth scheduling at the first sign.",
      "Our approach in Longview is straightforward: measure the whole structure, find the low and high points, identify whether soil movement, drainage, plumbing, or failed supports are responsible, and then fix it with the right method. You get a clear written estimate and an honest assessment, including when a home does not need work yet.",
    ],
    factors: [
      {
        title: 'Seasonal Clay Swell & Shrink',
        description:
          "Gregg County's clay content means the ground under your home changes volume through the year. Foundations move with it, and the stress shows up as cracked brick, separated trim, and out-of-square door frames.",
      },
      {
        title: 'Slab Settlement & Voids',
        description:
          "When soil shrinks away beneath a slab it leaves unsupported voids. We lift and re-support settled slabs with press piers and polyurethane foam injection to close those voids and restore elevation.",
      },
      {
        title: 'Drainage Against the Foundation',
        description:
          "Flat lots, short downspouts, and beds that slope toward the house keep the perimeter soil saturated. Correcting how water leaves the property is often the difference between a repair that lasts and one that repeats.",
      },
      {
        title: 'Mid-Century Housing Stock',
        description:
          "Many Longview homes are decades old, with original piers, beams, and plumbing. Aging supports and long-term slow leaks both contribute to settling, and both need to be addressed for the fix to hold.",
      },
    ],
    nearbyAreas: [
      'White Oak',
      'Gladewater',
      'Kilgore',
      'Hallsville',
      'Judson',
      'Lakeport',
      'Spring Hill',
      'Gilmer',
    ],
    faqs: [
      {
        question: 'Do you offer free foundation inspections in Longview?',
        answer:
          'Yes. Every inspection and estimate in Longview and Gregg County is free and comes with no obligation. We measure elevations across the home, diagnose the cause, and give you the price in writing.',
      },
      {
        question: 'What causes foundation movement in Longview?',
        answer:
          'Clay-rich soil that swells with rainfall and shrinks in dry heat is the primary driver. Poor perimeter drainage, plumbing leaks under the slab, and aging piers and beams in older homes all add to it.',
      },
      {
        question: 'I have stair-step cracks in my brick. Is that serious?',
        answer:
          'Stair-step cracking in brick or mortar is one of the clearest signs that a foundation has moved differentially — one part settled more than another. It is worth having inspected promptly, because the cost of correction generally grows the longer the movement continues.',
      },
      {
        question: 'How do you lift a settled slab foundation?',
        answer:
          'Depending on the situation we use press piers driven to load-bearing strata to support and raise the slab, or polyurethane foam injection to fill voids and lift the concrete from beneath. We recommend whichever method fits your soil conditions and the amount of movement.',
      },
      {
        question: 'Will foundation repair damage my landscaping or interior finishes?',
        answer:
          'We work carefully to keep disruption to a minimum and restore the work areas when we finish. Some cosmetic touch-up — repainting a hairline crack, for example — is normal after a house is brought back to level.',
      },
      {
        question: 'Do you serve the areas around Longview?',
        answer:
          'Yes. We regularly work in White Oak, Gladewater, Kilgore, Hallsville, Judson, Lakeport, Spring Hill, and Gilmer.',
      },
    ],
  },
  {
    slug: 'livingston',
    city: 'Livingston',
    county: 'Polk County',
    navLabel: 'Livingston, TX',
    subtitle: 'Foundation Repair & House Leveling in Livingston, TX',
    teaser:
      "A high water table near Lake Livingston keeps soil saturated year-round. We level lake houses, cabins, and in-town homes and stop the moisture that caused the damage.",
    metaTitle: 'Foundation Repair in Livingston, TX | Jac-It House Leveling',
    metaDescription:
      'Foundation repair and house leveling in Livingston, TX. Free inspections for pier & beam, lake-area, and slab foundations in Polk County. Call 1-877-65-JACIT.',
    heroImage: '/jacitgallery4.jpeg',
    image: '/Steel-Shower-Drain.H03.2k.png',
    intro: [
      "Jac-It House Leveling & Foundation Repair works throughout Livingston and Polk County, from homes in town to the cabins and lake houses ringing Lake Livingston. Twenty-five-plus years in this part of Texas has taught us how differently a lakeside pier and beam structure behaves compared to a slab home a few miles inland.",
      "Water is the defining factor here. Proximity to Lake Livingston, a high water table, and heavy seasonal rain keep soil moisture high year-round. Crawl spaces stay damp, wood piers and sills rot from the ground up, and saturated soil loses its ability to carry load. Homes on sloped lakefront lots add another variable, since runoff concentrates and can undercut supports.",
      "We level and re-support structures, replace failed piers and rotted framing, install vapor barriers and drainage, and lift settled slabs. Inspections in Livingston are free, and we will tell you plainly whether a house needs work now or simply needs to be monitored.",
    ],
    factors: [
      {
        title: 'High Water Table',
        description:
          "Ground moisture near Lake Livingston stays high through the year. Saturated soil carries less load and keeps crawl space wood constantly damp, which accelerates rot in piers, sills, and joists.",
      },
      {
        title: 'Lake & Waterfront Structures',
        description:
          "Cabins, weekend homes, and lake houses are often pier and beam on sloped lots. Runoff, shifting fill, and long spans between supports all contribute to settling that needs specialized leveling.",
      },
      {
        title: 'Wood Rot & Failed Supports',
        description:
          "In this much moisture, original wood piers eventually give out. Shimming a rotted support only buys time — the pier itself has to be replaced and the load properly redistributed.",
      },
      {
        title: 'Runoff on Sloped Lots',
        description:
          "Polk County terrain funnels stormwater toward foundations on many properties. French drains, grading, and moisture barriers keep that water from undoing the leveling work.",
      },
    ],
    nearbyAreas: [
      'Onalaska',
      'Goodrich',
      'Corrigan',
      'Seven Oaks',
      'Points',
      'Blanchard',
      'Leggett',
      'Lake Livingston',
    ],
    faqs: [
      {
        question: 'Do you offer free foundation inspections in Livingston?',
        answer:
          'Yes. Inspections and written estimates in Livingston, around Lake Livingston, and throughout Polk County are free with no obligation.',
      },
      {
        question: 'Do you level lake houses and cabins around Lake Livingston?',
        answer:
          'Regularly. Lakefront and lake-area structures are usually pier and beam on sloped or filled lots, and they need careful leveling and re-support. We replace failed piers, reinforce beams and joists, and address the drainage and moisture that caused the problem.',
      },
      {
        question: 'Why does moisture cause so many foundation problems in Polk County?',
        answer:
          "The water table near the lake is high and rainfall is heavy, so soil stays saturated. Wet soil supports less weight, and constant crawl space humidity rots wood piers, sills, and floor framing. Vapor barriers and drainage are often as important as the structural repair itself.",
      },
      {
        question: 'My floors slope and there is a musty smell under the house. Are those related?',
        answer:
          'Very often, yes. A musty crawl space points to trapped moisture, and that same moisture is usually what deteriorated the supports causing the slope. We address both so the repair holds.',
      },
      {
        question: 'How long does house leveling take in Livingston?',
        answer:
          'Most homes are completed in one to three days. Projects with extensive pier replacement, subfloor repair, or drainage installation take longer, and we give you a realistic timeline with the estimate.',
      },
      {
        question: 'What communities near Livingston do you serve?',
        answer:
          'We cover Onalaska, Goodrich, Corrigan, Seven Oaks, Points, Blanchard, Leggett, and the communities around Lake Livingston.',
      },
    ],
  },
  {
    slug: 'henderson',
    city: 'Henderson',
    county: 'Rusk County',
    navLabel: 'Henderson, TX',
    subtitle: 'Foundation Repair & House Leveling in Henderson, TX',
    teaser:
      "Henderson has a deep stock of older pier and beam homes, many still on original supports. We reset and replace piers and reinforce framing without compromising the structure.",
    metaTitle: 'Foundation Repair in Henderson, TX | Jac-It House Leveling',
    metaDescription:
      'Foundation repair and house leveling in Henderson, TX. Free inspections for historic pier & beam and slab foundations in Rusk County. Call 1-877-65-JACIT.',
    heroImage: '/jacitgallery5.png',
    image: '/presspiers.png',
    intro: [
      "Jac-It House Leveling & Foundation Repair has been serving Henderson and Rusk County for over 25 years. Henderson has a deep stock of older homes — many of them pier and beam, some well over a century old — and stabilizing that kind of structure without damaging what makes it worth keeping takes experience.",
      "The soil around Henderson shifts with the seasons like most of East Texas: clay expands during wet months and contracts through dry summers, working a foundation up and down until cracks open and floors go out of level. In older homes, that movement compounds decades of pier settlement, sill rot, and joist deflection.",
      "We take elevation readings across the entire structure before recommending anything, then correct it with the right method — resetting and replacing piers, reinforcing framing, driving press piers for slab support, or installing drainage to stop the cycle. Every Henderson inspection and estimate is free.",
    ],
    factors: [
      {
        title: 'Historic Homes & Original Supports',
        description:
          "Henderson's older neighborhoods hold many long-standing pier and beam homes still on their original supports. Careful leveling and pier replacement restore stability without compromising the structure.",
      },
      {
        title: 'Seasonal Soil Movement',
        description:
          "Clay-heavy Rusk County soil swells and shrinks through the year, cycling stress into foundations. Over time that produces cracked walls, out-of-level floors, and doors that no longer close square.",
      },
      {
        title: 'Crawl Space Moisture & Rot',
        description:
          "Damp, poorly ventilated crawl spaces deteriorate wood piers, sills, and joists. We replace what has failed and add vapor barriers so the new work is not exposed to the same conditions.",
      },
      {
        title: 'Rural Property Drainage',
        description:
          "Many Rusk County properties have little or no engineered drainage. Grading corrections and French drains keep stormwater from pooling against the foundation after a repair.",
      },
    ],
    nearbyAreas: [
      'Kilgore',
      'Overton',
      'Tatum',
      'Mount Enterprise',
      'New London',
      'Laird Hill',
      'Price',
      'Leverett’s Chapel',
    ],
    faqs: [
      {
        question: 'Do you offer free foundation inspections in Henderson?',
        answer:
          'Yes. Inspections and estimates in Henderson and throughout Rusk County are free and carry no obligation.',
      },
      {
        question: 'Can you level an older or historic home in Henderson?',
        answer:
          'Yes, and it is a large part of our work here. We replace deteriorated piers, sister or replace damaged sills and joists, and lift the structure gradually and evenly so the framing and finishes are protected during the process.',
      },
      {
        question: 'What causes foundation problems in Rusk County?',
        answer:
          'Clay soil that expands with moisture and shrinks in dry weather is the main cause. Add crawl space moisture, aging original supports, poor drainage on rural lots, and tree roots pulling water from the soil, and the movement accelerates.',
      },
      {
        question: 'What are the first signs of foundation trouble I should look for?',
        answer:
          'Uneven or sloping floors, cracks running diagonally from door and window corners, doors and windows that stick, gaps at baseboards, and cracked brick or mortar joints outside.',
      },
      {
        question: 'Do you handle drainage work as well as leveling?',
        answer:
          'Yes. We install French drains, correct grading, and add moisture and vapor barriers. Without controlling water, soil movement continues and a purely structural repair will not last as long as it should.',
      },
      {
        question: 'What areas near Henderson do you serve?',
        answer:
          'We work in Kilgore, Overton, Tatum, Mount Enterprise, New London, Laird Hill, Price, and the surrounding Rusk County communities.',
      },
    ],
  },
  {
    slug: 'nacogdoches',
    city: 'Nacogdoches',
    county: 'Nacogdoches County',
    navLabel: 'Nacogdoches, TX',
    subtitle: 'Foundation Repair & House Leveling in Nacogdoches, TX',
    teaser:
      "The oldest town in Texas has the housing stock to match. We work on historic homes, student rentals near SFA, and newer slab construction on the edges of town.",
    metaTitle: 'Foundation Repair in Nacogdoches, TX | Jac-It House Leveling',
    metaDescription:
      'Foundation repair and house leveling in Nacogdoches, TX. Free inspections for historic pier & beam, rental, and slab properties. 25+ years of experience. Call 1-877-65-JACIT.',
    heroImage: '/jacitgallery6.png',
    image: '/Construction-Foundation-Pit.H03.2k.png',
    intro: [
      "Nacogdoches is the oldest town in Texas, and its housing stock reflects that. Jac-It House Leveling & Foundation Repair has spent more than 25 years working on everything here from historic homes near the downtown district to student rentals around Stephen F. Austin State University and newer slab construction on the edges of town.",
      "Foundation problems in Nacogdoches come from a familiar East Texas combination: heavy Piney Woods rainfall, sandy soil sitting over clay, and substantial tree cover. Water moves through the sand and collects on the clay below, saturating the ground under crawl spaces and washing out support beneath footings. Meanwhile, large pines and hardwoods draw moisture out of the soil near the house, shrinking it unevenly.",
      "We measure the whole structure, find what is actually driving the movement, and fix it — pier replacement and house leveling, subfloor and beam repair, slab lifting with press piers or foam injection, drainage, and root barriers. Inspections and written estimates in Nacogdoches are free.",
    ],
    factors: [
      {
        title: 'Historic & Century-Old Homes',
        description:
          "As the oldest town in Texas, Nacogdoches has many long-standing pier and beam structures. Original supports settle and deteriorate over generations and need methodical replacement rather than quick shimming.",
      },
      {
        title: 'Sandy Soil Over Clay',
        description:
          "Rainfall drains through sandy topsoil and then perches on the clay beneath. That trapped water erodes support under footings and produces uneven settling across a single foundation.",
      },
      {
        title: 'Heavy Tree Cover',
        description:
          "Mature pines and hardwoods close to houses pull large volumes of moisture from the soil and press roots against piers and footings. Root barriers keep that influence away from the foundation.",
      },
      {
        title: 'Rental & Investment Property',
        description:
          "Around the university, deferred maintenance on rental houses lets small pier and subfloor problems grow. We handle inspections and repairs for owners and landlords on a schedule that works around tenants.",
      },
    ],
    nearbyAreas: [
      'Appleby',
      'Cushing',
      'Garrison',
      'Chireno',
      'Douglass',
      'Etoile',
      'Woden',
      'Lake Nacogdoches',
    ],
    faqs: [
      {
        question: 'Do you offer free foundation inspections in Nacogdoches?',
        answer:
          'Yes. Inspections and written estimates in Nacogdoches and throughout Nacogdoches County are free with no obligation.',
      },
      {
        question: 'Can you work on historic homes in Nacogdoches?',
        answer:
          'Yes. Historic pier and beam homes are a regular part of our work here. We lift slowly and evenly, replace failed piers and rotted sills, and reinforce floor framing while protecting the original structure and finishes.',
      },
      {
        question: 'What causes foundation issues in Nacogdoches?',
        answer:
          'Heavy Piney Woods rainfall, sandy soil over denser clay that traps water, dense tree cover that dries soil unevenly near the house, and aging supports in older homes. Most projects here involve more than one of these.',
      },
      {
        question: 'Do you work with landlords and rental property owners?',
        answer:
          'Yes. We inspect and repair rental and investment properties around SFA and elsewhere in town, and we can coordinate scheduling around tenants and turnover.',
      },
      {
        question: 'Do tree roots really damage foundations?',
        answer:
          'Indirectly, and significantly. Large trees pull moisture out of the soil next to a foundation, which causes that soil to shrink and the foundation to drop unevenly. Roots can also press directly against piers and footings. A root barrier interrupts both effects.',
      },
      {
        question: 'What communities near Nacogdoches do you serve?',
        answer:
          'We cover Appleby, Cushing, Garrison, Chireno, Douglass, Etoile, Woden, and the Lake Nacogdoches area.',
      },
    ],
  },
  {
    slug: 'huntsville',
    city: 'Huntsville',
    county: 'Walker County',
    navLabel: 'Huntsville, TX',
    subtitle: 'Foundation Repair & House Leveling in Huntsville, TX',
    teaser:
      "Sandy soil erodes out from under footings and rolling terrain funnels runoff at foundations. We handle both pier and beam leveling and slab lifting across Walker County.",
    metaTitle: 'Foundation Repair in Huntsville, TX | Jac-It House Leveling',
    metaDescription:
      'Foundation repair and house leveling in Huntsville, TX. Free inspections for pier & beam and slab foundations across Walker County. 25+ years of experience. Call 1-877-65-JACIT.',
    heroImage: '/jacitgallery7.png',
    image: '/Gear-Setting-Repair-Symbol.H03.2k.png',
    intro: [
      "Jac-It House Leveling & Foundation Repair serves Huntsville and Walker County with house leveling, pier and beam repair, slab lifting, and drainage solutions. More than 25 years of work across Deep East Texas means we arrive already knowing what conditions here tend to do to a foundation.",
      "Huntsville sits at the edge of the Sam Houston National Forest, where sandy soils, wooded lots, and rolling terrain shape how water moves across a property. Runoff concentrates on sloped lots and can wash out support beneath a footing, while shifting sand and clay layers underneath produce the uneven settling that shows up as sloping floors and cracked walls.",
      "We inspect the full structure — elevations, supports, crawl space or slab, and the way water leaves the property — then recommend only the work that is actually needed. You get a written estimate, a clear explanation, and no pressure. Inspections in Huntsville are free.",
    ],
    factors: [
      {
        title: 'Sandy Soils & Erosion',
        description:
          "Water moves fast through Walker County's sandy soil and can carry it away from under footings and piers. Left alone, that erosion produces localized settling that keeps getting worse.",
      },
      {
        title: 'Rolling Terrain & Runoff',
        description:
          "Sloped lots around Huntsville concentrate stormwater against foundations. Correcting grade and installing drainage is often essential to keeping a leveling job stable.",
      },
      {
        title: 'Wooded Lots & Root Systems',
        description:
          "Near the national forest, large trees sit close to houses. Their root systems pull moisture from foundation soil and press against supports, driving uneven movement.",
      },
      {
        title: 'Mixed Foundation Types',
        description:
          "Huntsville has older pier and beam homes alongside newer slab-on-grade construction. We are equipped for both — pier replacement and leveling, or slab lifting with press piers and foam injection.",
      },
    ],
    nearbyAreas: [
      'New Waverly',
      'Riverside',
      'Trinity',
      'Willis',
      'Coldspring',
      'Dodge',
      'Point Blank',
      'Onalaska',
    ],
    faqs: [
      {
        question: 'Do you offer free foundation inspections in Huntsville?',
        answer:
          'Yes. Inspections and written estimates in Huntsville and throughout Walker County are free and come with no obligation.',
      },
      {
        question: 'What causes foundation problems in Huntsville homes?',
        answer:
          "Sandy soil that erodes under footings, runoff concentrated by Huntsville's rolling terrain, moisture drawn out of the soil by large trees on wooded lots, and shifting clay layers below the surface. Most jobs involve a combination.",
      },
      {
        question: 'Do you repair both slab and pier and beam foundations?',
        answer:
          'Yes. For pier and beam we reset or replace piers and repair sills, beams, and joists. For slabs we use press piers driven to load-bearing strata and polyurethane foam injection to fill voids and lift the concrete.',
      },
      {
        question: 'How do I know whether my problem is serious?',
        answer:
          'The honest answer is that a free inspection is the only reliable way to tell. Some cracks are cosmetic and some signal active movement. We measure elevations to establish what is really happening and tell you if a house does not need work yet.',
      },
      {
        question: 'Can drainage work prevent future foundation problems?',
        answer:
          'It is one of the most effective preventive steps available. French drains, corrected grading, gutter extensions, and moisture barriers keep water from saturating or eroding the soil supporting your foundation.',
      },
      {
        question: 'What areas near Huntsville do you serve?',
        answer:
          'We cover New Waverly, Riverside, Trinity, Willis, Coldspring, Dodge, Point Blank, Onalaska, and the surrounding Walker County communities.',
      },
    ],
  },
];

export const getLocationBySlug = (slug: string): Location | undefined =>
  locations.find((location) => location.slug === slug);
