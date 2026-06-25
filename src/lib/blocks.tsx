'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { ReactNode, CSSProperties } from 'react';
import type { Member } from '@/lib/data';
import Avatar from '@/components/ui/Avatar';
import Badge from '@/components/ui/Badge';
import Tag from '@/components/ui/Tag';
import Button from '@/components/ui/Button';

export function EyebrowLabel({ mb = 10, children }: { mb?: number; children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '.2em',
        textTransform: 'uppercase' as const,
        color: 'var(--accent-academic)',
        marginBottom: mb,
      }}
    >
      {children}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  titleSize = 36,
  action,
  containerStyle,
}: {
  eyebrow: string;
  title: string;
  titleSize?: number;
  action?: ReactNode;
  containerStyle?: CSSProperties;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 28,
        gap: 20,
        flexWrap: 'wrap',
        ...containerStyle,
      }}
    >
      <div>
        <EyebrowLabel mb={8}>{eyebrow}</EyebrowLabel>
        <h2
          style={{
            fontFamily: 'var(--font-serif-kr)',
            fontWeight: 800,
            fontSize: `clamp(${Math.round(titleSize * 0.62)}px, 6vw, ${titleSize}px)`,
            margin: 0,
            color: 'var(--ink-900)',
          }}
        >
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}

export default function MemberCard({ member: m }: { member: Member }) {
  const [hovered, setHovered] = useState(false);
  const first = m.name.split(' ')[0];

  return (
    <Link
      href={`/members/${m.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        position: 'relative',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: hovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hovered ? 'translateY(-3px)' : 'none',
        transition:
          'box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
        padding: 22,
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      {m.live && (
        <div style={{ position: 'absolute', top: 16, right: 16 }}>
          <Badge variant="live">ON AIR</Badge>
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <Avatar name={first} size={56} live={m.live} degree={ undefined} />
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontFamily: 'var(--font-serif-display)',
              fontWeight: 700,
              fontSize: 19,
              color: 'var(--ink-900)',
              lineHeight: 1.15,
            }}
          >
            {m.name}
          </div>
          {m.handle && (
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--text-muted)',
                marginTop: 2,
              }}
            >
              {m.handle}
            </div>
          )}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, margin: '14px 0 10px' }}>
        <Badge variant="degree">{m.degree}</Badge>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--text-secondary)',
          }}
        >
          {m.field}
        </span>
      </div>
      <p
        style={{
          fontSize: 13.5,
          lineHeight: 1.6,
          color: 'var(--text-secondary)',
          margin: '0 0 14px',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical' as const,
          overflow: 'hidden',
        }}
      >
        {m.bio}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {(m.tags ?? []).map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </Link>
  );
}

export function RosterRow({
  m,
  num,
  onOpen,
}: {
  m: Member;
  num: string;
  onOpen: (id: string) => void;
}) {
  const first = m.name.split(' ')[0];
  return (
    <button
      onClick={() => onOpen(m.id)}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 22,
        background: 'none',
        border: 0,
        borderBottom: '1px solid var(--border-hairline)',
        padding: '20px 8px',
        cursor: 'pointer',
        textAlign: 'left',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = 'var(--surface-card)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = 'none';
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 14,
          color: 'var(--text-muted)',
          width: 28,
          flexShrink: 0,
        }}
      >
        {num}
      </span>
      <Avatar name={first} size={34} live={m.live} degree={m.live ? undefined : m.degree} />
      <span style={{ display: 'flex', alignItems: 'baseline', gap: 10, minWidth: 240 }}>
        <span
          style={{
            fontFamily: 'var(--font-serif-display)',
            fontWeight: 700,
            fontSize: 20,
            color: 'var(--ink-900)',
          }}
        >
          {m.name}
        </span>
        {m.handle && (
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>
            {m.handle}
          </span>
        )}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 14,
          fontWeight: 600,
          color: 'var(--text-secondary)',
          marginLeft: 'auto',
        }}
      >
        {m.field}
      </span>
      <Badge variant="degree">{m.degree}</Badge>
    </button>
  );
}

export function PrincipleCard({ no, title, body }: { no: string; title: string; body: string }) {
  return (
    <div
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-sm)',
        padding: 24,
      }}
    >
      <div
        style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--brass-600)', marginBottom: 12 }}
      >
        {no}
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-serif-display)',
          fontWeight: 700,
          fontSize: 18,
          color: 'var(--ink-900)',
          margin: '0 0 8px',
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 13.5, lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>
        {body}
      </p>
    </div>
  );
}

export function CtaBand({
  title,
  subtitle,
  ctaLabel,
  onCta,
}: {
  title: string;
  subtitle: string;
  ctaLabel: string;
  onCta: () => void;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        flexWrap: 'wrap',
        marginTop: 32,
        padding: '28px 32px',
        background: 'var(--oxblood-600)',
        borderRadius: 'var(--radius-lg)',
        color: '#fff',
      }}
    >
      <div>
        <div
          style={{ fontFamily: 'var(--font-serif-kr)', fontWeight: 700, fontSize: 22, marginBottom: 4 }}
        >
          {title}
        </div>
        <div style={{ fontSize: 14, color: 'var(--brass-300)' }}>{subtitle}</div>
      </div>
      <Button variant="honor" size="lg" onClick={onCta}>
        {ctaLabel}
      </Button>
    </div>
  );
}
