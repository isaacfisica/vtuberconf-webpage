import { MEMBERS } from '@/lib/data';
import DirectoryPage from '@/components/DirectoryPage';

export const metadata = {
  title: '회원 명부 · 버튜버학회',
};

export default function Page() {
  return <DirectoryPage members={MEMBERS} />;
}
