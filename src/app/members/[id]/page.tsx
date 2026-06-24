import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MEMBERS } from '@/lib/data';
import ProfilePage from '@/components/ProfilePage';

export function generateStaticParams() {
  return MEMBERS.map((m) => ({ id: m.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const member = MEMBERS.find((m) => m.id === id);
  if (!member) return {};
  return {
    title: `${member.name} · 버튜버학회`,
    description: member.bio,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const member = MEMBERS.find((m) => m.id === id);
  if (!member) notFound();

  return <ProfilePage member={member} members={MEMBERS} />;
}
