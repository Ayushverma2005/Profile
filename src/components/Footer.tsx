import { Github, Linkedin, Mail, Globe, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Ayushverma2005', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ayush-verma-988256299', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:daringkhiladi23@gmail.com', label: 'Email' },
    { icon: Globe, href: 'https://ayushvermaai.netlify.app/', label: 'Website' },
  ];

  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Ayush Verma. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs flex items-center justify-center md:justify-start gap-1 mt-1">
              Built with <Heart className="w-3 h-3 text-destructive" /> using React & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
