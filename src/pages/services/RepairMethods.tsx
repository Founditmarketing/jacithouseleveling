import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import PageSEO from '../../components/PageSEO';

const faqs = [
  {
    question: "What repair methods do you offer?",
    answer: "We provide pier and beam repair, slab lifting, press piers, foam injection, and drainage solutions to stabilize and protect your home."
  },
  {
    question: "How do you determine which method to use?",
    answer: "Our team conducts a thorough inspection to assess the foundation, soil conditions, and the type of damage before recommending the best approach."
  },
  {
    question: "Are your methods safe for my home?",
    answer: "Yes. All repair techniques are proven, precise, and performed with state-of-the-art equipment to protect your structure."
  },
  {
    question: "How long does a typical repair take?",
    answer: "Most repairs are completed in 1–3 days, depending on the complexity and scope of the project."
  },
  {
    question: "Will these repairs prevent future foundation issues?",
    answer: "Yes. We address underlying problems such as soil movement, moisture, and drainage to ensure long-term stability."
  },
  {
    question: "Do you provide inspections and estimates before repairs?",
    answer: "Absolutely. We offer a detailed inspection and clear estimate so you understand the recommended repair method before any work begins."
  }
];

export default function RepairMethods({ isLoading }: { isLoading?: boolean }) {
  return (
    <>
      <PageSEO
        title="Repair Methods | Jac-It House Leveling & Foundation Repair"
        description="Comprehensive foundation repair methods from Jac-It House Leveling & Foundation Repair, backed by 25+ years of experience across Deep East Texas."
        path="/services/repair-methods"
      />
      <ServiceTemplate
      isLoading={isLoading}
      title="Repair Methods"
      subtitle="Comprehensive Foundation Solutions."
      image="/Gear-Setting-Repair-Symbol.H03.2k.png"
      heroImage="/jacitgallery6.png"
      faqs={faqs}
      content={
        <>
          <p>
            At Jac-It House Leveling & Foundation Repair LLC, we specialize in comprehensive foundation repair methods designed to restore stability, safety, and longevity to homes across East Texas. With over 25 years of hands-on experience, our team carefully evaluates each home to determine the most effective repair approach, whether it involves pier and beam adjustment, slab lifting, press piers, or foam injection.
          </p>
          <p>
            Our process combines precision, expertise, and attention to detail. From selecting the proper repair method to reinforcing supports and correcting underlying issues such as drainage or soil movement, every project is handled with care to ensure long-lasting results.
          </p>
          <p>
            Serving homeowners across East Texas, we take pride in using proven repair techniques to protect homes and provide peace of mind. When it comes to foundation repair methods, trust Jac-It to deliver solutions built to stand the test of time.
          </p>
          
          <div className="mt-10 bg-gray-50 border-l-4 border-jac-green p-6 shadow-sm">
            <h3 className="font-display font-bold text-2xl text-jac-charcoal uppercase mb-3">How it Works</h3>
            <p className="text-gray-700">
              We begin with a thorough inspection to identify foundation issues and determine the best repair method. Whether it’s pier and beam adjustment, slab lifting, press piers, or foam injection, we implement the chosen solution with precision. Underlying factors like soil movement and drainage are addressed to ensure long-lasting stability and protection for your home.
            </p>
          </div>
        </>
      }
      />
    </>
  );
}
