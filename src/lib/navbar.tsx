'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { asset } from './basePath';

const NAV_ITEMS = [
  { href: '/about', label: '소개' },
  { href: '/directory', label: '회원 명부' },
] as const;

export default function TopBar() {
  const pathname = usePathname();

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 30,
        display: 'flex',
        alignItems: 'center',
        gap: 28,
        padding: '14px 40px',
        background: 'rgba(250,246,236,.82)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-hairline)',
      }}
    >
      <Link
        href="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          textDecoration: 'none',
        }}
      >
        <Image src={asset('/assets/monogram.svg')} alt="" width={38} height={38} unoptimized />
        <span
          style={{
            fontFamily: 'var(--font-serif-kr)',
            fontWeight: 800,
            fontSize: 21,
            color: 'var(--ink-900)',
            letterSpacing: '-.01em',
          }}
        >
          버튜버학회
        </span>
      </Link>

      <nav style={{ display: 'flex', gap: 4, marginLeft: 8 }}>
        {NAV_ITEMS.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                fontWeight: 600,
                color: active ? 'var(--ink-900)' : 'var(--text-secondary)',
                padding: '8px 14px',
                borderRadius: 'var(--radius-sm)',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
              }}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
