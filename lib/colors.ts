/**
 * Centralized color tokens for the application
 * Use these constants instead of hardcoded color values
 */

export const ACCENT_COLOR = "#FF4500"

// Legacy export for backward compatibility
export const ACCENT = ACCENT_COLOR

/**
 * Helper functions for common accent color patterns
 * Use these in className template literals
 */
export const accent = {
  // Base color value (for inline styles)
  color: ACCENT_COLOR,
  
  // Tailwind class strings (use in template literals)
  text: `text-[${ACCENT_COLOR}]`,
  bg: `bg-[${ACCENT_COLOR}]`,
  border: `border-[${ACCENT_COLOR}]`,
  
  // With opacity
  text10: `text-[${ACCENT_COLOR}]/10`,
  text20: `text-[${ACCENT_COLOR}]/20`,
  text30: `text-[${ACCENT_COLOR}]/30`,
  text80: `text-[${ACCENT_COLOR}]/80`,
  text90: `text-[${ACCENT_COLOR}]/90`,
  
  bg10: `bg-[${ACCENT_COLOR}]/10`,
  bg20: `bg-[${ACCENT_COLOR}]/20`,
  bg30: `bg-[${ACCENT_COLOR}]/30`,
  bg90: `bg-[${ACCENT_COLOR}]/90`,
  
  border10: `border-[${ACCENT_COLOR}]/10`,
  border20: `border-[${ACCENT_COLOR}]/20`,
  border30: `border-[${ACCENT_COLOR}]/30`,
  
  // Hover variants (for use with group-hover or hover:)
  hoverText: `hover:text-[${ACCENT_COLOR}]`,
  hoverBg: `hover:bg-[${ACCENT_COLOR}]`,
  hoverBg90: `hover:bg-[${ACCENT_COLOR}]/90`,
  groupHoverText: `group-hover:text-[${ACCENT_COLOR}]`,
}
