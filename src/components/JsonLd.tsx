import { useEffect } from 'react';

interface JsonLdProps {
  id: string;
  data: object;
}

export default function JsonLd({ id, data }: JsonLdProps) {
  const json = JSON.stringify(data);

  useEffect(() => {
    const scriptId = `ld-json-${id}`;
    let el = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement('script');
      el.id = scriptId;
      el.type = 'application/ld+json';
      document.head.appendChild(el);
    }
    el.textContent = json;

    return () => {
      el?.remove();
    };
  }, [id, json]);

  return null;
}
