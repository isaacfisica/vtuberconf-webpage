'use client';

import Image from 'next/image';
import { Member, PRINCIPLES } from '@/lib/data';
import { asset } from '@/lib/basePath';
import Avatar from '@/components/ui/Avatar';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import { EyebrowLabel, PrincipleCard, CtaBand } from '@/lib/blocks';
import { FleuronLabel, SealDecor, RadialGlow } from '@/lib/cosmetics';

type Props = {
  members: Member[];
};

export default function AboutPage({ members }: Props) {
  const president = members.find((m) => m.id === 'chika') ?? members[0];

  return (
    <div style={{ background: 'var(--surface-page)' }}>
      {/* Banner */}
      <section
        style={{
          position: 'relative',
          background: 'var(--surface-ink)',
          color: 'var(--text-on-dark)',
          overflow: 'hidden',
        }}
      >
        <SealDecor right={-70} top={-70} size={360} />
        <RadialGlow color="violet" size={380} style={{ left: '30%', bottom: -180 }} />
        <div
          style={{
            position: 'relative',
            maxWidth: 1000,
            margin: '0 auto',
            padding: '72px 40px 64px',
          }}
        >
          <FleuronLabel color="brass" mb={18}>About · 소개</FleuronLabel>
          <h1
            style={{
              fontFamily: 'var(--font-serif-kr)',
              fontWeight: 800,
              fontSize: 52,
              lineHeight: 1.15,
              letterSpacing: '-.02em',
              margin: '0 0 18px',
              color: 'var(--text-on-dark)',
            }}
          >
            화면 너머의 학회
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: 'var(--text-on-dark-muted)',
              maxWidth: 600,
              margin: 0,
            }}
          >
            버튜버학회는 석사 학위 재학생 이상의 학위를 갖춘 버추얼 스트리머들이 모여, 방송이라는
            매체로 학문을 이어 가는 학술 공동체입니다.
          </p>
        </div>
      </section>

      {/* 소개 텍스트 */}
      <section
        style={{
          maxWidth: 1000,
          margin: '0 auto',
          padding: '72px 40px 16px',
          display: 'grid',
          gridTemplateColumns: '200px 1fr',
          gap: 48,
          alignItems: 'start',
        }}
      >
        <div>
          <EyebrowLabel mb={10}>우리는</EyebrowLabel>
          <div
            style={{
              width: 48,
              height: 1.5,
              background: 'linear-gradient(90deg,var(--brass-500),transparent)',
            }}
          />
        </div>
        <div style={{ maxWidth: 620 }}>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--text-primary)', margin: '0 0 20px' }}>
            2026년, 익명의 화면 뒤에서 각자 연구하던 버추얼 스트리머들이 하나의 질문 앞에 모였습니다.{' '}
            <strong>&ldquo;방송은 강의실의 연장이 될 수 있는가.&rdquo;</strong> 우리는 그렇다고 믿습니다.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--text-secondary)', margin: '0 0 20px' }}>
            버튜버학회는 학위로 검증된 전문성과, 매일 밤 시청자와 마주하는 방송의 즐거움을 동시에
            추구합니다. 회원은 모두 석사 이상의 학위를 인증한 정회원이며, 자신의 전공을 누구나 이해할 수
            있는 언어로 풀어 방송합니다.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--text-secondary)', margin: 0 }}>
            우리에게 시청자는 구독자가 아니라 동료 학습자입니다. 함께 논문을 읽고, 사료를 강독하고,
            데이터를 검증하는 이 모든 과정이 곧 학회의 활동입니다.
          </p>
        </div>
      </section>

      {/* 학회장 인삿말 */}
      <section style={{ maxWidth: 1000, margin: '0 auto', padding: '48px 40px 24px' }}>
        <Card variant="seal">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '240px 1fr',
              gap: 40,
              alignItems: 'start',
              padding: '8px 6px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 14 }}>
              <EyebrowLabel mb={0}>학회장 인삿말</EyebrowLabel>
              <Avatar name={president.name.split(' ')[0]} size={72} />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontWeight: 700,
                    fontSize: 22,
                    color: 'var(--ink-900)',
                    lineHeight: 1.2,
                  }}
                >
                  {president.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 13,
                    color: 'var(--text-secondary)',
                    marginTop: 4,
                  }}
                >
                  제2대 학회장 · {president.field}
                </div>
              </div>
              <Badge variant="degree">{president.degree}</Badge>
            </div>

            <div style={{ borderLeft: '1px solid var(--border-hairline)', paddingLeft: 40 }}>
              <Image
                src={asset('/assets/fleuron.svg')}
                alt=""
                width={18}
                height={18}
                style={{ opacity: 0.45, marginBottom: 14 }}
                unoptimized
              />
              <p
                style={{
                  fontFamily: 'var(--font-serif-kr)',
                  fontSize: 19,
                  lineHeight: 1.8,
                  color: 'var(--ink-900)',
                  margin: '0 0 18px',
                }}
              >
                반갑습니다. 버튜버학회의 2대 학회장, {president.name}입니다.
              </p>
              <p
                style={{ fontSize: 15.5, lineHeight: 1.85, color: 'var(--text-secondary)', margin: '0 0 16px' }}
              >
                처음 방송을 켜던 날을 기억합니다. 학위 논문을 마치고 나니, 어렵게 배운 것을 혼자 알고
                있는 일이 아깝게 느껴졌습니다. 화면 너머 누군가에게 한 문장이라도 가닿는다면 그것으로
                충분하다고 생각했습니다. 그렇게 시작한 방송이 이제 여러 동료를 만나 하나의 학회가
                되었습니다.
              </p>
              <p
                style={{ fontSize: 15.5, lineHeight: 1.85, color: 'var(--text-secondary)', margin: '0 0 22px' }}
              >
                우리는 화려한 자막이나 큰 숫자를 좇지 않습니다. 대신 매주 같은 시간, 같은 자리에서 한
                편의 논문을, 한 점의 그림을, 한 줄의 사료를 정성껏 다룹니다. 버튜버학회의 문은 학문을
                사랑하는 모든 버추얼 스트리머에게 열려 있습니다. 동료 학습자로서, 화면 너머에서 뵙겠습니다.
              </p>
              <div
                style={{
                  fontFamily: 'var(--font-serif-kr)',
                  fontSize: 17,
                  fontWeight: 700,
                  color: 'var(--ink-900)',
                }}
              >
                {president.name}{' '}
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 13,
                    fontWeight: 500,
                    color: 'var(--text-muted)',
                    marginLeft: 8,
                  }}
                >
                  버튜버학회 2대 학회장
                </span>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* 원칙 */}
      <section style={{ maxWidth: 1000, margin: '0 auto', padding: '40px 40px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {PRINCIPLES.map((p) => (
            <PrincipleCard key={p.no} no={p.no} title={p.title} body={p.body} />
          ))}
        </div>
        {/* <CtaBand
          title="학회와 함께하시겠습니까?"
          subtitle="석사 이상 학위를 인증한 버추얼 스트리머라면 누구나 신청할 수 있습니다."
          ctaLabel="회원 명부 보기"
          onCta={() => onNav('directory')}
        /> */}
      </section>
    </div>
  );
}
