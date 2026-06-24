'use client';

import { ReactNode, CSSProperties } from 'react';

type ButtonVariant = 'primary' | 'academic' | 'honor' | 'virtual' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
  fullWidth?: boolean;
  disabled?: boolean;
};

const VARIANT_STYLES: Record<ButtonVariant, CSSProperties> = {
  primary:    { background: 'var(--ink-900)',     color: 'var(--paper-white)', border: '1.5px solid transparent' },
  academic:   { background: 'var(--oxblood-600)', color: '#fff',               border: '1.5px solid transparent' },
  honor:      { background: 'var(--brass-500)',   color: 'var(--ink-900)',     border: '1.5px solid transparent' },
  virtual:    { background: 'var(--violet-500)',  color: '#fff',               border: '1.5px solid transparent' },
  secondary:  { background: 'transparent',        color: 'var(--ink-900)',     border: '1.5px solid var(--ink-900)' },
  ghost:      { background: 'transparent',        color: 'var(--ink-700)',     border: '1.5px solid transparent' },
};

const SIZE_STYLES: Record<ButtonSize, CSSProperties> = {
  sm: { fontSize: 'var(--text-sm)', padding: '7px 14px' },
  md: { fontSize: 'var(--text-base)', padding: '10px 20px' },
  lg: { fontSize: 'var(--text-md)', padding: '13px 26px' },
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  style,
  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '.5em',
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        lineHeight: 1,
        borderRadius: 'var(--radius-sm)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        opacity: disabled ? 0.45 : 1,
        width: fullWidth ? '100%' : undefined,
        ...VARIANT_STYLES[variant],
        ...SIZE_STYLES[size],
        ...style,
      }}
    >
      {children}
    </button>
  );
}
