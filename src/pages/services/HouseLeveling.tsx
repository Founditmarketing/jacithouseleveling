import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import PageSEO from '../../components/PageSEO';

const faqs = [
  {
    question: "What is house leveling?",
    answer: "House leveling is the process of lifting and restoring a home to its original position after settling or shifting has caused uneven floors, cracks, or structural imbalance."
  },
  {
    question: "How do I know if my home needs leveling?",
    answer: "Signs include sloping or uneven floors, cracks in walls or ceilings, doors or windows that stick, and visible gaps around trim or baseboards."
  },
  {
    question: "What causes a house to become unlevel?",
    answer: "Common causes include shifting soil, moisture imbalance, drainage problems, or deterioration in pier and beam supports over time."
  },
  {
    question: "How long does house leveling take?",
    answer: "Most projects are completed in 1–3 days, depending on the type of foundation and the extent of settling."
  },
  {
    question: "Will house leveling damage my home or yard?",
    answer: "No. Our team uses professional equipment and proven techniques to safely lift and level your home while minimizing disruption."
  },
  {
    question: "Do you provide inspections or estimates before leveling?",
    answer: "Yes! We offer a free inspection and a detailed estimate, ensuring you fully understand the condition of your home and recommended repair options."
  }
];

export default function HouseLeveling({ isLoading }: { isLoading?: boolean }) {
  return (
    <>
      <PageSEO
        title="House Leveling | Jac-It House Leveling & Foundation Repair"
        description="Restore balance and stability to your home with professional house leveling from Jac-It House Leveling & Foundation Repair in Deep East Texas."
        path="/services/house-leveling"
      />
      <ServiceTemplate
      isLoading={isLoading}
      title="House Leveling"
      subtitle="Restoring Balance and Stability."
      image="/Survey-Automatic-Level-on-Tripod.H03.2k.png"
      heroImage="/jacitgallery3.jpeg"
      faqs={faqs}
      content={
        <>
          <p>
            At Jac-It House Leveling & Foundation Repair LLC, we specialize in professional house leveling services that restore balance, safety, and stability to your home. With over 25 years of experience, our team accurately identifies areas of settling or uneven floors and uses advanced equipment to lift and level your home with precision and care.
          </p>
          <p>
            Our process combines expert technique with attention to detail. From adjusting piers and beams to reinforcing supports and correcting alignment, every step is performed to ensure long-term stability. We also address contributing factors—such as poor drainage or shifting soil—to prevent future settling and foundation issues.
          </p>
          <p>
            Proudly serving homeowners across East Texas, we’re dedicated to results that last. When your home needs to be lifted, leveled, or stabilized, trust Jac-It to restore its foundation and your peace of mind.
          </p>
          
          <div className="mt-10 bg-gray-50 border-l-4 border-jac-green p-6 shadow-sm">
            <h3 className="font-display font-bold text-2xl text-jac-charcoal uppercase mb-3">How it Works</h3>
            <p className="text-gray-700">
              We begin with a full inspection to locate uneven areas or settling in your home. Using precision jacks and advanced leveling equipment, we carefully lift and realign your structure to its proper position. Damaged supports are reinforced for long-term stability—restoring balance, safety, and confidence in your home’s foundation.
            </p>
          </div>
        </>
      }
      />
    </>
  );
}
