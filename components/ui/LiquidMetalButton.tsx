"use client";

import React, { memo, forwardRef } from "react";
import Link from "next/link";
import { LiquidMetal as LiquidMetalShader } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

// ============================================================================
// LiquidMetal - Base shader wrapper component
// ============================================================================

export interface LiquidMetalProps {
    /** Base background color of the liquid metal */
    colorBack?: string;
    /** Tint/highlight color for the chrome effect */
    colorTint?: string;
    /** Animation speed (0.1 - 2.0 recommended) */
    speed?: number;
    /** Pattern complexity/repetition (1 - 10) */
    repetition?: number;
    /** Wave distortion amount (0 - 1) */
    distortion?: number;
    /** Texture scale */
    scale?: number;
    /** Additional CSS classes */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
}

export const LiquidMetal = memo(function LiquidMetal({
    colorBack = "#aaaaac",
    colorTint = "#ffffff",
    speed = 0.5,
    repetition = 4,
    distortion = 0.1,
    scale = 1,
    className,
    style,
}: LiquidMetalProps) {
    return (
        <div
            className={cn("absolute inset-0 z-0 overflow-hidden", className)}
            style={style}
        >
            <LiquidMetalShader
                colorBack={colorBack}
                colorTint={colorTint}
                speed={speed}
                repetition={repetition}
                distortion={distortion}
                softness={0}
                shiftRed={0.3}
                shiftBlue={-0.3}
                angle={45}
                shape="none"
                scale={scale}
                fit="cover"
                style={{ width: "100%", height: "100%" }}
            />
        </div>
    );
});

LiquidMetal.displayName = "LiquidMetal";

// ============================================================================
// LiquidMetalButton - Premium button with liquid metal border effect
// ============================================================================

export interface LiquidMetalButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Button content */
    children: React.ReactNode;
    /** Optional icon displayed on the left */
    icon?: React.ReactNode;
    /** Border width in pixels */
    borderWidth?: number;
    /** Configuration for the LiquidMetal shader */
    metalConfig?: Omit<LiquidMetalProps, "className" | "style">;
    /** Size variant */
    size?: "sm" | "md" | "lg";
    /** Optional href to make this render as an anchor link */
    href?: string;
}

export const LiquidMetalButton = forwardRef<
    HTMLButtonElement,
    LiquidMetalButtonProps
>(
    (
        {
            children,
            icon,
            borderWidth = 3,
            metalConfig,
            size = "sm",
            className,
            disabled,
            href,
            onClick,
            ...props
        },
        ref
    ) => {
        const sizeStyles = {
            sm: "py-2 pl-2 pr-5 gap-2.5 text-xs font-semibold",
            md: "py-2.5 pl-2.5 pr-7 gap-3.5 text-sm font-semibold",
            lg: "py-3.5 pl-3.5 pr-9 gap-5 text-base font-semibold",
        };

        const iconSizes = {
            sm: "w-7 h-7",
            md: "w-9 h-9",
            lg: "w-11 h-11",
        };

        const innerContent = (
            <div
                className="relative rounded-full overflow-hidden shadow-[0_12px_36px_-10px_rgba(10,15,8,0.25)]"
                style={{ padding: borderWidth }}
            >
                {/* Liquid Metal Border Layer */}
                <LiquidMetal
                    colorBack={metalConfig?.colorBack ?? "#0A0F08"}
                    colorTint={metalConfig?.colorTint ?? "#86F00A"}
                    speed={metalConfig?.speed ?? 0.6}
                    repetition={metalConfig?.repetition ?? 4}
                    distortion={metalConfig?.distortion ?? 0.15}
                    scale={metalConfig?.scale ?? 1}
                    className="absolute inset-0 z-0 rounded-full"
                />

                {/* Inner Button Body */}
                <div
                    className={cn(
                        "relative z-10 rounded-full flex items-center select-none",
                        "bg-[#0A0F08] text-white",
                        "transition-all duration-200",
                        "group-hover:bg-[#162012]",
                        sizeStyles[size]
                    )}
                >
                    {icon && (
                        <div
                            className={cn(
                                "rounded-full flex items-center justify-center shrink-0",
                                "bg-[#162012] text-[var(--lime)]",
                                "shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]",
                                iconSizes[size]
                            )}
                        >
                            <span className="flex items-center justify-center">
                                {icon}
                            </span>
                        </div>
                    )}
                    <span className="tracking-tight text-white group-hover:text-[var(--lime)] transition-colors">
                        {children}
                    </span>
                </div>
            </div>
        );

        if (href) {
            return (
                <Link
                    href={href}
                    className={cn(
                        "relative group inline-block cursor-pointer border-none bg-transparent p-0 outline-none transition-transform hover:-translate-y-0.5 active:scale-[0.98]",
                        className
                    )}
                    onClick={onClick as any}
                >
                    {innerContent}
                </Link>
            );
        }

        return (
            <button
                ref={ref}
                disabled={disabled}
                onClick={onClick}
                className={cn(
                    "relative group cursor-pointer border-none bg-transparent p-0 outline-none transition-transform hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
                    className
                )}
                {...props}
            >
                {innerContent}
            </button>
        );
    }
);

LiquidMetalButton.displayName = "LiquidMetalButton";

export default LiquidMetalButton;
