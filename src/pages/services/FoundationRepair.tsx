import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import PageSEO from '../../components/PageSEO';

const faqs = [
  {
    question: "What causes foundation problems?",
    answer: "Foundation issues are often caused by soil movement, moisture changes, poor drainage, or natural settling over time. These shifts can lead to cracks, uneven floors, and structural instability."
  },
  {
    question: "How do I know if my foundation needs repair?",
    answer: "Look for cracks in walls or floors, sticking doors and windows, gaps around trim, or uneven flooring. These are common warning signs that your foundation may need attention."
  },
  {
    question: "What repair methods do you use?",
    answer: "We use proven foundation repair techniques—including slab lifting, pier systems, and soil stabilization—to restore your home’s strength and stability."
  },
  {
    question: "How long does a foundation repair take?",
    answer: "Most projects can be completed within 1–3 days, depending on the extent of the damage and the repair method needed."
  },
  {
    question: "Will foundation repair damage my yard or home?",
    answer: "We take great care to minimize disruption. Our team works cleanly and efficiently, ensuring your home and landscaping are protected throughout the process."
  },
  {
    question: "Do you offer inspections or estimates?",
    answer: "Yes! We provide a free inspection and a detailed estimate so you understand the condition of your foundation and the best repair options for your home."
  }
];

export default function FoundationRepair({ isLoading }: { isLoading?: boolean }) {
  return (
    <>
      <PageSEO
        title="Foundation Repair | Jac-It House Leveling & Foundation Repair"
        description="Securing concrete slab foundations for over 25 years. Jac-It House Leveling & Foundation Repair provides expert foundation repair across Deep East Texas."
        path="/services/foundation-repair"
      />
      <ServiceTemplate
      isLoading={isLoading}
      title="Foundation Repair"
      subtitle="Securing Concrete Slab Foundations."
      image="/Construction-Foundation-Pit.H03.2k.png"
      heroImage="/jacitgallery2.jpeg"
      faqs={faqs}
      content={
        <>
          <p>
            At Jac-It House Leveling & Foundation Repair LLC, we specialize in dependable foundation repair solutions that keep your home safe, level, and structurally sound. With over 25 years of hands-on experience, our team carefully evaluates every crack, shift, and settling issue to pinpoint the root cause before it becomes a serious problem. Using proven repair methods and state-of-the-art equipment, we stabilize, lift, and restore your foundation with precision and care.
          </p>
          <p>
            Our process blends craftsmanship with efficiency. From reinforcing weakened areas to filling voids and correcting alignment, every project is completed with close attention to detail and long-term durability in mind. We also address contributing factors—such as poor drainage or soil movement—to help prevent future foundation issues.
          </p>
          <p>
            Proudly serving homeowners across East Texas, we’re dedicated to delivering results that stand firm for decades. When it comes to foundation repair, trust Jac-It to strengthen your home from the ground up.
          </p>
          
          <div className="mt-10 bg-gray-50 border-l-4 border-jac-green p-6 shadow-sm">
            <h3 className="font-display font-bold text-2xl text-jac-charcoal uppercase mb-3">How it Works</h3>
            <p className="text-gray-700">
              We begin with a detailed inspection to identify cracks, settling, or structural weaknesses in your foundation. Using advanced equipment and proven repair methods, we lift, stabilize, and reinforce your home’s base to restore strength and balance. The result: a secure, long-lasting foundation that protects your home for years to come.
            </p>
          </div>
        </>
      }
      />
    </>
  );
}
