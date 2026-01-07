"use client";
import React from "react";
import { ButtonHTMLAttributes } from "react";

interface PillButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

const PillButton = React.forwardRef<HTMLButtonElement, PillButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "left",
      children,
      href,
      target,
      rel,
      className = "",
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles =
      "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group";

    // Size variants
    const sizeStyles = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    // Variant styles
    const variantStyles = {
      primary:
        "bg-linear-to-r from-amber-400 via-yellow-400 to-orange-500 text-black shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-orange-500/40",

      secondary:
        "bg-linear-to-r from-zinc-800 to-zinc-900 text-amber-400 border border-amber-500/40 hover:border-orange-500/60 hover:shadow-lg hover:shadow-amber-500/20",

      outline:
        "bg-transparent border-2 border-amber-500/60 text-amber-400 hover:bg-amber-500/10 hover:border-orange-500",
    };

    const buttonClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

    // Glow effect overlay
    const glowOverlay = (
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
    );

    const content = (
      <>
        {glowOverlay}
        <span className="relative z-10 flex items-center gap-2">
          {icon && iconPosition === "left" && icon}
          {children}
          {icon && iconPosition === "right" && icon}
        </span>
      </>
    );

    if (href) {
      return (
        <a href={href} target={target} rel={rel} className={buttonClasses}>
          {content}
        </a>
      );
    }

    return (
      <button ref={ref} className={buttonClasses} {...props}>
        {content}
      </button>
    );
  }
);

PillButton.displayName = "PillButton";

export default PillButton;
