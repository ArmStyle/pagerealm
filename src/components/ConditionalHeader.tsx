'use client';

import { usePathname } from 'next/navigation';
import FixedHeader from './FixedHeader';

const hideHeaderPages = [
  "/login",
  "/register",
  "/forgot-password",
  "/verify-otp",
  "/reading-full",
];

export default function ConditionalHeader() {
  const pathname = usePathname();
  const shouldHideHeader = hideHeaderPages.includes(pathname);
  
  return !shouldHideHeader ? <FixedHeader /> : null;
}
