import React from 'react';
import ServiceTemplate from '../../components/ServiceTemplate';
import PageSEO from '../../components/PageSEO';

export default function CommercialPrep({ isLoading }: { isLoading?: boolean }) {
  return (
    <>
      <PageSEO
        title="Commercial Prep | Jac-It House Leveling & Foundation Repair"
        description="Heavy-duty commercial foundation engineering and site prep from Jac-It House Leveling & Foundation Repair, serving Deep East Texas for over 25 years."
        path="/services/commercial-prep"
      />
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
    </>
  );
}
