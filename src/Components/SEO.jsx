import { Helmet } from 'react-helmet-async';

/**
 * SEO Component for managing meta tags, Open Graph, Twitter Cards, and structured data
 * @param {Object} props - SEO configuration object
 * @param {string} props.title - Page title
 * @param {string} props.description - Meta description
 * @param {string} props.keywords - Comma-separated keywords
 * @param {string} props.canonical - Canonical URL
 * @param {string} props.ogImage - Open Graph image URL
 * @param {string} props.type - Open Graph type (website, article, etc.)
 */
export const SEO = ({ 
  title = "Abhishek Mishra - Full Stack Developer | MERN Developer | React Developer",
  description = "Abhishek Mishra is a Full Stack Developer specializing in MERN stack, React, Node.js, and modern web technologies. View portfolio projects and get in touch.",
  keywords = "Abhishek Mishra, Full Stack Developer, MERN Developer, React Developer, Node.js Developer, abmishra.dev, Web Developer, Software Engineer, Portfolio",
  canonical = "https://abmishra.dev",
  ogImage = "https://abmishra.dev/src/assets/My_self.webp",
  type = "website"
}) => {
  const fullTitle = title.includes("Abhishek Mishra") ? title : `${title} | Abhishek Mishra - Full Stack Developer`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Abhishek Mishra" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Abhishek Mishra - Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@abhishekmishra0409" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#070b1a" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};
