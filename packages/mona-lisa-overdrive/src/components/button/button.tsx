import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn.js";
import { useMotionPolicy } from "@/motion/hooks/useMotionPolicy.js";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 font-medium font-body",
    "rounded-md",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-canvas",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      intent: {
        primary:
          "bg-accent-primary text-fg-on-accent-primary hover:bg-bg-emphasis",
        secondary:
          "border border-border-default bg-bg-subtle text-fg-default hover:bg-bg-muted hover:border-border-strong",
        inverted:
          "border border-border-default bg-fg-default text-bg-canvas hover:bg-fg-muted",
        outlined:
          "border border-border-accent-primary bg-transparent text-accent-primary hover:bg-bg-subtle",
      },
      size: {
        sm: "h-8 min-w-0 px-3 text-sm",
        md: "h-10 min-w-0 px-4 text-base",
        lg: "h-12 min-w-0 px-6 text-lg",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    /** Optional leading icon; paired with label text in `children`. */
    leadingIcon?: ReactNode;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      intent,
      size,
      leadingIcon,
      children,
      type = "button",
      ...props
    },
    ref,
  ) {
    const policy = useMotionPolicy();
    const motionClass =
      policy === "enabled"
        ? "transition-colors duration-150 ease-out"
        : "transition-none";

    return (
      <button
        ref={ref}
        type={type}
        data-slot="root"
        className={cn(
          buttonVariants({ intent, size }),
          motionClass,
          className,
        )}
        {...props}
      >
        {leadingIcon ? (
          <span
            className="inline-flex shrink-0 [&_svg]:size-4"
            data-slot="icon"
            aria-hidden
          >
            {leadingIcon}
          </span>
        ) : null}
        <span data-slot="label">{children}</span>
      </button>
    );
  },
);

Button.displayName = "Button";
