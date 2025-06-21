import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  fallbackIcon?: React.ReactNode;
  fallbackText?: string;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  aspectRatio = "4/3",
  className = "",
  fallbackIcon,
  fallbackText = "Image Loading...",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Generate optimized image sources
  const generateImageSources = (baseSrc: string) => {
    const baseName = baseSrc.replace(/\.(jpg|jpeg|png)$/i, '');
    const webpBase = baseName.replace('/gallery/', '/gallery-optimized/');
    
    return {
      webp: {
        thumbnail: `${webpBase}-thumbnail.webp`,
        medium: `${webpBase}-medium.webp`,
        large: `${webpBase}-large.webp`,
        original: `${webpBase}-original.webp`
      },
      fallback: `${webpBase}-original.webp` // Use original WebP as fallback since JPGs don't exist
    };
  };

  const imageSources = generateImageSources(src);

  if (hasError) {
    return (
      <div 
        className={`bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center ${className}`}
        style={{ aspectRatio }}
      >
        <div className="text-center">
          {fallbackIcon || (
            <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
              </svg>
            </div>
          )}
          <p className="text-gray-400 text-sm">{fallbackText}</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center z-10">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-gray-400 text-xs">Loading...</p>
          </div>
        </div>
      )}
      
      <picture>
        {/* WebP format with responsive sizes */}
        <source
          type="image/webp"
          srcSet={`
            ${imageSources.webp.thumbnail} 400w,
            ${imageSources.webp.medium} 800w,
            ${imageSources.webp.large} 1200w,
            ${imageSources.webp.original} 1920w
          `}
          sizes={sizes}
        />
        
        {/* Fallback to original WebP */}
        <img
          src={imageSources.fallback}
          alt={alt}
          className="w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: isLoading ? 0 : 1 }}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          sizes={sizes}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage; 