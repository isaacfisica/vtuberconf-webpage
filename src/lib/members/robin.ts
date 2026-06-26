import type { Member } from '../types';

const robin: Member = {
  id: 'robin',
  name: '네무이 로빈',
  field: 'HCI (인간-컴퓨터 상호작용)',
  degree: '공학석사',
  deg: 'ms',
  tags: ['HCI', '인지과학', '디자인'],
  role: '정회원',
  joined: '2026.03',
  bio: '사람을 연구하는 일을 업으로 삼는 HCI 전공 석사입니다.',
  bioLong:
    'HCI(인간-컴퓨터 상호작용)를 전공한 석사로, 지금도 사람을 연구하는 일을 직업으로 삼고 있습니다. 현재는 스트리밍 없이 유튜브 편집 콘텐츠를 올리고 있습니다.',
     sns: [
    { kind: 'X', label: '@nemui_robin', url: 'https://x.com/nemui_robin' },
    { kind: 'YouTube', label: '@nemui_robin', url: 'https://www.youtube.com/@nemui_robin' },
  ],
};

export default robin;