import { getServerAuthSession } from '@/server/auth';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <p>Protected Dashboard</p>
    </div>
  );
}
