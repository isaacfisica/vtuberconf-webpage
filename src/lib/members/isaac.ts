import type { Member } from '../types';

const isaac: Member = {
  id: 'isaac',
  name: '이삭',
  field: '실험 핵·입자물리학',
  degree: '박사과정',
  deg: 'phd',
  tags: ['물리학', '전자공학', '핵물리학', '입자물리학', '핵의학'],
  accent: 'var(--violet-500)',
  joined: '2026.03',
  role: '정회원',
  bio: '이탈리아에서 실험 핵·입자물리학으로 박사과정에 재학중입니다.',
  bioLong:
    '이탈리아에서 실험 핵·입자물리학으로 박사과정에 재학 중입니다. 핵·입자물리 실험과 검출기 등 실험장치를 다루며, 학계에서 썩은지는 한 10년쯤 되었습니다.',
  sns: [
    { kind: 'X', label: '@isaacfisica_kr', url: '#' },
    { kind: 'YouTube', label: '@isaacfisica', url: '#' },
    { kind: '치지직', label: '', url: 'https://chzzk.naver.com/271d3c1c873ad6e013f2524ea705045c' },
    { kind: 'Website', label: '', url: 'https://isaacfisica.github.io' },

  ],
  channel: { platform: '치지직', schedule: '게릴라', href: 'https://chzzk.naver.com/271d3c1c873ad6e013f2524ea705045c' },
};

export default isaac;
