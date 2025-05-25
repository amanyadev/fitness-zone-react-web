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
  description = "K4 Fitness Zone - The #1 gym in Lucknow offering state-of-the-art equipment, expert trainers, and personalized fitness programs. Transform your body with the best fitness center in Lucknow. Special membership plans starting at ₹2,000/month!",
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
    "professional gym lucknow",
    "gym membership cost lucknow",
    "fitness center telibagh",
    "best gym telibagh",
    "affordable gym membership lucknow",
    "gym with personal trainer lucknow"
  ],
  image = "/images/k4-fitness-zone.jpg",
  url = "https://k4fitnesszone.com"
}: SEOProps) => {
  const address = "Sector 6A, K.K. Complex, In front of Akash Enclave, Vrindavan Colony, Telibagh, Lucknow, Uttar Pradesh 226002";
  const phone = "+919648745611";
  const alternatePhone = "+918756477778";
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    "@id": url,
    "name": "K4 Fitness Zone",
    "image": [
      `${url}${image}`,
      `${url}/images/gym-exterior.jpg`,
      `${url}/images/gym-interior.jpg`
    ],
    "description": description,
    "url": url,
    "telephone": [phone, alternatePhone],
    "email": "info@k4fitness.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 6A, K.K. Complex, In front of Akash Enclave, Vrindavan Colony, Telibagh",
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "226002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.7760278,
      "longitude": 80.9477778
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": ["05:00", "17:00"],
        "closes": ["10:00", "22:00"]
      }
    ],
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
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Monthly Membership",
        "price": "2000",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Quarterly Membership",
        "price": "5000",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Half Yearly Membership",
        "price": "8000",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Annual Membership",
        "price": "13000",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content="K4 Fitness Zone" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="theme-color" content="#000000" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="K4 Fitness Zone" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@k4fitnesszone" />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Lucknow" />
      <meta name="geo.position" content="26.7760278;80.9477778" />
      <meta name="ICBM" content="26.7760278, 80.9477778" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.country" content="IN" />
      <meta name="distribution" content="local" />
      <meta name="coverage" content="India" />

      {/* Business Information */}
      <meta name="business:contact_data:street_address" content={address} />
      <meta name="business:contact_data:locality" content="Lucknow" />
      <meta name="business:contact_data:region" content="Uttar Pradesh" />
      <meta name="business:contact_data:postal_code" content="226002" />
      <meta name="business:contact_data:country_name" content="India" />
      <meta name="business:contact_data:phone_number" content={phone} />
      <meta name="business:contact_data:website" content={url} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      <link rel="alternate" href={url} hrefLang="en-IN" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO; 