"use client";

import { ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function AnimateOnScroll({
  children,
  className = "",
}: AnimateOnScrollProps) {
  return <div className={className}>{children}</div>;
}
