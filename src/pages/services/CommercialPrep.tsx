import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';

export default function CommercialPrep({ isLoading }: { isLoading?: boolean }) {
  return (
    <ServiceTemplate
      isLoading={isLoading}
      title="Commercial Prep"
      subtitle="Heavy-Duty Foundation Engineering."
      image="/Gear-Setting-Repair-Symbol.H03.2k.png"
      content={
        <>
          <p>
            Commercial properties face unique structural demands, carrying significantly heavier loads than residential homes. Preparing a commercial site for foundation work requires specialized heavy equipment and rigorous engineering standards.
          </p>
          <p>
            Whether you are preparing a new site or stabilizing an existing commercial structure, our expert crew has the industrial-grade resources to handle large-scale excavation, deep pilings, and structural reinforcement with precision and compliance.
          </p>
        </>
      }
    />
  );
}
