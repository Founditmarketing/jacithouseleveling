import React from 'react';
import { Navigate } from 'react-router-dom';
import LocationTemplate from '../../components/LocationTemplate';
import PageSEO from '../../components/PageSEO';
import { getLocationBySlug } from '../../data/locations';

interface LocationPageProps {
  slug: string;
  isLoading?: boolean;
}

export default function LocationPage({ slug, isLoading }: LocationPageProps) {
  const location = getLocationBySlug(slug);

  if (!location) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <PageSEO
        title={location.metaTitle}
        description={location.metaDescription}
        path={`/locations/${location.slug}`}
      />
      <LocationTemplate {...location} isLoading={isLoading} />
    </>
  );
}
