import React from "react";
import "./button.css";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  /**
   * Button's variant. "primary" | "secondary", defaults to "primary"
   *
   */
  variant?: ButtonVariant;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = "primary",
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode =
    variant === "primary"
      ? "storybook-button--primary"
      : "storybook-button--secondary";

  const className = [
    "storybook-button",
    `storybook-button--${size}`,
    mode,
  ].join(" ");

  return (
    <button
      type="button"
      className={className}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
