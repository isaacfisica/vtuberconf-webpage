'use client';

import { useState } from 'react';
import { Member, FIELDS } from '@/lib/data';
import Tabs from '@/components/ui/Tabs';
import Input from '@/components/ui/Input';
import MemberCard, { EyebrowLabel } from '@/lib/blocks';

type Props = {
  members: Member[];
};

export default function DirectoryPage({ members }: Props) {
  const [field, setField] = useState('전체');
  const [query, setQuery] = useState('');

  const tabItems = FIELDS.map((f) => ({ value: f, label: f }));

  const filtered = members.filter((m) => {
    const okField =
      field === '전체' || (m.tags ?? []).some((t) => t.includes(field)) || m.field.includes(field);
    const q = query.trim();
    const okQ =
      !q ||
      m.name.includes(q) ||
      m.field.includes(q) ||
      m.bio.includes(q) ||
      (m.handle ?? '').includes(q);
    return okField && okQ;
  });

  return (
    <div style={{ maxWidth: 1080, margin: '0 auto', padding: '56px 40px 80px' }}>
      <EyebrowLabel mb={10}>Directory · 회원 명부</EyebrowLabel>
      <h1
        style={{
          fontFamily: 'var(--font-serif-kr)',
          fontWeight: 800,
          fontSize: 44,
          margin: '0 0 8px',
          color: 'var(--ink-900)',
        }}
      >
        회원 명부
      </h1>
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.6,
          color: 'var(--text-secondary)',
          margin: '0 0 28px',
          maxWidth: 560,
        }}
      >
        석사 이상의 학위를 인증한 정회원. 전공 분야로 살펴보거나 이름으로 검색하세요.
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 24,
          flexWrap: 'wrap',
          marginBottom: 8,
        }}
      >
        <div style={{ flex: '1 1 380px', minWidth: 0 }}>
          <Tabs items={tabItems} value={field} onChange={setField} />
        </div>
        <div style={{ width: 260 }}>
          <Input
            placeholder="이름 · 전공 검색"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: 20,
          marginTop: 24,
        }}
      >
        {filtered.map((m) => (
          <MemberCard key={m.id} member={m} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div
          style={{
            textAlign: 'center',
            padding: '64px 0',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-serif-display)',
            fontSize: 20,
          }}
        >
          해당하는 회원이 없습니다.
        </div>
      )}
    </div>
  );
}
