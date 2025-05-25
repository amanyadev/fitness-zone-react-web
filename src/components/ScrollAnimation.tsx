import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  once?: boolean;
}

const ScrollAnimation = ({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.5,
  once = true
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  const getDirectionAnimation = () => {
    switch (direction) {
      case "down":
        return { y: "-20%", opacity: 0 };
      case "left":
        return { x: "20%", opacity: 0 };
      case "right":
        return { x: "-20%", opacity: 0 };
      case "up":
      default:
        return { y: "20%", opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getDirectionAnimation()}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : getDirectionAnimation()}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation; 