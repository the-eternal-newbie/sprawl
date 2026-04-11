import {
    createContext,
    useEffect,
    useState,
    type ReactNode,
  } from "react";
  
  /**
   * Motion policy controls whether components should animate.
   *
   * - `enabled`: full motion. The default for most users.
   * - `reduced`: only essential transitions. Set automatically when
   *   the user has `prefers-reduced-motion: reduce` enabled at the
   *   OS level. Components should respect this by skipping
   *   decorative animations and shortening or removing transitions.
   * - `disabled`: no animations whatsoever. Reserved for explicit
   *   opt-out scenarios (e.g., a future "performance mode" toggle).
   *   Not set automatically.
   */
  export type MotionPolicy = "enabled" | "reduced" | "disabled";
  
  export interface MotionContextValue {
    policy: MotionPolicy;
  }
  
  export const MotionContext = createContext<MotionContextValue | null>(null);
  
  export interface MotionProviderProps {
    children: ReactNode;
    /**
     * Override the motion policy. When omitted, the provider derives
     * the policy from `prefers-reduced-motion` at runtime.
     *
     * Pass an explicit value to override the OS preference (e.g., for
     * testing or for a user-controlled "force motion" setting).
     */
    policy?: MotionPolicy;
  }
  
  /**
   * Provides the current motion policy to descendant components via
   * the MotionContext. Reads `prefers-reduced-motion` automatically
   * unless an explicit policy is passed via props.
   *
   * Mount this once near the root of your application. Components
   * consume the policy via `useMotionPolicy()`.
   */
  export function MotionProvider({
    children,
    policy: policyOverride,
  }: MotionProviderProps) {
    const [systemPolicy, setSystemPolicy] = useState<MotionPolicy>(() => {
      if (typeof window === "undefined") return "enabled";
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "reduced"
        : "enabled";
    });
  
    useEffect(() => {
      if (typeof window === "undefined") return;
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  
      const handleChange = (event: MediaQueryListEvent) => {
        setSystemPolicy(event.matches ? "reduced" : "enabled");
      };
  
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);
  
    const policy: MotionPolicy = policyOverride ?? systemPolicy;
  
    return (
      <MotionContext.Provider value={{ policy }}>
        {children}
      </MotionContext.Provider>
    );
  }