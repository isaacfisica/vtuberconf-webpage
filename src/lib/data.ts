import type { Member } from './types';

export type { SnsLink, Member } from './types';
export { MEMBERS } from './members';

const SNS_COLORS: Record<string, string> = {
  X: '#14152b',
  YouTube: '#e23b2e',
  Twitch: '#7350d6',
  '치지직': '#03c75a',
};

const SNS_GLYPHS: Record<string, string> = {
  X: '𝕏',
  YouTube: '▶',
  Twitch: 'TW',
  '치지직': 'CZ',
};

export function decorateMember(m: Member) {
  return {
    ...m,
    first: m.name.split(' ')[0],
    cardDegree: m.live ? undefined : m.degree,
    sns: (m.sns ?? []).map((s) => ({
      ...s,
      glyph: SNS_GLYPHS[s.kind] ?? s.kind.slice(0, 2),
      color: SNS_COLORS[s.kind] ?? '#2a2c54',
    })),
  };
}

export const FIELDS = [
  '전체',
  '물리학',
  '생물학',
  '화학',
  'AI',
  '음악',
  '교육',
  '경영학',
  '인문학',
  '예술',
  '공학',
  '심리학',
];

export const PRINCIPLES = [
  {
    no: '제 1 조',
    title: '학문의 엄밀함',
    body: '익명의 화면 뒤에서도 근거 없는 주장은 하지 않습니다. 모든 방송은 출처와 함께합니다.',
  },
  {
    no: '제 2 조',
    title: '강의실의 연장',
    body: '방송은 가르침의 연속입니다. 어려운 개념을 누구나 이해할 언어로 풀어냅니다.',
  },
  {
    no: '제 3 조',
    title: '동료 학습자',
    body: '시청자는 구독자가 아니라 함께 배우는 동료입니다. 질문이 곧 다음 주제가 됩니다.',
  },
];

export const FOOTER_COLS = [
  { head: '학회', items: ['소개', '회칙', '운영위원'] },
  { head: '활동', items: ['회원 명부', '회보', '정기 콜로퀴엄'] },
  { head: '참여', items: ['후원', '문의', '정관'] },
];

export const STATS = [
  { v: '48', k: '정회원' },
  { v: '12', k: '전공 분야' },
  { v: '318', k: '발표 논문' },
  { v: '2.1M', k: '누적 시청' },
];
