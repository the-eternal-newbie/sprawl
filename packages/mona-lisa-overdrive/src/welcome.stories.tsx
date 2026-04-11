import type { Story } from "@ladle/react";

export const Default: Story = () => (
  <div
    className="bg-bg-canvas text-fg-default font-body p-8 min-h-screen"
  >
    <h1
      className="font-display text-accent-primary text-4xl mb-4"
    >
      MONA LISA OVERDRIVE
    </h1>
    <p
      className="text-fg-muted font-mono"
    >
      Design system for Sprawl. If you can read this in cool-white on
      deep purple, with the title in neon fuchsia, the Galactic
      Terminal theme is wired up correctly.
    </p>
    <div
      className="mt-8 p-4 border border-border-accent-primary bg-bg-emphasis"
    >
      <div className="text-accent-secondary">
        SECONDARY ACCENT: electric cyan
      </div>
      <div className="text-accent-tertiary">
        TERTIARY ACCENT: acid lime
      </div>
    </div>
  </div>
);

Default.storyName = "Welcome";

export default {
  title: "welcome",
};