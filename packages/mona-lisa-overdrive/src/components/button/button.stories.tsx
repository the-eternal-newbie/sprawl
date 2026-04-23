import type { Story } from "@ladle/react";
import { Button } from "./button.js";

export const Default: Story = () => (
  <div className="bg-bg-canvas p-8">
    <Button>Default</Button>
  </div>
);

export const Primary: Story = () => (
  <div className="bg-bg-canvas p-8">
    <Button intent="primary">Primary</Button>
  </div>
);

export const Secondary: Story = () => (
  <div className="bg-bg-canvas p-8">
    <Button intent="secondary">Secondary</Button>
  </div>
);

export const Inverted: Story = () => (
  <div className="bg-bg-canvas p-8">
    <Button intent="inverted">Inverted</Button>
  </div>
);

export const Outlined: Story = () => (
  <div className="bg-bg-canvas p-8">
    <Button intent="outlined">× Close menu</Button>
  </div>
);

export const Small: Story = () => (
  <div className="bg-bg-canvas p-8">
    <Button size="sm">Small</Button>
  </div>
);

export const Medium: Story = () => (
  <div className="bg-bg-canvas p-8">
    <Button size="md">Medium</Button>
  </div>
);

export const Large: Story = () => (
  <div className="bg-bg-canvas p-8">
    <Button size="lg">Large</Button>
  </div>
);

export const WithLeadingIcon: Story = () => (
  <div className="bg-bg-canvas p-8">
    <Button
      intent="primary"
      leadingIcon={
        <svg
          aria-hidden
          className="size-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
    >
      Download
    </Button>
  </div>
);

const intents = ["primary", "secondary", "inverted", "outlined"] as const;
const sizes = ["sm", "md", "lg"] as const;

export const Playground: Story = () => (
  <div className="bg-bg-canvas text-fg-default p-8 font-body min-h-screen">
    <p className="text-fg-muted text-sm mb-6 font-mono">
      Intent × size matrix (Galactic Terminal theme)
    </p>
    <div className="flex flex-col gap-8">
      {sizes.map((size) => (
        <div key={size} className="flex flex-col gap-3">
          <span className="text-fg-muted font-mono text-xs uppercase">
            size={size}
          </span>
          <div className="flex flex-wrap gap-3 items-center">
            {intents.map((intent) => (
              <Button key={intent} intent={intent} size={size}>
                {intent}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const Accessibility: Story = () => (
  <div className="bg-bg-canvas p-8 flex flex-col gap-4 max-w-md">
    <p className="text-fg-muted text-sm">
      Tab from the address bar or click the first control, then Tab to move
      focus between buttons. Focus rings use{" "}
      <span className="text-accent-primary font-mono">
        border-accent-primary
      </span>
      .
    </p>
    <div className="flex flex-wrap gap-3">
      <Button intent="secondary">Before</Button>
      <Button intent="primary">Focused target</Button>
      <Button intent="outlined">After</Button>
    </div>
  </div>
);

export default {
  title: "button",
};
