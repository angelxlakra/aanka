/**
 * The Aanka primary mark: an "A" built as a rising peak with an upward-tilted
 * crossbar and a dot above the apex — the "figured-out" moment.
 * viewBox 0 0 48 48; stroke/dot colors and weights vary by context.
 */
export function AankaMark({
  size = 48,
  stroke = "#1B1A22",
  dot = "oklch(0.78 0.14 70)",
  strokeWidth = 3.6,
  dotR = 4,
}: {
  size?: number;
  stroke?: string;
  dot?: string;
  strokeWidth?: number;
  dotR?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path
        d="M9 37 L24 11 L39 37"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="16"
        y1="28"
        x2="30"
        y2="24.5"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle cx="24" cy="6.5" r={dotR} fill={dot} />
    </svg>
  );
}
