import { personalData } from "../data/personalData.js";

export const PersonSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalData.name,
    "alternateName": personalData.alternateName,
    "jobTitle": personalData.jobTitle,
    "description": "Full Stack Developer specializing in MERN stack, React, Node.js, and modern web technologies",
    "url": personalData.siteUrl,
    "image": `${personalData.siteUrl}/src/assets/My_self.webp`,
    "sameAs": [
      personalData.linkedinUrl,
      personalData.githubUrl,
      personalData.instagramUrl
    ],
    "email": personalData.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "addressCountry": "IN"
    },
    "knowsAbout": [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JavaScript",
      "TypeScript",
      "Angular",
      "Next.js",
      "MERN Stack",
      "Full Stack Development",
      "Web Development"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "SVCE"
    }
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

export const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${personalData.name} - Portfolio`,
    "alternateName": personalData.alternateName + ".dev",
    "url": personalData.siteUrl,
    "description": `Portfolio website of ${personalData.name} - Full Stack Developer, MERN Developer, and React Developer`,
    "author": {
      "@type": "Person",
      "name": personalData.name
    },
    "publisher": {
      "@type": "Person",
      "name": personalData.name
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${personalData.siteUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

/**
 * Project-Specific Structured Data (JSON-LD)
 * Creates structured data for individual project pages
 */
export const ProjectDetailSchema = ({ project }) => {
  if (!project) return null;

  // Handle image URL
  let imageUrl = project.img;
  if (typeof project.img === 'object' && project.img !== null) {
    imageUrl = project.img.default || project.img.src || project.img;
  }
  if (typeof imageUrl === 'string' && !imageUrl.startsWith('http')) {
    imageUrl = `${personalData.siteUrl}${imageUrl.startsWith('/') ? imageUrl : '/' + imageUrl}`;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.longDesc || project.desc,
    "url": project.link,
    "image": imageUrl,
    "applicationCategory": "WebApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": personalData.name,
      "url": personalData.siteUrl,
      "sameAs": [
        personalData.linkedinUrl,
        personalData.githubUrl
      ]
    },
    "creator": {
      "@type": "Person",
      "name": personalData.name
    },
    "keywords": project.keywords,
    "programmingLanguage": project.tech.join(", "),
    "softwareVersion": "1.0",
    "datePublished": "2024-01-01",
    "inLanguage": "en"
  };

  // Add GitHub URL if available
  if (project.github) {
    schema.codeRepository = project.github;
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

export const PortfolioProjectSchema = ({ projects }) => {
  if (!projects || projects.length === 0) return null;
  
  const portfolioItems = projects.map(project => {
    // Handle image imports - Vite imports return objects with default property or direct string
    let imageUrl = project.img;
    if (typeof project.img === 'object' && project.img !== null) {
      imageUrl = project.img.default || project.img.src || project.img;
    }
    // Convert relative paths to absolute URLs for structured data
    if (typeof imageUrl === 'string' && !imageUrl.startsWith('http')) {
      imageUrl = `${personalData.siteUrl}${imageUrl.startsWith('/') ? imageUrl : '/' + imageUrl}`;
    }
    
    return {
      "@type": "CreativeWork",
      "@id": project.link,
      "name": project.title,
      "description": project.desc,
      "url": project.link,
      "image": imageUrl,
      "creator": {
        "@type": "Person",
        "name": personalData.name
      },
      "keywords": project.tech.join(", ")
    };
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Portfolio Projects",
    "description": `Featured projects by ${personalData.name} - Full Stack Developer`,
    "itemListElement": portfolioItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": item
    }))
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

/**
 * Project-Specific Structured Data (JSON-LD)
 * Creates structured data for individual project pages
 */
export const PortfolioDetailSchema = ({ project }) => {
  if (!project) return null;

  // Handle image URL
  let imageUrl = project.img;
  if (typeof project.img === 'object' && project.img !== null) {
    imageUrl = project.img.default || project.img.src || project.img;
  }
  if (typeof imageUrl === 'string' && !imageUrl.startsWith('http')) {
    imageUrl = `${personalData.siteUrl}${imageUrl.startsWith('/') ? imageUrl : '/' + imageUrl}`;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.longDesc || project.desc,
    "url": project.link,
    "image": imageUrl,
    "applicationCategory": "WebApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": personalData.name,
      "url": personalData.siteUrl,
      "sameAs": [
        personalData.linkedinUrl,
        personalData.githubUrl
      ]
    },
    "creator": {
      "@type": "Person",
      "name": personalData.name
    },
    "keywords": project.keywords,
    "programmingLanguage": project.tech.join(", "),
    "softwareVersion": "1.0",
    "datePublished": "2024-01-01",
    "inLanguage": "en"
  };

  // Add GitHub URL if available
  if (project.github) {
    schema.codeRepository = project.github;
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};
