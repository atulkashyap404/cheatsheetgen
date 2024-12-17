import Link from 'next/link';
import { Github, Twitter } from 'lucide-react';

export function FooterSocial() {
  return (
    <div className="flex space-x-4">
      <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">
        <Twitter className="h-5 w-5" />
      </Link>
      <Link href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
        <Github className="h-5 w-5" />
      </Link>
    </div>
  );
}