'use client';

import Image from 'next/image';
import type { ReactNode, CSSProperties } from 'react';
import { asset } from './basePath';

export function SealDecor({
  right = -90,
  top = -40,
  size = 460,
  opacity = 0.06,
}: {
  right?: number;
  top?: number;
  size?: number;
  opacity?: number;
}) {
  return (
    <div
      style={{
        position: 'absolute',
        right,
        top,
        width: size,
        height: size,
        opacity,
        pointerEvents: 'none',
      }}
    >
      <Image
        src={asset('/assets/seal.svg')}
        alt=""
        fill
        style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
        unoptimized
      />
    </div>
  );
}

export function RadialGlow({
  color = 'violet',
  size = 420,
  style,
}: {
  color?: 'violet' | 'cyan';
  size?: number;
  style?: CSSProperties;
}) {
  const bg =
    color === 'violet'
      ? 'radial-gradient(circle, rgba(115,80,214,.40), transparent 70%)'
      : 'radial-gradient(circle, rgba(31,182,196,.20), transparent 70%)';
  return (
    <div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: bg,
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
}

export function FleuronLabel({
  color = 'brass',
  mb = 18,
  children,
}: {
  color?: 'brass' | 'academic';
  mb?: number;
  children: ReactNode;
}) {
  const textColor = color === 'brass' ? 'var(--brass-400)' : 'var(--accent-academic)';
  const filter =
    color === 'brass'
      ? 'invert(72%) sepia(38%) saturate(540%) hue-rotate(2deg) brightness(92%)'
      : undefined;
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 9,
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '.2em',
        textTransform: 'uppercase' as const,
        color: textColor,
        marginBottom: mb,
      }}
    >
      <Image
        src={asset('/assets/fleuron.svg')}
        alt=""
        width={13}
        height={13}
        style={filter ? { filter } : undefined}
        unoptimized
      />
      {children}
    </div>
  );
}

export function StatsRow({ stats }: { stats: Array<{ k: string; v: string | number }> }) {
  return (
    <div style={{ display: 'flex', gap: 48, marginTop: 56 }}>
      {stats.map((s) => (
        <div key={s.k}>
          <div
            style={{
              fontFamily: 'var(--font-serif-display)',
              fontWeight: 700,
              fontSize: 34,
              color: 'var(--text-on-dark)',
            }}
          >
            {s.v}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 12.5,
              color: 'var(--text-on-dark-muted)',
              marginTop: 2,
            }}
          >
            {s.k}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ManifestoBand({ quote, source }: { quote: string; source: string }) {
  return (
    <section style={{ background: 'var(--oxblood-600)', color: '#fff' }}>
      <div
        style={{
          maxWidth: 880,
          margin: '0 auto',
          padding: 'clamp(52px, 9vw, 80px) clamp(20px, 5vw, 40px)',
          textAlign: 'center',
        }}
      >
        <Image
          src={asset('/assets/fleuron.svg')}
          alt=""
          width={20}
          height={20}
          style={{ filter: 'brightness(0) invert(1)', opacity: 0.7, marginBottom: 18 }}
          unoptimized
        />
        <p
          style={{
            fontFamily: 'var(--font-serif-kr)',
            fontWeight: 400,
            fontSize: 'clamp(20px, 3.4vw, 28px)',
            lineHeight: 1.6,
            margin: 0,
            color: '#fff',
          }}
        >
          &ldquo;{quote}&rdquo;
        </p>
        <div
          style={{
            marginTop: 24,
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            letterSpacing: '.12em',
            textTransform: 'uppercase' as const,
            color: 'var(--brass-300)',
          }}
        >
          — {source}
        </div>
      </div>
    </section>
  );
}

export function QuietManifesto({ quote, source }: { quote: string; source: string }) {
  return (
    <section
      style={{
        borderTop: '1px solid var(--border-hairline)',
        background: 'var(--parchment-50)',
      }}
    >
      <div
        style={{
          maxWidth: 760,
          margin: '0 auto',
          padding: '72px 40px',
          textAlign: 'center',
        }}
      >
        <Image
          src={asset('/assets/fleuron.svg')}
          alt=""
          width={18}
          height={18}
          style={{ opacity: 0.6, marginBottom: 18 }}
          unoptimized
        />
        <p
          style={{
            fontFamily: 'var(--font-serif-kr)',
            fontWeight: 400,
            fontSize: 26,
            lineHeight: 1.7,
            margin: 0,
            color: 'var(--ink-900)',
          }}
        >
          &ldquo;{quote}&rdquo;
        </p>
        <div
          style={{
            width: 48,
            height: 1.5,
            background: 'linear-gradient(90deg,transparent,var(--brass-500),transparent)',
            margin: '22px auto 14px',
          }}
        />
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            letterSpacing: '.14em',
            textTransform: 'uppercase' as const,
            color: 'var(--text-muted)',
          }}
        >
          {source}
        </div>
      </div>
    </section>
  );
}

export function BrassDivider() {
  return (
    <div
      style={{
        width: 64,
        height: 2,
        background: 'linear-gradient(90deg,var(--brass-500),transparent)',
        margin: '0 0 22px',
      }}
    />
  );
}
