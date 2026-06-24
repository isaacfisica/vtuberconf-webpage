'use client';

import { useRouter } from 'next/navigation';
import { Member } from '@/lib/data';
import Avatar from '@/components/ui/Avatar';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';
import { EyebrowLabel } from '@/lib/blocks';
import { RadialGlow } from '@/lib/cosmetics';

type Props = {
  member: Member;
  members: Member[];
};

const SNS_COLORS: Record<string, string> = {
  X: '#14152b',
  Twitter: '#14152b',
  YouTube: '#e23b2e',
  Twitch: '#7350d6',
  Chzzk: '#03c75a',
};
const SNS_GLYPHS: Record<string, string> = {
  X: '𝕏',
  Twitter: '𝕏',
  YouTube: '▶',
  Twitch: 'TW',
  Chzzk: 'CZ',
};

export default function ProfilePage({ member: m, members }: Props) {
  const router = useRouter();
  const first = m.name.split(' ')[0];
  const others = members.filter((x) => x.id !== m.id).slice(0, 3);

  return (
    <div style={{ background: 'var(--surface-page)' }}>
      {/* Banner */}
      <div
        style={{
          position: 'relative',
          background: 'var(--surface-ink)',
          overflow: 'hidden',
          padding: '24px clamp(20px, 5vw, 40px) 0',
        }}
      >
        <RadialGlow color="violet" size={380} style={{ right: '6%', top: -160 }} />
        <div style={{ position: 'relative', maxWidth: 1000, margin: '0 auto' }}>
          <button
            onClick={() => router.push('/directory')}
            style={{
              appearance: 'none',
              background: 'none',
              border: 0,
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--text-on-dark-muted)',
              padding: 0,
              marginBottom: 20,
              whiteSpace: 'nowrap',
            }}
          >
            ← 회원 명부
          </button>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: 24,
              paddingBottom: 28,
              flexWrap: 'wrap',
            }}
          >
            <Avatar name={first} size={96} live={m.live} degree={m.live ? undefined : m.degree} />
            <div style={{ paddingBottom: 4 }}>
              <h1
                style={{
                  fontFamily: 'var(--font-serif-kr)',
                  fontWeight: 800,
                  fontSize: 'clamp(28px, 6vw, 38px)',
                  margin: '0 0 8px',
                  color: 'var(--text-on-dark)',
                }}
              >
                {m.name}
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <Badge variant="degree" size="lg">{m.degree}</Badge>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 15,
                    fontWeight: 600,
                    color: 'var(--text-on-dark)',
                  }}
                >
                  {m.field}
                </span>
                {m.handle && (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 13,
                      color: 'var(--text-on-dark-muted)',
                    }}
                  >
                    {m.handle}
                  </span>
                )}
              </div>
            </div>
            {/* <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, paddingBottom: 6 }}>
              {m.live && <Button variant="virtual">지금 방송 보기</Button>}
              <Button variant="honor">팔로우</Button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Body */}
      <div
        className="vss-profile-grid"
        style={{
          maxWidth: 1000,
          margin: '0 auto',
          padding: '36px clamp(20px, 5vw, 40px) 80px',
          display: 'grid',
          gap: 40,
          alignItems: 'start',
        }}
      >
        {/* Left */}
        <div>
          <EyebrowLabel mb={12}>자기소개</EyebrowLabel>
          <p style={{ fontSize: 16.5, lineHeight: 1.85, color: 'var(--text-primary)', margin: '0 0 18px' }}>
            {m.bioLong}
          </p>
          {(m.tags?.length ?? 0) > 0 && (
            <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', margin: '0 0 32px' }}>
              {m.tags!.map((t) => <Tag key={t} accent>{t}</Tag>)}
            </div>
          )}

          {/* 스트리밍 채널 */}
          {m.channel && (
          <>
          <EyebrowLabel mb={12}>스트리밍 채널</EyebrowLabel>
          <div
            style={{
              position: 'relative',
              background: 'var(--surface-ink)',
              border: '1px solid var(--border-on-dark)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              padding: '24px 26px',
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                position: 'absolute',
                right: -50,
                top: -50,
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(31,182,196,.22), transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <div style={{ position: 'relative', flex: '1 1 240px', minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 8 }}>
                {m.live && <Badge variant="live">ON AIR</Badge>}
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 15,
                    fontWeight: 700,
                    color: 'var(--text-on-dark)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {m.channel.platform}
                </span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-on-dark-muted)' }}>
                {m.channel.schedule}
              </div>
            </div>
            {m?.channel?.href && (
              <div style={{ position: 'relative' }}>
                <Button onClick={() => window.open(m.channel?.href, '_blank')} variant="virtual">
                  방송 보러 가기 →
                </Button>
              </div>
            )}
          </div>
          </>
          )}
        </div>

        {/* Sidebar */}
        <div className="vss-profile-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'sticky', top: 88 }}>
          {/* 학위 인증 */}
          <Card variant="seal" title="전공 · 학위 인증">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 13.5 }}>
              {[
                { k: '학위', v: m.degree, mono: true },
                { k: '전공', v: m.field },
                // { k: '인증', v: '✓ 검증 완료', green: true },
                { k: '가입', v: m.joined, mono: true },
              ]
                .filter((row) => row.v)
                .map((row) => (
                <div
                  key={row.k}
                  style={{ display: 'flex', justifyContent: 'space-between', gap: 12, whiteSpace: 'nowrap' }}
                >
                  <span style={{ color: 'var(--text-muted)' }}>{row.k}</span>
                  <span
                    style={{
                      fontWeight: 600,
                      fontFamily: row.mono ? 'var(--font-mono)' : undefined,
                      // color: row.green ? 'var(--status-success)' : 'var(--ink-900)',
                    }}
                  >
                    {row.v}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* SNS */}
          {(m.sns?.length ?? 0) > 0 && (
          <Card title="SNS · 채널">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {m.sns!.map((s) => {
                const glyph = SNS_GLYPHS[s.kind] ?? s.kind.slice(0, 2);
                const bg = SNS_COLORS[s.kind] ?? 'var(--ink-700)';
                return (
                  <a
                    key={s.kind}
                    href={s.url}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '9px 10px',
                      borderRadius: 'var(--radius-md)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.background = 'var(--surface-sunken)')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.background = 'transparent')
                    }
                  >
                    <span
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 8,
                        background: bg,
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-sans)',
                        fontSize: 12,
                        fontWeight: 700,
                        flexShrink: 0,
                        letterSpacing: 0,
                      }}
                    >
                      {glyph}
                    </span>
                    <span style={{ flex: 1, minWidth: 0 }}>
                      <span
                        style={{
                          display: 'block',
                          fontFamily: 'var(--font-sans)',
                          fontSize: 13,
                          fontWeight: 600,
                          color: 'var(--ink-900)',
                        }}
                      >
                        {s.kind}
                      </span>
                      <span
                        style={{
                          display: 'block',
                          fontFamily: 'var(--font-mono)',
                          fontSize: 11.5,
                          color: 'var(--text-muted)',
                        }}
                      >
                        {s.label}
                      </span>
                    </span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-muted)' }}>
                      ↗
                    </span>
                  </a>
                );
              })}
            </div>
          </Card>
          )}

          {/* 다른 회원 */}
          <Card title="다른 회원">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {others.map((x) => {
                const xFirst = x.name.split(' ')[0];
                return (
                  <button
                    key={x.id}
                    onClick={() => router.push(`/members/${x.id}`)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 11,
                      appearance: 'none',
                      background: 'none',
                      border: 0,
                      cursor: 'pointer',
                      padding: 0,
                      textAlign: 'left',
                    }}
                  >
                    <Avatar name={xFirst} size={34} live={x.live} />
                    <span>
                      <span
                        style={{
                          display: 'block',
                          fontFamily: 'var(--font-sans)',
                          fontWeight: 600,
                          fontSize: 13.5,
                          color: 'var(--ink-900)',
                        }}
                      >
                        {xFirst}
                      </span>
                      <span style={{ display: 'block', fontSize: 11.5, color: 'var(--text-muted)' }}>
                        {x.field}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
