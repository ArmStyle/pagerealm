import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {
    // Base button class from global CSS
    const baseClass = "button-base";
    
    // Variant classes
    const variantClass = {
      default: "button-default",
      destructive: "button-destructive", 
      outline: "button-outline",
      secondary: "button-secondary",
      ghost: "button-ghost",
      link: "button-link",
    }[variant];
    
    // Size classes
    const sizeClass = {
      default: "button-default-size",
      sm: "button-sm",
      lg: "button-lg",
      icon: "button-icon",
    }[size];
    
    // Combine classes
    const combinedClasses = `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim().replace(/\s+/g, ' ');
    
    const Comp = asChild ? "span" : "button";
    return (
      <Comp
        className={combinedClasses}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
