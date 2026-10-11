type IconProps = { className?: string };

export function IconMenu({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 5h14M3 10h14M3 15h14" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 5l10 10M15 5 5 15" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconSun({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M10 2.5v2M10 15.5v2M2.5 10h2M15.5 10h2M4.4 4.4l1.4 1.4M14.2 14.2l1.4 1.4M15.6 4.4l-1.4 1.4M5.8 14.2 4.4 15.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function IconMoon({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M14.5 12.2A5.8 5.8 0 0 1 8 4.2 6 6 0 1 0 14.5 12.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4 12 12 4M6 4h6v6" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
