'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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

  const [input, setInput] = useState<string>('');

  return (
    <div>
      <h1>Auth Layout</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      {navLinks.map(({ name, href }) => {
        const isActive = pathname === href || pathname.startsWith(href);
        return (
          <Link key={name} href={href} className={isActive ? 'active' : ''}>
            {name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
