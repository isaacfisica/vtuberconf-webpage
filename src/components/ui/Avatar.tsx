'use client';

type AvatarProps = {
  name?: string;
  size?: number;
  live?: boolean;
  degree?: string;
  className?: string;
};

export default function Avatar({ name = '', size = 44, live = false, degree, className = '' }: AvatarProps) {
  const initials = name.trim().slice(0, 2);
  const fontSize = size * 0.4;

  return (
    <span
      className={className}
      style={{ position: 'relative', display: 'inline-flex', flexShrink: 0, width: size, height: size }}
    >
      {live && (
        <span
          style={{
            position: 'absolute',
            inset: -4,
            borderRadius: '50%',
            border: '2px solid var(--cyan-500)',
            boxShadow: 'var(--glow-live)',
            animation: 'vss-ring 1.8s var(--ease-standard) infinite',
          }}
        />
      )}
      <span
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: 'var(--ink-700)',
          color: 'var(--paper-white)',
          fontFamily: 'var(--font-serif-display)',
          fontWeight: 700,
          fontSize,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid var(--paper-white)',
          boxShadow: 'var(--shadow-sm)',
          userSelect: 'none',
        }}
      >
        {initials}
      </span>
      {live && (
        <span
          style={{
            position: 'absolute',
            bottom: -6,
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'var(--font-sans)',
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: '.08em',
            background: 'var(--cyan-500)',
            color: 'var(--ink-950)',
            padding: '1px 6px',
            borderRadius: 'var(--radius-pill)',
            border: '1.5px solid var(--paper-white)',
            whiteSpace: 'nowrap',
          }}
        >
          LIVE
        </span>
      )}
      {!live && degree && (
        <span
          style={{
            position: 'absolute',
            bottom: -2,
            right: -2,
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            fontWeight: 600,
            background: 'var(--oxblood-600)',
            color: '#fff',
            padding: '1px 5px',
            borderRadius: 'var(--radius-xs)',
            border: '1.5px solid var(--paper-white)',
            whiteSpace: 'nowrap',
          }}
        >
          {degree}
        </span>
      )}
    </span>
  );
}
