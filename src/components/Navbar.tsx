
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section for link highlight
  useEffect(() => {
    const sectionIds = NavLinks.map((l) => l.href.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      { root: null, threshold: [0.35, 0.6] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/70 backdrop-blur-xl border-b border-border shadow-sm py-3'
          : 'py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="bg-gradient-purple w-8 h-8 rounded-full flex items-center justify-center">
            <span className="font-bold text-white text-xs">EN</span>
          </div>
          <span className="text-lg font-semibold">Edilson Novais</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NavLinks.map((link) => {
            const isActive = active === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative text-sm transition-colors ${
                  isActive
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 rounded bg-gradient-purple transition-all ${
                    isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}
                />
              </a>
            );
          })}
          <a href={`assets/kawasaki.pdf`} download="Edilson_Novais_Resume.pdf">
            <Button className="bg-gradient-purple hover:opacity-90">Resume</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border p-4 md:hidden animate-fade-in">
            <div className="flex flex-col gap-4">
              {NavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href={`assets/kawasaki.pdf`} download="Edilson_Novais_Resume.pdf">
                <Button className="bg-gradient-purple hover:opacity-90">Resume</Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
