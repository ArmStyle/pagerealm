'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const hideHeaderPages = [
  "/login",
  "/register",
  "/forgot-password",
  "/verify-otp",
  "/reading-full",
];

interface ConditionalMainProps {
  children: ReactNode;
}

export default function ConditionalMain({ children }: ConditionalMainProps) {
  const pathname = usePathname();
  const shouldHideHeader = hideHeaderPages.includes(pathname);
  
  return (
    <main className={shouldHideHeader ? "pt-0" : "pt-16"}>
      {children}
    </main>
  );
}
