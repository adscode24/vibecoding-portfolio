/**
 * Brand logos from the Digital Group ID brand kit, inlined as JSX.
 *
 * These are inlined rather than loaded via <img> on purpose: an SVG loaded
 * through <img> renders in an isolated context where external resources —
 * including the `@import` of the Sora font in the original files — are
 * blocked. Inlining lets the wordmark use the Sora webfont the rest of the
 * site loads (see --font-sora in app/layout.tsx), so the brand renders as
 * designed.
 *
 * The `id="t"` / `aria-labelledby` attributes from the source files were
 * removed: inlining all four would put four elements with the same id in the
 * document. Each logo is decorative next to its project title, so they are
 * marked aria-hidden instead.
 */

import type { LogoKey } from "@/data/site";

type LogoProps = {
  className?: string;
};

export function DigiFleetLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 456 96"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <svg x="0" y="0" width="96" height="96" viewBox="0 0 96 96">
        <defs>
          <linearGradient id="g-digifleet" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#12307F" />
            <stop offset="1" stopColor="#05070D" />
          </linearGradient>
        </defs>
        <rect width="96" height="96" rx="22" fill="url(#g-digifleet)" />
        <g transform="translate(10.2 0) skewX(-12)">
          <rect x="22" y="18" width="37" height="8" rx="4" fill="#8FA6D6" />
          <rect x="22" y="31" width="49" height="8" rx="4" fill="#C9D6F2" />
          <rect x="22" y="44" width="52" height="8" rx="4" fill="#FFFFFF" />
          <rect x="22" y="57" width="49" height="8" rx="4" fill="#C9D6F2" />
          <rect x="22" y="70" width="37" height="8" rx="4" fill="#8FA6D6" />
        </g>
      </svg>
      <text
        x="120"
        y="68"
        fontFamily="var(--font-sora, 'Plus Jakarta Sans', 'Segoe UI', Arial, sans-serif)"
        fontWeight="700"
        fontSize="56"
        letterSpacing="-1.1"
      >
        <tspan fill="#05070D">Digi</tspan>
        <tspan fill="#1E3A8A" xmlSpace="preserve">
          Fleet
        </tspan>
      </text>
    </svg>
  );
}

export function DigiFuelLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 421 96"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <svg x="0" y="0" width="96" height="96" viewBox="0 0 96 96">
        <defs>
          <linearGradient id="g-digifuel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#38BDF8" />
            <stop offset="1" stopColor="#0284C7" />
          </linearGradient>
        </defs>
        <rect width="96" height="96" rx="22" fill="url(#g-digifuel)" />
        <rect x="22" y="18" width="37" height="8" rx="4" fill="#E0F2FE" />
        <rect x="22" y="31" width="49" height="8" rx="4" fill="#FFFFFF" />
        <rect x="22" y="44" width="52" height="8" rx="4" fill="#FFFFFF" />
        <rect x="22" y="57" width="49" height="8" rx="4" fill="#FFFFFF" />
        <rect x="22" y="70" width="37" height="8" rx="4" fill="#E0F2FE" />
        <path
          d="M69 10 C66.5 14 63 18 63 22 A6 6 0 0 0 75 22 C75 18 71.5 14 69 10 Z"
          fill="#FFFFFF"
        />
      </svg>
      <text
        x="120"
        y="68"
        fontFamily="var(--font-sora, 'Plus Jakarta Sans', 'Segoe UI', Arial, sans-serif)"
        fontWeight="700"
        fontSize="56"
        letterSpacing="-1.1"
      >
        <tspan fill="#0B3A5B">Digi</tspan>
        <tspan fill="#0284C7" xmlSpace="preserve">
          Fuel
        </tspan>
      </text>
    </svg>
  );
}

export function DigiScmLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 387 96"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <svg x="0" y="0" width="96" height="96" viewBox="0 0 96 96">
        <defs>
          <linearGradient id="g-digiscm" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
        <rect width="96" height="96" rx="22" fill="url(#g-digiscm)" />
        <g transform="translate(-6 0)">
          <rect x="22" y="18" width="37" height="8" rx="4" fill="#BFDBFE" />
          <rect x="22" y="31" width="49" height="8" rx="4" fill="#DBEAFE" />
          <rect x="22" y="44" width="52" height="8" rx="4" fill="#FFFFFF" />
          <rect x="22" y="57" width="49" height="8" rx="4" fill="#DBEAFE" />
          <rect x="22" y="70" width="37" height="8" rx="4" fill="#BFDBFE" />
          <polyline
            points="78,39 86,48 78,57"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
      <text
        x="120"
        y="68"
        fontFamily="var(--font-sora, 'Plus Jakarta Sans', 'Segoe UI', Arial, sans-serif)"
        fontWeight="700"
        fontSize="56"
        letterSpacing="-1.1"
      >
        <tspan fill="#0B2A7A">Digi</tspan>
        <tspan fill="#1D4ED8" xmlSpace="preserve">
          SCM
        </tspan>
      </text>
    </svg>
  );
}

export function DigiNoteLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 421 96"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <svg x="0" y="0" width="96" height="96" viewBox="0 0 96 96">
        <defs>
          <linearGradient id="g-diginote" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FB923C" />
            <stop offset="1" stopColor="#EA580C" />
          </linearGradient>
        </defs>
        <rect width="96" height="96" rx="22" fill="url(#g-diginote)" />
        <rect x="22" y="18" width="37" height="8" rx="4" fill="#FFF1E6" />
        <rect x="22" y="31" width="49" height="8" rx="4" fill="#FFFFFF" />
        <rect x="22" y="44" width="52" height="8" rx="4" fill="#FFFFFF" />
        <rect x="22" y="57" width="49" height="8" rx="4" fill="#FFFFFF" />
        <rect x="22" y="70" width="37" height="8" rx="4" fill="#FFF1E6" />
        <polygon points="64,8 84,28 64,28" fill="#FFD9B8" />
      </svg>
      <text
        x="120"
        y="68"
        fontFamily="var(--font-sora, 'Plus Jakarta Sans', 'Segoe UI', Arial, sans-serif)"
        fontWeight="700"
        fontSize="56"
        letterSpacing="-1.1"
      >
        <tspan fill="#1C1917">Digi</tspan>
        <tspan fill="#EA580C" xmlSpace="preserve">
          Note
        </tspan>
      </text>
    </svg>
  );
}

/** Lookup used by the project cards. */
export const digiLogos: Record<
  LogoKey,
  React.ComponentType<LogoProps>
> = {
  digifleet: DigiFleetLogo,
  digifuel: DigiFuelLogo,
  digiscm: DigiScmLogo,
  dignote: DigiNoteLogo,
};
