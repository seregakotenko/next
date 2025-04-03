import Card from '@/app/components/card';
import Link from 'next/link';

export default function ArchivedNotifications() {
  return (
    <Card>
      <h2>Archived Notifications</h2>
      <Link href="/complex-dashboard">Default Notifications</Link>
    </Card>
  );
}
