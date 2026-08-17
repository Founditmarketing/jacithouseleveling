import { useEffect } from 'react';

const SITE_URL = 'https://www.jac-itfoundationrepair.com';
const DEFAULT_OG_IMAGE = '/jacitlogohorizontal.png';

function upsertMetaByName(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertMetaByProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  /** Absolute or root-relative image used for og:image / twitter:image */
  image?: string;
  /** Comma-separated keyword list. Low SEO weight, but harmless and useful for internal audits. */
  keywords?: string;
  ogType?: string;
}

export default function PageSEO({
  title,
  description,
  path,
  image,
  keywords,
  ogType = 'website',
}: PageSEOProps) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const imageUrl = `${SITE_URL}${image || DEFAULT_OG_IMAGE}`;

    document.title = title;
    upsertMetaByName('description', description);
    upsertMetaByProperty('og:title', title);
    upsertMetaByProperty('og:description', description);
    upsertMetaByProperty('og:url', url);
    upsertMetaByProperty('og:type', ogType);
    upsertMetaByProperty('og:image', imageUrl);
    upsertMetaByName('twitter:card', 'summary_large_image');
    upsertMetaByName('twitter:title', title);
    upsertMetaByName('twitter:description', description);
    upsertMetaByName('twitter:image', imageUrl);
    if (keywords) {
      upsertMetaByName('keywords', keywords);
    }
    upsertCanonical(url);
  }, [title, description, path, image, keywords, ogType]);

  return null;
}
