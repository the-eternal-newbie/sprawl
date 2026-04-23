import { useContext } from "react";
import { MotionContext } from "../context.js";
import type { MotionPolicy } from "../context.js";

/**
 * Returns the current motion policy from the nearest MotionProvider.
 *
 * Components should call this hook to decide whether to render
 * animations. Common patterns:
 *
 * ```tsx
 * const policy = useMotionPolicy();
 * const shouldAnimate = policy === "enabled";
 * ```
 *
 * Or for conditional class names:
 *
 * ```tsx
 * const policy = useMotionPolicy();
 * <div className={cn(
 *   "transition-colors",
 *   policy === "reduced" && "transition-none"
 * )} />
 * ```
 *
 * Throws if called outside of a MotionProvider. This is intentional —
 * a missing provider means motion behavior is undefined, and we'd
 * rather fail loudly than silently render the wrong thing.
 */
export function useMotionPolicy(): MotionPolicy {
  const context = useContext(MotionContext);

  if (context === null) {
    throw new Error(
      "useMotionPolicy must be used within a MotionProvider. " +
        "Wrap your application or test in <MotionProvider> before " +
        "calling this hook.",
    );
  }

  return context.policy;
}