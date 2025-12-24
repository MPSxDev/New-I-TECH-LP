/**
 * Theme constants and utilities
 */

export const HOVER_COLORS = ['sky-500', 'indigo-500', 'pink-500'] as const;

export type HoverColor = typeof HOVER_COLORS[number];

/**
 * Get hover color by index (cycles through sky, indigo, pink)
 */
export function getHoverColor(index: number): HoverColor {
  return HOVER_COLORS[index % HOVER_COLORS.length];
}

/**
 * Theme color constants
 */
export const THEME_COLORS = {
  background: '#05050A',
  card: '#0F1016',
  electricBlue: '#00d4ff',
  neonPurple: '#9333ea',
} as const;

