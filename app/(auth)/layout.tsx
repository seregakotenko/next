'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot password', href: '/forgot-password' },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div>
      <h1>Auth Layout</h1>
      {navLinks.map(({ name, href }) => {
        const isActive = pathname === href || pathname.startsWith(href);
        return (
          <Link key={name} href={href} className={isActive ? 'text-fuchsia-600' : ''}>
            {name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
