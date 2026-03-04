import Link from "next/link";
import { Construction, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-white/5 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 text-white group">
              <Construction className="h-8 w-8 text-amber-500 transition-transform group-hover:rotate-12" />
              <span className="text-2xl font-bold tracking-tighter">Ganesh Crane Service</span>
            </Link>
            <p className="max-w-md leading-relaxed">
              Bhilai's trusted crane and hydra rental agency. Specializing in heavy lifting contracts for industrial and construction projects since 15+ years.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><FooterLink href="#about">About Us</FooterLink></li>
              <li><FooterLink href="#services">Our Services</FooterLink></li>
              <li><FooterLink href="#safety">Safety Policy</FooterLink></li>
              <li><FooterLink href="#contact">Contact Us</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Our Expertise</h4>
            <ul className="space-y-4">
              <li>Hydra Rental Bhilai</li>
              <li>Crane Service Chhattisgarh</li>
              <li>Machinery Installation</li>
              <li>Bridge Construction</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
          <p>© 2026 Ganesh Crane Service. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="h-10 w-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-amber-500 hover:text-black transition-all"
    >
      {icon}
    </Link>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="hover:text-amber-500 transition-colors inline-block">
      {children}
    </Link>
  );
}
