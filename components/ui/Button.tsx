import React from "react";
import clsx from "clsx";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",

        // Variants
        {
          "bg-[#0E9AA7] text-white hover:bg-[#0B7F8A]":
            variant === "primary",

          "bg-white text-[#0E9AA7] border border-[#0E9AA7] hover:bg-[#F4FAFB]":
            variant === "secondary",

          "border border-gray-300 bg-transparent hover:bg-gray-100":
            variant === "outline",

          "bg-transparent hover:bg-gray-100":
            variant === "ghost",
        },

        // Sizes
        {
          "px-3 py-2 text-sm": size === "sm",
          "px-5 py-3 text-base": size === "md",
          "px-7 py-4 text-lg": size === "lg",
        },

        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}