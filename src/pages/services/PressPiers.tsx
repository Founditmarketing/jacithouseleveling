import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';

const faqs = [
  {
    question: "What are press piers?",
    answer: "Press piers are steel supports installed beneath a home’s foundation to lift, stabilize, and prevent further settling. They transfer the weight of the structure to stable soil deep underground."
  },
  {
    question: "How do I know if I need press piers?",
    answer: "Signs include uneven or sinking floors, cracks in walls or ceilings, and doors or windows that stick—common indicators of foundation settling."
  },
  {
    question: "How long does press pier installation take?",
    answer: "Most press pier projects are completed in 1–3 days, depending on the number of piers needed and the size of your home."
  },
  {
    question: "Will press piers damage my home or yard?",
    answer: "No. Our team uses hydraulic equipment and proven methods to install piers safely with minimal disruption to your property."
  },
  {
    question: "Do press piers prevent future settling?",
    answer: "Yes. Press piers transfer the load to stable soil and reinforce the foundation, protecting your home from future movement."
  },
  {
    question: "Do you offer inspections or estimates?",
    answer: "Absolutely. We provide a detailed inspection and a clear estimate so you understand your foundation’s needs and repair options before work begins."
  }
];

export default function PressPiers({ isLoading }: { isLoading?: boolean }) {
  return (
    <ServiceTemplate
      isLoading={isLoading}
      title="Press Piers"
      subtitle="Heavy-Duty Steel Support Systems."
      image="/presspiers.png"
      heroImage="/jacitgallery4.jpeg"
      faqs={faqs}
      content={
        <>
          <p>
            At Jac-It House Leveling & Foundation Repair LLC, we specialize in professional press pier installation and repair to restore stability and strength to homes with settling or sinking foundations. With over 25 years of hands-on experience, our team carefully evaluates your foundation to determine the ideal pier placement and depth needed for maximum support. Using precision hydraulic equipment, we install high-quality steel piers that reach load-bearing soil, lifting and securing your home with lasting results.
          </p>
          <p>
            Our approach blends expertise and precision. Each pier is installed to exact standards, ensuring uniform support and long-term performance. We focus on both the structure and the soil conditions beneath your home to prevent future movement or failure.
          </p>
          <p>
            Proudly serving homeowners across East Texas, we’re committed to delivering dependable, durable foundation solutions. When it comes to press piers, trust Jac-It to provide stability that stands the test of time.
          </p>
          
          <div className="mt-10 bg-gray-50 border-l-4 border-jac-green p-6 shadow-sm">
            <h3 className="font-display font-bold text-2xl text-jac-charcoal uppercase mb-3">How it Works</h3>
            <p className="text-gray-700">
              We start by assessing foundation movement and determining optimal pier placement. Using hydraulic pressure, steel piers are driven deep into stable soil until they reach load-bearing strength. The foundation is then carefully lifted and secured in place, ensuring long-term stability and protection against future settlement.
            </p>
          </div>
        </>
      }
    />
  );
}
