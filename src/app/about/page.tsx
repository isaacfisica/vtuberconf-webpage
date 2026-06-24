import { MEMBERS } from '@/lib/data';
import AboutPage from '@/components/AboutPage';

export const metadata = {
  title: '소개 · 버튜버학회',
};

export default function Page() {
  return <AboutPage members={MEMBERS} />;
}
