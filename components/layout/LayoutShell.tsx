'use client';

import { usePathname } from 'next/navigation';

interface LayoutShellProps {
  navbar: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}

export default function LayoutShell({ navbar, footer, children }: LayoutShellProps) {
  const pathname = usePathname();
  const isFocusedFlow = pathname.startsWith('/karir/lamar');

  return (
    <div className="min-h-screen flex flex-col">
      {!isFocusedFlow && navbar}
      {children}
      {!isFocusedFlow && footer}
    </div>
  );
}
