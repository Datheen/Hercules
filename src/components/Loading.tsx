import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface AtomIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const PATH_VARIANTS: Variants = {
  animate: (custom: number) => ({
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      delay: custom,
      repeat: Infinity,
      repeatDelay: 0.6,
    },
  }),
};

export function Loading({ className, size = 78, ...props }: AtomIconProps) {
  return (
    <div className={cn(className)} {...props}>
      <svg
        fill="none"
        height={size}
        width={size}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        shapeRendering="geometricPrecision"
        style={{
          overflow: "visible",
          willChange: "transform",
        }}
      >
        <motion.circle
          cx="12"
          cy="12"
          r="1"
          custom={0}
          animate="animate"
          variants={PATH_VARIANTS}
        />

        <motion.path
          custom={0.3}
          animate="animate"
          variants={PATH_VARIANTS}
          d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
        />

        <motion.path
          custom={0.6}
          animate="animate"
          variants={PATH_VARIANTS}
          d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
        />
      </svg>
    </div>
  );
}
