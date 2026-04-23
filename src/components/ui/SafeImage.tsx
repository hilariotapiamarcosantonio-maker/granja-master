"use client";
import { useState } from "react";

export default function SafeImage({ src, alt, className, fallback }: { src: string, alt: string, className: string, fallback: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc(fallback)}
    />
  );
}
