import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = 'https://www.asistir-srl.com.ar/images/empresa-1.png', // Default image
  type = 'website'
}) => {
  const location = useLocation();
  const siteTitle = 'Asistir S.R.L.';
  const fullTitle = `${title} | ${siteTitle}`;
  const currentUrl = `https://www.asistir-srl.com.ar/#${location.pathname}`;

  useEffect(() => {
    // Update Title
    document.title = fullTitle;

    // Helper to update meta tags
    const updateMeta = (name: string, content: string, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Meta
    updateMeta('description', description);
    
    // Open Graph / Facebook / LinkedIn
    updateMeta('og:title', fullTitle, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:url', currentUrl, 'property');
    updateMeta('og:type', type, 'property');
    updateMeta('og:image', image, 'property');
    updateMeta('og:site_name', siteTitle, 'property');

    // Canonical
    let linkRelCanonical = document.querySelector("link[rel='canonical']");
    if (!linkRelCanonical) {
      linkRelCanonical = document.createElement('link');
      linkRelCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkRelCanonical);
    }
    linkRelCanonical.setAttribute('href', currentUrl);

  }, [fullTitle, description, currentUrl, image, type]);

  return null;
};

export default SEO;