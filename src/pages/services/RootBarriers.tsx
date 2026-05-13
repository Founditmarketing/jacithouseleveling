import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';

export default function RootBarriers({ isLoading }: { isLoading?: boolean }) {
  return (
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
  );
}
