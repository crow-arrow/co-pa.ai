/**
 * Centralized color tokens for the application
 * Use these constants instead of hardcoded color values
 * 
 * Note: The accent color is defined as oklch(0.66 0.23 42) in CSS variables
 * This hex value is kept for inline styles compatibility
 */

export const ACCENT_COLOR = "#FF4500" // Equivalent to oklch(0.66 0.23 42)

// Legacy export for backward compatibility
export const ACCENT = ACCENT_COLOR

/**
 * Helper functions for common accent color patterns
 * Use these in className template literals
 * 
 * Note: For Tailwind v4, we use standard Tailwind classes instead of arbitrary values
 * to ensure proper static analysis and CSS generation.
 */
export const accent = {
  // Base color value (for inline styles)
  color: ACCENT_COLOR,
  
  // Tailwind class strings (use standard classes for v4 compatibility)
  text: "text-accent",
  bg: "bg-accent",
  border: "border-accent",
  
  // With opacity
  text10: "text-accent/10",
  text20: "text-accent/20",
  text30: "text-accent/30",
  text80: "text-accent/80",
  text90: "text-accent/90",
  
  bg10: "bg-accent/10",
  bg20: "bg-accent/20",
  bg30: "bg-accent/30",
  bg90: "bg-accent/90",
  
  border10: "border-accent/10",
  border20: "border-accent/20",
  border30: "border-accent/30",
  
  // Hover variants (for use with group-hover or hover:)
  hoverText: "hover:text-accent",
  hoverBg: "hover:bg-accent",
  hoverBg90: "hover:bg-accent/90",
  groupHoverText: "group-hover:text-accent",
}
