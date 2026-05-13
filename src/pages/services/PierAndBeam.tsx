import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';

const faqs = [
  {
    question: "What is pier and beam repair?",
    answer: "Pier and beam repair involves inspecting, lifting, and leveling homes supported by piers and beams, replacing or reinforcing damaged supports to restore stability."
  },
  {
    question: "How do I know if my pier and beam foundation needs repair?",
    answer: "Common signs include uneven floors, sagging areas, cracks in walls or ceilings, and doors or windows that stick."
  },
  {
    question: "How long does a pier and beam repair take?",
    answer: "Most repairs can be completed in 1–3 days, depending on the size and extent of the damage."
  },
  {
    question: "Will the repair prevent future foundation issues?",
    answer: "Yes. We address structural weaknesses and drainage or moisture problems to ensure long-lasting stability for your home."
  },
  {
    question: "Is pier and beam repair disruptive to my home?",
    answer: "Our team works carefully to minimize disruption. Most work is completed with minimal noise and mess, and your home remains accessible during repairs."
  },
  {
    question: "Do you offer inspections before repair?",
    answer: "Absolutely. We provide a detailed inspection and clear estimate, so you understand the scope of work before any repairs begin."
  }
];

export default function PierAndBeam({ isLoading }: { isLoading?: boolean }) {
  return (
    <ServiceTemplate
      isLoading={isLoading}
      title="Pier & Beam Repair"
      subtitle="Restoring Stability to Crawlspace Foundations."
      image="/Concrete-Pillar.H03.2k.png"
      heroImage="/jacitgallery.jpeg"
      faqs={faqs}
      content={
        <>
          <p>
            At Jac-It House Leveling & Foundation Repair LLC, we specialize in precise pier and beam repair to keep your home safe, stable, and structurally sound. With over 25 years of hands-on experience, our team carefully inspects every beam, pier, and support system to identify issues before they become major problems. We use proven repair methods and state-of-the-art equipment to lift, level, and reinforce your foundation with accuracy and reliability.
          </p>
          <p>
            Our approach combines efficiency and craftsmanship. From replacing damaged beams to adjusting supports and ensuring proper alignment, every project is handled with care and attention to detail. We also address underlying issues, including moisture and drainage, to prevent future damage.
          </p>
          <p>
            Serving homeowners across East Texas, we take pride in delivering results that stand the test of time. When it comes to pier and beam repair, trust Jac-It to protect your home and provide lasting peace of mind.
          </p>
          
          <div className="mt-10 bg-gray-50 border-l-4 border-jac-green p-6 shadow-sm">
            <h3 className="font-display font-bold text-2xl text-jac-charcoal uppercase mb-3">How it Works</h3>
            <p className="text-gray-700">
              We inspect your home for damaged beams and uneven floors, then lift and level it using precision equipment. Damaged supports are replaced or reinforced, and drainage issues are corrected to prevent future problems. The result: a stable, level foundation and a home built to last.
            </p>
          </div>
        </>
      }
    />
  );
}
