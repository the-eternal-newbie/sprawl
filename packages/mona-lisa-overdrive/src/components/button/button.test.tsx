import { describe, it, expect, vi } from "vitest";
import { createRef } from "react";
import type { ReactElement } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import { MotionProvider } from "@/motion/context.js";
import { Button } from "./button.js";

function renderWithMotion(ui: ReactElement) {
  return render(<MotionProvider>{ui}</MotionProvider>);
}

describe("Button", () => {
  it("renders with default props", () => {
    renderWithMotion(<Button>Save</Button>);
    expect(
      screen.getByRole("button", { name: "Save" }),
    ).toBeInTheDocument();
  });

  it("applies primary intent classes by default", () => {
    renderWithMotion(<Button>Action</Button>);
    const button = screen.getByRole("button", { name: "Action" });
    expect(button.className).toContain("bg-accent-primary");
    expect(button.className).toContain("text-fg-on-accent-primary");
  });

  it("applies secondary intent classes", () => {
    renderWithMotion(<Button intent="secondary">Secondary</Button>);
    const button = screen.getByRole("button", { name: "Secondary" });
    expect(button.className).toContain("bg-bg-subtle");
    expect(button.className).toContain("text-fg-default");
  });

  it("applies inverted intent classes", () => {
    renderWithMotion(<Button intent="inverted">Inverted</Button>);
    const button = screen.getByRole("button", { name: "Inverted" });
    expect(button.className).toContain("bg-fg-default");
    expect(button.className).toContain("text-bg-canvas");
  });

  it("applies outlined intent classes", () => {
    renderWithMotion(<Button intent="outlined">Close</Button>);
    const button = screen.getByRole("button", { name: "Close" });
    expect(button.className).toContain("border-border-accent-primary");
    expect(button.className).toContain("text-accent-primary");
    expect(button.className).toContain("bg-transparent");
  });

  it("applies size classes", () => {
    renderWithMotion(
      <Button size="sm" data-testid="sm">
        Small
      </Button>,
    );
    expect(screen.getByTestId("sm").className).toContain("h-8");

    renderWithMotion(
      <Button size="lg" data-testid="lg">
        Large
      </Button>,
    );
    expect(screen.getByTestId("lg").className).toContain("h-12");
  });

  it("forwards ref to the button element", () => {
    const ref = createRef<HTMLButtonElement>();
    renderWithMotion(<Button ref={ref}>Ref</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current?.tagName).toBe("BUTTON");
  });

  it("forwards native HTML props", () => {
    const onClick = vi.fn();
    renderWithMotion(
      <Button
        aria-label="Dismiss"
        data-testid="dismiss"
        onClick={onClick}
        type="button"
      >
        ×
      </Button>,
    );
    const button = screen.getByTestId("dismiss");
    expect(button).toHaveAttribute("aria-label", "Dismiss");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders leadingIcon in the icon slot", () => {
    renderWithMotion(
      <Button leadingIcon={<span data-testid="glyph">◇</span>}>
        Next
      </Button>,
    );
    expect(screen.getByTestId("glyph")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Next" })).toBeInTheDocument();
  });

  it("uses transition-none when motion policy is reduced", () => {
    render(
      <MotionProvider policy="reduced">
        <Button>Reduced</Button>
      </MotionProvider>,
    );
    expect(screen.getByRole("button").className).toContain("transition-none");
  });

  it("has no accessibility violations", async () => {
    const { container } = renderWithMotion(<Button>Accessible</Button>);
    const result = await axe(container);
    expect(result.violations).toEqual([]);
  });
});
