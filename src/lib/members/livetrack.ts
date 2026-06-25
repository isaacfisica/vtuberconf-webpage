import type { Member } from '../types';

const livetrack: Member = {
  id: 'livetrack',
  name: 'LiveTrack',
  field: '보건의과학 (방사선학)',
  degree: '박사과정',
  deg: 'phd',
  tags: ['방사선학', '의학', '의료영상', '핵의학', 'AI', '초음파'],
  accent: 'var(--cyan-500)',
  role: '정회원',
  joined: '2026.03',
  bio: '의료 영상과 핵의학을 다루는 방사선학 박사과정생입니다.',
  bioLong:
    '보건의과학에서 방사선학을 전공해 갓 석사를 졸업하고 박사과정에 진학했습니다. CT·MR·초음파·X-ray 등 영상의학과 핵의학을 다루며, 의료 영상과 AI 분야로 연구를 넓혀가고 있습니다.\n\n원래 IT에 관심이 많아 다른 스트리머들의 방송 세팅을 돕다가 직접 스트리밍을 시작했습니다. 대학원생의 공부, 작업, 잡담, 그리고 뭐 하는지 모르는 방송을 합니다.',
  sns: [
    { kind: 'X', label: '@LiveTrack_X', url: 'https://x.com/LiveTrack_X' },
    { kind: 'Chzzk', label: 'LiveTrack', url: 'https://chzzk.naver.com/fa746985343b7629aed5cdbd33e6f253' },
    { kind: 'Website', label: 'litt.ly/livetrack', url: 'https://litt.ly/livetrack' },
  ],
  channel: { platform: 'Chzzk', schedule: '게릴라', href: 'https://chzzk.naver.com/fa746985343b7629aed5cdbd33e6f253' },
};

export default livetrack;