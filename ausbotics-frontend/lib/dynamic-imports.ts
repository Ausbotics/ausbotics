// Dynamic imports for heavy libraries to reduce initial bundle size

/**
 * Lazy load GSAP animations library
 * Only imported when animations are needed (hero sections, scroll effects)
 */
export const loadGsap = async () => {
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  const { ScrollToPlugin } = await import("gsap/ScrollToPlugin");
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  return { gsap, ScrollTrigger, ScrollToPlugin };
};

/**
 * Lazy load Framer Motion animations
 * Only imported when AnimatePresence or motion components are needed
 */
export const loadFramerMotion = () => {
  return import("framer-motion");
};

/**
 * Lazy load Motion library (alternative animations)
 * Only imported when needed
 */
export const loadMotion = () => {
  return import("motion/react");
};

/**
 * Lazy load Recharts for data visualization
 * Only imported when charts are displayed
 */
export const loadRecharts = () => {
  return import("recharts");
};
