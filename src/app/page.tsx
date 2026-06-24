import { MEMBERS } from '@/lib/data';
import HomePage from '@/components/HomePage';

export default function Page() {
  return <HomePage members={MEMBERS} />;
}
