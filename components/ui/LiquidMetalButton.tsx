"use client";

import React, { memo, forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ============================================================================
// LiquidMetal - Ultra High-Performance GPU-Accelerated Chrome Liquid Metal
// (Pure CSS compositor animation, 0ms main-thread CPU blocking, 0 WebGL overhead)
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
    colorBack = "#0A0F08",
    colorTint = "#86F00A",
    className,
    style,
}: LiquidMetalProps) {
    return (
        <div
            className={cn("absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-full", className)}
            style={style}
        >
            <div
                className="w-full h-full rounded-full animate-liquid-metal"
                style={{
                    background: `linear-gradient(115deg, ${colorBack} 0%, #14280d 20%, ${colorTint} 40%, #ffffff 50%, ${colorTint} 60%, #14280d 80%, ${colorBack} 100%)`,
                    backgroundSize: "260% 260%",
                }}
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
                {/* Liquid Metal Border Layer (GPU-Accelerated) */}
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
                        "relative z-10 flex items-center rounded-full bg-[#0A0F08] text-white tracking-wide transition-all duration-300",
                        "hover:bg-[#111a0e] active:scale-[0.98]",
                        sizeStyles[size]
                    )}
                >
                    {/* Icon container with electric lime glow */}
                    {icon && (
                        <div
                            className={cn(
                                "flex items-center justify-center rounded-full bg-gradient-to-br from-[#86F00A]/30 to-[#86F00A]/10 border border-[#86F00A]/40 shadow-[0_0_12px_rgba(134,240,10,0.3)] shrink-0",
                                iconSizes[size]
                            )}
                        >
                            {icon}
                        </div>
                    )}

                    <span className="truncate">{children}</span>
                </div>
            </div>
        );

        if (href) {
            return (
                <Link
                    href={href}
                    className={cn(
                        "inline-block rounded-full transition-transform hover:-translate-y-0.5 active:translate-y-0 outline-none focus-visible:ring-2 focus-visible:ring-[#86F00A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F08]",
                        disabled && "pointer-events-none opacity-50",
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
                type="button"
                disabled={disabled}
                onClick={onClick}
                className={cn(
                    "inline-block rounded-full transition-transform hover:-translate-y-0.5 active:translate-y-0 outline-none focus-visible:ring-2 focus-visible:ring-[#86F00A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F08]",
                    disabled && "cursor-not-allowed opacity-50",
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
