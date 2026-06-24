'use client';

import { ReactNode } from 'react';

type BadgeVariant = 'neutral' | 'degree' | 'honor' | 'academic' | 'virtual' | 'live';

type BadgeProps = {
  variant?: BadgeVariant;
  size?: 'sm' | 'lg';
  children?: ReactNode;
};

const VARIANT_STYLES: Record<BadgeVariant, React.CSSProperties> = {
  neutral: {
    background: 'var(--parchment-200)',
    color: 'var(--ink-800)',
    border: '1px solid transparent',
  },
  degree: {
    background: 'transparent',
    color: 'var(--oxblood-600)',
    border: '1px solid var(--oxblood-600)',
    fontFamily: 'var(--font-mono)',
    letterSpacing: '.06em',
  },
  honor: {
    background: 'var(--brass-500)',
    color: 'var(--ink-900)',
    border: '1px solid transparent',
  },
  academic: {
    background: 'var(--oxblood-600)',
    color: '#fff',
    border: '1px solid transparent',
  },
  virtual: {
    background: 'var(--violet-500)',
    color: '#fff',
    border: '1px solid transparent',
  },
  live: {
    background: 'var(--cyan-500)',
    color: 'var(--ink-950)',
    border: '1px solid transparent',
    paddingLeft: 7,
  },
};

export default function Badge({ variant = 'neutral', size = 'sm', children }: BadgeProps) {
  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5,
    fontFamily: 'var(--font-sans)',
    fontSize: size === 'lg' ? 'var(--text-xs)' : 'var(--text-2xs)',
    fontWeight: 600,
    letterSpacing: '.04em',
    padding: size === 'lg' ? '5px 12px' : '3px 9px',
    borderRadius: 'var(--radius-xs)',
    lineHeight: 1.4,
    whiteSpace: 'nowrap',
  };

  return (
    <span style={{ ...base, ...VARIANT_STYLES[variant] }}>
      {variant === 'live' && (
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: 'var(--ink-950)',
            animation: 'vss-pulse 1.4s var(--ease-standard) infinite',
            flexShrink: 0,
          }}
        />
      )}
      {children}
    </span>
  );
}
