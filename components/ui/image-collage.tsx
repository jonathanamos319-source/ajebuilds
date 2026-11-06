"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CollageImage {
  src: string;
  x: number;
  y: number;
  rotate: number;
  alt?: string;
}

export interface ImageCollageProps extends React.HTMLAttributes<HTMLDivElement> {
  images: CollageImage[];
  className?: string;
  containerClassName?: string;
  imageClassName?: string;
  showToggleText?: boolean;
}

export const ImageCollage = React.forwardRef<HTMLDivElement, ImageCollageProps>(
  (
    {
      images,
      className,
      containerClassName,
      imageClassName,
      showToggleText = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const [isOrganized, setIsOrganized] = useState(false);

    const toggleLayout = (e: React.MouseEvent<HTMLDivElement>) => {
      setIsOrganized((prev) => !prev);
      if (onClick) onClick(e);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center select-none w-full cursor-pointer relative",
          className
        )}
        onClick={toggleLayout}
        {...props}
      >
        {showToggleText && (
          <div className="text-xs font-mono text-[var(--muted)] mb-3 tracking-tight">
            Click anywhere to toggle the layout
          </div>
        )}

        <motion.div
          className={cn("h-36 sm:h-40 flex items-center justify-center relative w-full", containerClassName)}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={cn(
                "w-24 sm:w-28 shrink-0 aspect-[4/5] absolute rounded-xl overflow-hidden border border-[var(--line-strong)] bg-[var(--surface-2)]",
                !isOrganized && "shadow-xl",
                imageClassName
              )}
              initial={{ opacity: 0, scale: 0.7 }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: isOrganized ? (i - (images.length - 1) / 2) * 55 : img.x,
                y: isOrganized ? 0 : img.y,
                rotate: isOrganized ? 0 : img.rotate,
                zIndex: isOrganized ? i + 1 : i + 1,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={img.src}
                alt={img.alt || `Collage image ${i}`}
                className="w-full h-full object-cover pointer-events-none"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }
);

ImageCollage.displayName = "ImageCollage";

export const IMAGES: CollageImage[] = [
  { src: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop', x: 20, y: -25, rotate: 12 },
  { src: 'https://images.unsplash.com/photo-1620002130389-9db8a5e3782d?q=80&w=2000&auto=format&fit=crop', x: 0, y: 15, rotate: -15 },
];

export function ImageCollageDemo() {
  return (
    <ImageCollage images={IMAGES} />
  );
}

export default ImageCollage;
