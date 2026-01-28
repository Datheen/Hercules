import type { ComponentProps } from "react";
import { SpringButton } from "@/components/gsap/spring-button";
import { cn } from "@/lib/utils";

type ButtonAnimProps = {
    scale?: number;
    shaking?: boolean;
    variant?: "default" | "outline" | "ghost" | "destructive";
} & ComponentProps<"button">;

export const ButtonAnim = ({
    scale = 0.85,
    shaking = true,
    variant = "default",
    className,
    children,
    ...props
}: ButtonAnimProps) => {
    const variantStyles = {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    };

    return (
        <SpringButton
            scale={scale}
            shaking={shaking}
            className={cn(
                "inline-flex items-center justify-center rounded-md px-6 py-3 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                variantStyles[variant],
                className
            )}
            {...props}
        >
            {children || "Click Me"}
        </SpringButton>
    );
};
