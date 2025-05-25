import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholderSrc?: string;
}

export function Image({ 
  src, 
  alt, 
  className, 
  placeholderSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E",
  ...props 
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholderSrc);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setLoaded(true);
      setCurrentSrc(src);
    };
  }, [src]);

  return (
    <img
      {...props}
      src={currentSrc}
      alt={alt}
      className={cn(
        'transition-opacity duration-300',
        !loaded && 'opacity-50 blur-sm',
        loaded && 'opacity-100 blur-0',
        className
      )}
      loading="lazy"
      decoding="async"
    />
  );
} 