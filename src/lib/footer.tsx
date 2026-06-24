'use client';

import Image from 'next/image';
import { FOOTER_COLS } from '@/lib/data';
import { asset } from './basePath';

export default function SiteFooter() {
  return (
    <footer
      style={{
        background: 'var(--surface-ink)',
        color: 'var(--text-on-dark-muted)',
        padding: '48px clamp(20px, 5vw, 40px) 36px',
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 40, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 300 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <Image src={asset('/assets/monogram.svg')} alt="" width={34} height={34} unoptimized />
              <span
                style={{
                  fontFamily: 'var(--font-serif-kr)',
                  fontWeight: 800,
                  fontSize: 18,
                  color: 'var(--text-on-dark)',
                }}
              >
                버튜버학회
              </span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, margin: 0 }}>
              석사 학위 재학생 이상의 학위를 갖춘 버추얼 스트리머의 학술 공동체.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 56, marginLeft: 'auto', fontSize: 13, flexWrap: 'wrap' }}>
            {FOOTER_COLS.map((col) => (
              <div key={col.head} style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    fontSize: 11,
                    letterSpacing: '.18em',
                    textTransform: 'uppercase',
                    color: 'var(--brass-400)',
                  }}
                >
                  {col.head}
                </span>
                {col.items.map((item) => (
                  <span key={item} style={{ color: 'var(--text-on-dark-muted)', cursor: 'pointer' }}>
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: 36,
            paddingTop: 18,
            borderTop: '1px solid var(--border-on-dark)',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '.04em',
          }}
        >
          © 2026 VIRTUAL SCHOLARS SOCIETY · 버튜버학회 · M.A. · M.S. · Ph.D.
        </div>
      </div>
    </footer>
  );
}
