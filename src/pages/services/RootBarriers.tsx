import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import PageSEO from '../../components/PageSEO';

export default function RootBarriers({ isLoading }: { isLoading?: boolean }) {
  return (
    <>
      <PageSEO
        title="Root Barriers | Jac-It House Leveling & Foundation Repair"
        description="Protect your slab from aggressive tree roots with professional root barrier installation from Jac-It House Leveling & Foundation Repair in Deep East Texas."
        path="/services/root-barriers"
      />
      <ServiceTemplate
      isLoading={isLoading}
      title="Root Barriers"
      subtitle="Defending Your Slab Against Aggressive Roots."
      image="/Construction-Foundation-Pit.H03.2k.png"
      content={
        <>
          <p>
            Large trees near your home can send expansive root systems deep under your foundation in search of moisture. As these roots grow, they cause the soil to shift and can literally push upward, cracking concrete slabs and beams.
          </p>
          <p>
            Our root barrier installation involves excavating a trench between the tree and the foundation and installing a heavy-duty, impenetrable barrier. This safely redirects root growth downward and away from your home, protecting your structural investment without harming the tree.
          </p>
        </>
      }
      />
    </>
  );
}
