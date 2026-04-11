import type { Story } from "@ladle/react";

export const Default: Story = () => (
  <div
    style={{
      padding: "2rem",
      minHeight: "100vh",
      background: "var(--color-bg-canvas)",
      color: "var(--color-fg-default)",
      fontFamily: "var(--font-body)",
    }}
  >
    <h1
      style={{
        fontFamily: "var(--font-display)",
        color: "var(--color-accent-primary)",
        fontSize: "3rem",
        marginBottom: "1rem",
      }}
    >
      MONA LISA OVERDRIVE
    </h1>
    <p
      style={{
        color: "var(--color-fg-muted)",
        fontFamily: "var(--font-mono)",
      }}
    >
      Design system for Sprawl. If you can read this in cool-white on
      deep purple, with the title in neon fuchsia, the Galactic
      Terminal theme is wired up correctly.
    </p>
    <div
      style={{
        marginTop: "2rem",
        padding: "1rem",
        border: "1px solid var(--color-border-accent-primary)",
        background: "var(--color-bg-subtle)",
      }}
    >
      <div style={{ color: "var(--color-accent-secondary)" }}>
        SECONDARY ACCENT: electric cyan
      </div>
      <div style={{ color: "var(--color-accent-tertiary)" }}>
        TERTIARY ACCENT: acid lime
      </div>
    </div>
  </div>
);

Default.storyName = "Welcome";

export default {
  title: "welcome",
};