import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "error";
  inputSize?: "default" | "sm" | "lg";
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", variant = "default", inputSize = "default", label, error, icon, iconPosition = "left", ...props }, ref) => {
    const hasIcon = !!icon;
    const hasError = !!error;

    // Base input classes from global CSS
    const baseClass = "input-base";
    
    // Variant classes
    const variantClass = hasError ? "input-error" : "input-default";
    
    // Size classes
    const sizeClass = {
      default: "input-default-size",
      sm: "input-sm",
      lg: "input-lg",
    }[inputSize];
    
    // Icon padding classes
    const iconPaddingLeft = hasIcon && iconPosition === "left" ? "pl-10" : "";
    const iconPaddingRight = hasIcon && iconPosition === "right" ? "pr-10" : "";
    
    // Combine classes
    const inputClasses = `${baseClass} ${variantClass} ${sizeClass} ${iconPaddingLeft} ${iconPaddingRight} ${className}`.trim().replace(/\s+/g, ' ');

    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </label>
        )}
        <div className="relative">
          {hasIcon && iconPosition === "left" && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              {icon}
            </div>
          )}
          <input
            className={inputClasses}
            ref={ref}
            {...props}
          />
          {hasIcon && iconPosition === "right" && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              {icon}
            </div>
          )}
        </div>
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
