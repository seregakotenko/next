import '../globals.css';

type Props = Readonly<{
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}>;

export default function ComplexDashboardLayout({ children, revenue, users, notifications }: Props) {
  return (
    <>
      <div className="w-full">{children}</div>
      <div className="flex flex-wrap gap-3">
        <div className="grow">{users}</div>
        <div className="grow">{revenue}</div>
        <div className="w-full">{notifications}</div>
      </div>
    </>
  );
}
