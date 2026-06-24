'use client';

import { ReactNode, CSSProperties } from 'react';

type CardVariant = 'default' | 'seal' | 'sunken' | 'ink';

type CardProps = {
  variant?: CardVariant;
  title?: string;
  eyebrow?: string;
  children?: ReactNode;
  style?: CSSProperties;
};

const VARIANT_STYLES: Record<CardVariant, CSSProperties> = {
  default: { background: 'var(--surface-card)', border: '1px solid var(--border-hairline)' },
  seal:    { background: 'var(--surface-card)', border: '1px solid var(--border-hairline)' },
  sunken:  { background: 'var(--surface-sunken)', border: '1px solid var(--border-hairline)', boxShadow: 'none' },
  ink:     { background: 'var(--surface-ink)', border: '1px solid var(--border-on-dark)', color: 'var(--text-on-dark)' },
};

export default function Card({ variant = 'default', title, eyebrow, children, style }: CardProps) {
  const hasHead = !!(eyebrow || title);

  return (
    <div
      style={{
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-sm)',
        overflow: 'hidden',
        position: 'relative',
        ...VARIANT_STYLES[variant],
        ...style,
      }}
    >
      {variant === 'seal' && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: 'linear-gradient(90deg,var(--brass-600),var(--brass-400),var(--brass-600))',
          }}
        />
      )}
      {hasHead && (
        <div style={{ padding: '18px 22px 0' }}>
          {eyebrow && (
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-2xs)',
                fontWeight: 600,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: 'var(--accent-academic)',
                marginBottom: 4,
              }}
            >
              {eyebrow}
            </div>
          )}
          {title && (
            <h3
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontWeight: 700,
                fontSize: 'var(--text-lg)',
                margin: 0,
                letterSpacing: '-.01em',
                color: variant === 'ink' ? 'var(--text-on-dark)' : 'var(--text-primary)',
              }}
            >
              {title}
            </h3>
          )}
        </div>
      )}
      {children && <div style={{ padding: '18px 22px' }}>{children}</div>}
    </div>
  );
}
