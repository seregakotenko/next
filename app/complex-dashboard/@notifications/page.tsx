import Card from '@/app/components/card';
import Link from 'next/link';

export default function Notifications() {
  return (
    <Card>
      <h2>Default Notifications</h2>
      <Link href="/complex-dashboard/archived">Archived Notifications</Link>
    </Card>
  );
}
