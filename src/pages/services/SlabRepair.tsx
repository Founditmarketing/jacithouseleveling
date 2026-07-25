import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import PageSEO from '../../components/PageSEO';

const faqs = [
  {
    question: "What is slab repair?",
    answer: "Slab repair involves stabilizing and leveling a concrete foundation that has settled, cracked, or become uneven over time."
  },
  {
    question: "How do I know if my slab needs repair?",
    answer: "Look for cracks in floors or walls, uneven surfaces, sticking doors or windows, or noticeable dips in your concrete."
  },
  {
    question: "What methods are used for slab repair?",
    answer: "We use proven techniques such as slab lifting, soil stabilization, and crack reinforcement to restore your foundation’s strength and level."
  },
  {
    question: "How long does a slab repair take?",
    answer: "Most slab repairs are completed within 1–3 days, depending on the extent of the damage."
  },
  {
    question: "Will the repair prevent future problems?",
    answer: "Yes. We address underlying issues, including soil movement and drainage, to help prevent future settling or cracks."
  },
  {
    question: "Do you offer inspections or estimates?",
    answer: "Absolutely. We provide a detailed inspection and a clear estimate before starting any repair work, so you know exactly what’s needed."
  }
];

export default function SlabRepair({ isLoading }: { isLoading?: boolean }) {
  return (
    <>
      <PageSEO
        title="Slab Repair | Jac-It House Leveling & Foundation Repair"
        description="Expert concrete slab foundation repair from Jac-It House Leveling & Foundation Repair, serving homeowners across Deep East Texas for 25+ years."
        path="/services/slab-repair"
      />
      <ServiceTemplate
      isLoading={isLoading}
      title="Slab Repair"
      subtitle="Expert Concrete Foundation Solutions."
      image="/Broken-Wall-Panel.H03.2k.png"
      heroImage="/jacitgallery5.png"
      faqs={faqs}
      content={
        <>
          <p>
            At Jac-It House Leveling & Foundation Repair LLC, we specialize in expert slab repair to restore stability, safety, and structural integrity to homes with settling or cracked concrete foundations. With over 25 years of hands-on experience, our team carefully evaluates every slab for cracks, sinking, or uneven areas before they develop into serious problems. We use proven repair techniques and advanced equipment to lift, level, and reinforce your slab with precision and reliability.
          </p>
          <p>
            Our approach combines efficiency and craftsmanship. From filling cracks and stabilizing the soil beneath to lifting and leveling uneven slabs, every project is completed with attention to detail and long-term durability in mind. We also address contributing factors such as moisture and drainage to prevent future damage.
          </p>
          <p>
            Serving homeowners across East Texas, we take pride in delivering results that last. When it comes to slab repair, trust Jac-It to protect your home and provide lasting peace of mind.
          </p>
          
          <div className="mt-10 bg-gray-50 border-l-4 border-jac-green p-6 shadow-sm">
            <h3 className="font-display font-bold text-2xl text-jac-charcoal uppercase mb-3">How it Works</h3>
            <p className="text-gray-700">
              We begin with a thorough inspection to locate cracks, sinking, or uneven areas in your concrete slab. Using advanced lifting and stabilization methods, we carefully raise and level the slab to its proper position. Damaged areas are reinforced, and drainage or soil issues are addressed to ensure long-term stability and a safe, durable foundation.
            </p>
          </div>
        </>
      }
      />
    </>
  );
}
