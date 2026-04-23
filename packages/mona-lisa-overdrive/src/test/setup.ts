import "@testing-library/jest-dom/vitest";
import { expect } from "vitest";
import * as matchers from "vitest-axe/matchers";
import "vitest-axe/extend-expect";

expect.extend(matchers);

/** axe-core color-contrast probes canvas; jsdom does not implement it. */
HTMLCanvasElement.prototype.getContext = function () {
  return null;
};

/** jsdom has no `matchMedia`; MotionProvider and tests need a baseline stub. */
Object.defineProperty(window, "matchMedia", {
  writable: true,
  configurable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});