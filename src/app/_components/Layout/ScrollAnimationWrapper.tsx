import { motion } from "framer-motion";
import React, { type HTMLProps } from "react";

export default function ScrollAnimationWrapper({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
}) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
