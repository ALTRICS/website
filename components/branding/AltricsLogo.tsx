import { HTMLAttributes } from "react";

type LogoProps = HTMLAttributes<SVGSVGElement> & {
  variant?: "icon" | "horizontal";
};

const gradientId = "altrics-logo-gradient";
const glowId = "altrics-logo-glow";

export function AltricsLogo({ variant = "horizontal", ...props }: LogoProps) {
  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 40 40"
        aria-label="altrics logo"
        role="img"
        {...props}
      >
        <Defs />
        <rect
          x="2"
          y="2"
          width="36"
          height="36"
          rx="12"
          fill="url(#altrics-logo-gradient)"
        />
        <circle
          cx="20"
          cy="20"
          r="11"
          fill="none"
          stroke="rgba(15,23,42,0.25)"
          strokeWidth="1.4"
        />
        <path
          d="M14.5 23.8 18.8 13c.2-.5.7-.8 1.2-.8s1 .3 1.2.8l4.3 10.8c.3.7-.1 1.5-.8 1.8-.7.3-1.5-.1-1.8-.8l-.7-1.7h-4.9l-.7 1.7c-.3.7-1.1 1.1-1.8.8-.7-.3-1.1-1.1-.8-1.8Zm6.3-7.4-1.4 3.7h2.8l-1.4-3.7Z"
          fill="#0b1020"
        />
        <circle
          cx="26.4"
          cy="14.4"
          r="1.7"
          fill="none"
          stroke="url(#altrics-logo-glow)"
          strokeWidth="1.2"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 200 40"
      aria-label="altrics"
      role="img"
      {...props}
    >
      <Defs />
      <g>
        <rect
          x="2"
          y="4"
          width="32"
          height="32"
          rx="10"
          fill="url(#altrics-logo-gradient)"
        />
        <circle
          cx="18"
          cy="20"
          r="10"
          fill="none"
          stroke="rgba(15,23,42,0.25)"
          strokeWidth="1.4"
        />
        <path
          d="M12.9 23.2 16.8 13c.2-.5.7-.8 1.2-.8s1 .3 1.2.8l3.9 10.2c.3.7-.1 1.5-.8 1.8-.7.3-1.5-.1-1.8-.8l-.7-1.7h-4.2l-.7 1.7c-.3.7-1.1 1.1-1.8.8-.7-.3-1.1-1.1-.8-1.8Zm5.5-7.2-1.2 3.3h2.4l-1.2-3.3Z"
          fill="#020617"
        />
        <circle
          cx="23.4"
          cy="14.2"
          r="1.6"
          fill="none"
          stroke="url(#altrics-logo-glow)"
          strokeWidth="1.1"
        />
      </g>
      <text
        x="46"
        y="30"
        fill="currentColor"
        fontSize="23"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', sans-serif"
        letterSpacing="0.08em"
      >
        ALTRICS
      </text>
    </svg>
  );
}

function Defs() {
  return (
    <defs>
      <linearGradient
        id={gradientId}
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="40%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
      <radialGradient
        id={glowId}
        cx="50%"
        cy="50%"
        r="50%"
      >
        <stop offset="0%" stopColor="#e0f2fe" stopOpacity="1" />
        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.1" />
      </radialGradient>
    </defs>
  );
}

