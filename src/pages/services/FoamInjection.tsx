import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import PageSEO from '../../components/PageSEO';

const faqs = [
  {
    question: "What is foam injection?",
    answer: "Foam injection uses high-density polyurethane foam to lift, level, and stabilize settling or sinking foundations."
  },
  {
    question: "How do I know if my home needs foam injection?",
    answer: "Common signs include uneven or sinking floors, cracks in walls, and gaps around doors or windows."
  },
  {
    question: "Is foam injection safe for my home?",
    answer: "Yes. The foam is injected precisely beneath the foundation with minimal disruption and expands to provide durable support."
  },
  {
    question: "How long does foam injection take?",
    answer: "Most projects are completed in a few hours to a day, depending on the size and extent of the area being treated."
  },
  {
    question: "Will foam injection prevent future foundation problems?",
    answer: "Yes. It fills voids, lifts uneven areas, and reinforces the structure while addressing underlying soil or moisture issues."
  },
  {
    question: "Do you provide inspections and estimates?",
    answer: "Absolutely. We offer a thorough inspection and a clear estimate before any work begins so you know the recommended solution."
  }
];

export default function FoamInjection({ isLoading }: { isLoading?: boolean }) {
  return (
    <>
      <PageSEO
        title="Foam Injection | Jac-It House Leveling & Foundation Repair"
        description="Advanced polyurethane foam injection lifting from Jac-It House Leveling & Foundation Repair — fast, precise slab leveling across Deep East Texas."
        path="/services/foam-injection"
      />
      <ServiceTemplate
      isLoading={isLoading}
      title="Foam Injection"
      subtitle="Advanced Polyurethane Lifting."
      image="/Sandblasting-Machine-Red.H03.2k.png"
      heroImage="/jacitgallery7.png"
      faqs={faqs}
      content={
        <>
          <p>
            At Jac-It House Leveling & Foundation Repair LLC, we specialize in foam injection to stabilize and lift settling or sinking foundations with precision and efficiency. With over 25 years of hands-on experience, our team carefully evaluates each area of your foundation to determine the exact placement and amount of high-density polyurethane foam needed for maximum support.
          </p>
          <p>
            Our process combines advanced technology with expert craftsmanship. The foam is injected beneath your foundation, where it expands to fill voids, lift uneven sections, and reinforce the structure. We also address underlying issues, including soil movement and moisture, to prevent future settling.
          </p>
          <p>
            Serving homeowners across East Texas, we take pride in delivering durable, long-lasting solutions. When it comes to foam injection, trust Jac-It to restore stability to your foundation and provide lasting peace of mind.
          </p>
          
          <div className="mt-10 bg-gray-50 border-l-4 border-jac-green p-6 shadow-sm">
            <h3 className="font-display font-bold text-2xl text-jac-charcoal uppercase mb-3">How it Works</h3>
            <p className="text-gray-700">
              We start by inspecting your foundation to identify settling, voids, or uneven areas. High-density polyurethane foam is then injected beneath the affected sections, where it expands to fill gaps, lift the foundation, and stabilize the structure. Underlying soil and moisture issues are addressed to ensure long-term strength, balance, and protection for your home.
            </p>
          </div>
        </>
      }
      />
    </>
  );
}
