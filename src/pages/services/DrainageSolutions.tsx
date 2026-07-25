import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import PageSEO from '../../components/PageSEO';

const faqs = [
  {
    question: "What are drainage solutions?",
    answer: "Drainage solutions manage water flow around your home to prevent pooling, erosion, and foundation damage."
  },
  {
    question: "How do I know if I need drainage solutions?",
    answer: "Signs include water pooling near the foundation, soggy soil, basement leaks, or soil erosion around your home."
  },
  {
    question: "What types of drainage solutions do you offer?",
    answer: "We install French drains, grading systems, vapor barriers, and other custom solutions tailored to your property."
  },
  {
    question: "Will drainage solutions protect my foundation?",
    answer: "Yes. Proper drainage diverts water away from your foundation, preventing moisture-related settling and damage."
  },
  {
    question: "How long does installation take?",
    answer: "Most drainage projects are completed within 1–3 days, depending on the size and complexity of the system."
  },
  {
    question: "Do you provide inspections and estimates?",
    answer: "Absolutely. We offer a detailed inspection and clear estimate so you understand the best solution before work begins."
  }
];

export default function DrainageSolutions({ isLoading }: { isLoading?: boolean }) {
  return (
    <>
      <PageSEO
        title="Drainage Solutions | Jac-It House Leveling & Foundation Repair"
        description="Protect your home from water damage with expert drainage solutions from Jac-It House Leveling & Foundation Repair, serving Deep East Texas for 25+ years."
        path="/services/drainage-solutions"
      />
      <ServiceTemplate
      isLoading={isLoading}
      title="Drainage Solutions"
      subtitle="Protecting Foundations from Water Damage."
      image="/Steel-Shower-Drain.H03.2k.png"
      heroImage="/jacitimage.jpg"
      faqs={faqs}
      content={
        <>
          <p>
            At Jac-It House Leveling & Foundation Repair LLC, we specialize in effective drainage solutions to protect homes from water damage, soil erosion, and foundation problems. With over 25 years of hands-on experience, our team carefully evaluates your property to identify water flow issues, pooling, and soil movement that can threaten the stability of your foundation.
          </p>
          <p>
            Our approach combines precision and craftsmanship. From installing French drains and grading solutions to vapor barriers and water diversion systems, every project is completed with attention to detail to ensure proper drainage and long-term protection. We also address underlying moisture and soil concerns to prevent future foundation damage.
          </p>
          <p>
            Serving homeowners across East Texas, we take pride in delivering durable, reliable drainage solutions. When it comes to drainage and water management, trust Jac-It to safeguard your home and provide lasting peace of mind.
          </p>
          
          <div className="mt-10 bg-gray-50 border-l-4 border-jac-green p-6 shadow-sm">
            <h3 className="font-display font-bold text-2xl text-jac-charcoal uppercase mb-3">How it Works</h3>
            <p className="text-gray-700">
              We start with a thorough inspection to identify water flow issues, pooling, and soil erosion around your home. Customized solutions—such as French drains, grading adjustments, and vapor barriers—are installed to redirect water away from your foundation. These measures protect your home from moisture damage, stabilize the soil, and prevent future foundation problems.
            </p>
          </div>
        </>
      }
      />
    </>
  );
}
