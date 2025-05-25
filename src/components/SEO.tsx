import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

const SEO = ({
  title = "K4 Fitness Zone - Best Gym in Lucknow | Premium Fitness Center",
  description = "K4 Fitness Zone - The best gym in Lucknow offering state-of-the-art equipment, expert trainers, and personalized fitness programs. Join the leading fitness center in Lucknow for transformation and results. Special offers on membership plans!",
  keywords = [
    "best gym in lucknow",
    "gym in lucknow",
    "fitness center lucknow",
    "best fitness center lucknow",
    "personal training lucknow",
    "weight loss gym lucknow",
    "bodybuilding gym lucknow",
    "premium gym lucknow",
    "affordable gym lucknow",
    "gym membership lucknow",
    "fitness trainer lucknow",
    "cardio gym lucknow",
    "strength training lucknow",
    "gym near me lucknow",
    "K4 Fitness Zone",
    "fitness classes lucknow",
    "gym facilities lucknow",
    "modern gym lucknow",
    "top rated gym lucknow",
    "professional gym lucknow"
  ],
  image = "/images/k4-fitness-zone.jpg", // Replace with your actual image path
  url = "https://k4fitnesszone.com" // Replace with your actual domain
}: SEOProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    "name": "K4 Fitness Zone",
    "image": image,
    "description": description,
    "@id": url,
    "url": url,
    "telephone": "+919648745611",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address", // Replace with actual address
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "Your Postal Code", // Replace with actual postal code
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.8467, // Replace with actual coordinates
      "longitude": 80.9462
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "06:00",
      "closes": "22:00"
    },
    "sameAs": [
      "https://www.facebook.com/k4fitnesszone",
      "https://www.instagram.com/k4fitnesszone"
    ],
    "priceRange": "₹₹",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Modern Equipment",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Personal Training",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Group Classes",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Cardio Area",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Strength Training",
        "value": true
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="K4 Fitness Zone" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Lucknow" />
      <meta name="geo.position" content="26.8467;80.9462" /> {/* Replace with actual coordinates */}
      <meta name="ICBM" content="26.8467, 80.9462" /> {/* Replace with actual coordinates */}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO; 