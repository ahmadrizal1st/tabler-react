/**
 * useTrend - A custom hook to calculate trend color and icon based on a numeric value
 *
 * @param value - The numeric value to calculate trend from (positive = up, negative = down, zero = neutral)
 * @returns {Object} { trendColor, trendIcon, absValue }
 */
export function useTrend(value: number) {
  const trendColor = value > 0 ? 'green' : value < 0 ? 'red' : 'grey';
  const trendIcon = value > 0 ? '↑' : value < 0 ? '↓' : '—';
  
  return {
    trendColor,
    trendIcon,
    absValue: Math.abs(value),
  };
}
