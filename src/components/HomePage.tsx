'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Member, STATS } from '@/lib/data';
import Button from '@/components/ui/Button';
import MemberCard, { SectionHeader } from '@/lib/blocks';
import { SealDecor, RadialGlow, FleuronLabel, StatsRow, ManifestoBand } from '@/lib/cosmetics';

const MANIFESTO_QUOTE =
  '우리는 익명의 화면 뒤에서도 학문의 엄밀함을 잃지 않는다. 방송은 강의실의 연장이며, 시청자는 동료 학습자다.';
const MANIFESTO_SOURCE = '버튜버학회 회칙 제 1 조';

type Props = {
  members: Member[];
};

function pickRandom(members: Member[], count: number): Member[] {
  const pool = [...members];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

export default function HomePage({ members }: Props) {
  const router = useRouter();
  // 첫 렌더(SSR)는 고정 순서로 출력해 하이드레이션 불일치를 피하고,
  // 마운트 후 무작위 6명으로 교체한다.
  const [featured, setFeatured] = useState<Member[]>(() => members.slice(0, 6));

  useEffect(() => {
    setFeatured(pickRandom(members, 6));
  }, [members]);

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          background: 'var(--surface-ink)',
          color: 'var(--text-on-dark)',
          overflow: 'hidden',
        }}
      >
        <SealDecor right={-90} top={-40} size={460} />
        <RadialGlow color="violet" size={420} style={{ right: '8%', top: -160 }} />
        <RadialGlow color="cyan" size={440} style={{ left: '6%', bottom: -200 }} />
        <div
          style={{
            position: 'relative',
            maxWidth: 1080,
            margin: '0 auto',
            padding: 'clamp(56px, 10vw, 92px) clamp(20px, 5vw, 40px) clamp(52px, 9vw, 84px)',
          }}
        >
          <FleuronLabel color="brass" mb={22}>Virtual Scholars Society · est. 2026</FleuronLabel>

          <h1
            style={{
              fontFamily: 'var(--font-serif-kr)',
              fontWeight: 800,
              fontSize: 'clamp(40px, 9vw, 64px)',
              lineHeight: 1.12,
              letterSpacing: '-.02em',
              color: 'var(--text-on-dark)',
              margin: '0 0 22px',
              maxWidth: 820,
            }}
          >
            버추얼, 그리고
            <br />
            <span style={{ color: 'var(--brass-300)' }}>학위.</span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(16px, 2.4vw, 19px)',
              lineHeight: 1.65,
              color: 'var(--text-on-dark-muted)',
              maxWidth: 560,
              margin: '0 0 34px',
            }}
          >
            석사 학위 재학생 이상의 학위를 갖춘 버추얼 스트리머들이 모인 학술 공동체. 우리는 화면
            너머에서 진지하게 연구하고, 즐겁게 방송합니다.
          </p>

          {/* <div style={{ display: 'flex', gap: 12 }}>
            <Button variant="virtual" size="lg" onClick={() => onNav('directory')}>
              회원 명부 보기
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => onNav('about')}
              style={{ color: 'var(--text-on-dark)', borderColor: 'var(--border-on-dark)' }}
            >
              학회 소개
            </Button>
          </div> */}

          {/* <StatsRow stats={STATS} /> */}
        </div>
      </section>

      {/* Featured Fellows */}
      <section style={{ maxWidth: 1080, margin: '0 auto', padding: 'clamp(48px, 8vw, 72px) clamp(20px, 5vw, 40px)' }}>
        <SectionHeader
          eyebrow="Fellows · 정회원"
          title="이번 학기의 회원"
          action={
            <Button variant="secondary" size="sm" onClick={() => router.push('/directory')}>
              전체 명부 →
            </Button>
          }
        />
        <div
          className="vss-card-grid"
          style={{
            display: 'grid',
            gap: 20,
          }}
        >
          {featured.map((m) => (
            <MemberCard key={m.id} member={m} />
          ))}
        </div>
      </section>

      <ManifestoBand quote={MANIFESTO_QUOTE} source={MANIFESTO_SOURCE} />
    </div>
  );
}
