'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { FileText, Book, Star, HelpCircle } from 'lucide-react';

export function Navigation() {
  const pathname = usePathname();
  
  const links = [
    { href: '/', label: 'Generate', icon: FileText },
    { href: '/templates', label: 'Templates', icon: Book },
    { href: '/features', label: 'Features', icon: Star },
    { href: '/help', label: 'Help', icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">CheatGen</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === href ? "text-foreground" : "text-foreground/60"
              )}
            >
              <span className="flex items-center gap-1">
                <Icon className="h-4 w-4" />
                {label}
              </span>
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="outline">Sign Up</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}