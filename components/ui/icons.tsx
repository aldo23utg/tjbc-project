import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
}

const defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function ShieldCheck({ size, className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} width={size || 24} height={size || 24} className={className} {...props}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Award({ size, className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} width={size || 24} height={size || 24} className={className} {...props}>
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  );
}

export function Zap({ size, className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} width={size || 24} height={size || 24} className={className} {...props}>
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}

export function CalendarClock({ size, className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} width={size || 24} height={size || 24} className={className} {...props}>
      <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h5" />
      <path d="M17.5 17.5 16 16.3V14" />
      <circle cx="16" cy="16" r="6" />
    </svg>
  );
}

export function Briefcase({ size, className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} width={size || 24} height={size || 24} className={className} {...props}>
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

export function Sparkles({ size, className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} width={size || 24} height={size || 24} className={className} {...props}>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
    </svg>
  );
}

export function TreePine({ size, className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} width={size || 24} height={size || 24} className={className} {...props}>
      <path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14l-3-3.3a1 1 0 0 1 .7-1.7h3.46a1 1 0 0 0 .7-.3L12 5.3l3.14 3.4a1 1 0 0 0 .7.3h3.46a1 1 0 0 1 .7 1.7z" />
      <path d="M12 22v-3" />
    </svg>
  );
}

export function Star({ size, className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} width={size || 24} height={size || 24} className={className} {...props}>
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  );
}

export function QuoteIcon({ size, className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} width={size || 24} height={size || 24} className={className} {...props}>
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1" />
    </svg>
  );
}

export function ArrowLeft({ size, className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} width={size || 24} height={size || 24} className={className} {...props}>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

export function ArrowRight({ size, className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} width={size || 24} height={size || 24} className={className} {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function Copy({ size, className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} width={size || 24} height={size || 24} className={className} {...props}>
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

export function Check({ size, className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} width={size || 24} height={size || 24} className={className} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function BroomIcon({ size, className, ...props }: IconProps) {
  return (
    <svg {...defaultProps} width={size || 24} height={size || 24} className={className} {...props}>
      <path d="M12 2v10" />
      <path d="M5 12h14l1 8H4l1-8Z" />
      <path d="M8 20v-4" />
      <path d="M12 20v-4" />
      <path d="M16 20v-4" />
    </svg>
  );
}

export function ShieldHalfIcon({ size, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 3v19c-4.16-1.45-8-3.95-8-9V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72A1.17 1.17 0 0 1 12 2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TruckIcon({ size, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
        fill="currentColor"
      />
      <path
        d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 18H9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17" cy="18" r="2" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7" cy="18" r="2" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// Type export for ServiceCard compatibility
export type IconComponent = React.FC<IconProps>;
