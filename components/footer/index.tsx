import { FooterSection } from './footer-section';
import { FooterSocial } from './footer-social';
import { FooterCopyright } from './footer-copyright';
import { footerLinks } from '@/lib/footer-data';

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <FooterSection title="Product" links={footerLinks.product} />
          <FooterSection title="Resources" links={footerLinks.resources} />
          <FooterSection title="Company" links={footerLinks.company} />
          <FooterSection title="Legal" links={footerLinks.legal} />
        </div>
        
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <FooterCopyright />
          <FooterSocial />
        </div>
      </div>
    </footer>
  );
}