'use client';

import { ReactNode } from 'react';

type TagProps = {
  children?: ReactNode;
  accent?: boolean;
};

export default function Tag({ children, accent = false }: TagProps) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: 500,
        color: accent ? 'var(--violet-600)' : 'var(--ink-700)',
        background: accent ? 'rgba(115,80,214,.06)' : 'var(--surface-card)',
        border: accent ? '1px solid var(--violet-300)' : '1px solid var(--border-default)',
        borderRadius: 'var(--radius-pill)',
        padding: '4px 12px',
        lineHeight: 1.4,
      }}
    >
      {children}
    </span>
  );
}
