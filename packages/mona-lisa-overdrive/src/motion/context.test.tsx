import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MotionProvider } from "./context.js";
import { useMotionPolicy } from "./hooks/useMotionPolicy.js";

/**
 * Helper component that renders the current motion policy as text,
 * so we can assert against it in tests.
 */
function PolicyDisplay() {
  const policy = useMotionPolicy();
  return <div data-testid="policy">{policy}</div>;
}

describe("MotionProvider", () => {
  let matchMediaMock: ReturnType<typeof vi.fn>;
  let mediaQueryListeners: Array<(event: MediaQueryListEvent) => void>;

  beforeEach(() => {
    mediaQueryListeners = [];
    matchMediaMock = vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn((event: string, handler: (event: MediaQueryListEvent) => void) => {
        if (event === "change") {
          mediaQueryListeners.push(handler);
        }
      }),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
    }));

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      configurable: true,
      value: matchMediaMock,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("provides the enabled policy by default when prefers-reduced-motion is not set", () => {
    render(
      <MotionProvider>
        <PolicyDisplay />
      </MotionProvider>,
    );

    expect(screen.getByTestId("policy")).toHaveTextContent("enabled");
  });

  it("provides the reduced policy when prefers-reduced-motion is set", () => {
    matchMediaMock.mockImplementation((query: string) => ({
      matches: true,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
    }));

    render(
      <MotionProvider>
        <PolicyDisplay />
      </MotionProvider>,
    );

    expect(screen.getByTestId("policy")).toHaveTextContent("reduced");
  });

  it("respects an explicit policy override prop", () => {
    render(
      <MotionProvider policy="disabled">
        <PolicyDisplay />
      </MotionProvider>,
    );

    expect(screen.getByTestId("policy")).toHaveTextContent("disabled");
  });

  it("override takes precedence over system preference", () => {
    matchMediaMock.mockImplementation((query: string) => ({
      matches: true,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
    }));

    render(
      <MotionProvider policy="enabled">
        <PolicyDisplay />
      </MotionProvider>,
    );

    expect(screen.getByTestId("policy")).toHaveTextContent("enabled");
  });

  it("updates the policy when prefers-reduced-motion changes at runtime", async () => {
    const { rerender } = render(
      <MotionProvider>
        <PolicyDisplay />
      </MotionProvider>,
    );

    expect(screen.getByTestId("policy")).toHaveTextContent("enabled");

    // Simulate the user enabling prefers-reduced-motion
    mediaQueryListeners.forEach((listener) =>
      listener({ matches: true } as MediaQueryListEvent),
    );

    rerender(
      <MotionProvider>
        <PolicyDisplay />
      </MotionProvider>,
    );

    expect(screen.getByTestId("policy")).toHaveTextContent("reduced");
  });
});

describe("useMotionPolicy", () => {
  it("throws when called outside of a MotionProvider", () => {
    // Suppress React's error logging for the expected throw
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    expect(() => {
      render(<PolicyDisplay />);
    }).toThrow(/useMotionPolicy must be used within a MotionProvider/);

    consoleError.mockRestore();
  });
});