import type { Member } from '../types';

const isaac: Member = {
  id: 'isaac',
  name: '이삭',
  field: '실험 핵·입자물리학',
  degree: '박사과정',
  deg: 'phd',
  tags: ['물리학', '전자공학', '핵물리학', '입자물리학', '거대과학', '국제공동연구'],
  accent: 'var(--violet-500)',
  joined: '2026.03',
  role: '정회원',
  bio: '이탈리아에서 실험 핵·입자물리학으로 박사과정에 재학중입니다.',
  bioLong:
    '이탈리아에서 물리학으로 박사과정을 하고있습니다. 핵·입자물리학이 세부전공인데  검출기를 비롯한 실험장치를 만지는 게 본업입니다. 학계에서 썩은 지는 어느덧 10년쯤 됐습니다.\n 사실상 국내/국제떠돌이 한지가 10년 됐다는 뜻이고, 대충 떠돌이포인트가 한국에만 4개, 한국 밖에 2개 (때때로 그 이상) 있습니다. 이 업계가 실험장비는 여러군데 많은데 기술자가 별로 없어서 부르는대로 움직이기 때문에 교통기업에게 돈을 많이 씁니다.\n비행기 마일리지는 별로 못쌓았습니다. 티켓 싸게 샀더니 마일리지를 반토막밖에 안주더라고요. \n\n 잡담, 게임, 작업방송을 합니다.',
  sns: [
    { kind: 'Twitter', label: '@isaacfisica_kr', url: 'https://twitter.com/isaacfisica_kr' },
    { kind: 'X', label: '@isaacfisica_kr', url: 'https://x.com/isaacfisica_kr' },
    { kind: 'YouTube', label: '@isaacfisica', url: 'https://youtube.com/@isaacfisica' },
    { kind: 'Chzzk', label: '이삭아저씨', url: 'https://chzzk.naver.com/271d3c1c873ad6e013f2524ea705045c' },
    { kind: 'Website', label: 'isaacfisica.github.io', url: 'https://isaacfisica.github.io' },

  ],
  channel: { platform: 'Chzzk', schedule: '게릴라', href: 'https://chzzk.naver.com/271d3c1c873ad6e013f2524ea705045c' },
};

export default isaac;
