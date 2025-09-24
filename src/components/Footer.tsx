import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Mail, Linkedin, Github, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onSectionChange: (section: string) => void;
}

export function Footer({ onSectionChange }: FooterProps) {
  const quickLinks = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Research', id: 'research' },
    { label: 'CV', id: 'cv' },
    { label: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:Nour.osama2023@feps.edu.eg',
      label: 'Email'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/noor-osama2005/',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/Noor-Osama-2005',
      label: 'GitHub'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border/50 relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, margin: "-100px" }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl mb-4">Noor Osama</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Economics student and data scientist passionate about AI, research, 
              and the intersection of technology with human understanding.
            </p>
            <p className="text-muted-foreground text-sm">
              Currently pursuing B.A. in Economics at Cairo University while 
              building expertise in machine learning and data science.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onSectionChange(link.id)}
                    className="text-muted-foreground text-sm hover:text-indigo-600 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center gap-2 text-muted-foreground text-sm hover:text-indigo-600 transition-colors w-fit"
                >
                  <social.icon size={16} />
                  {social.label}
                </a>
              ))}
            </div>
            
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="mt-4 w-fit"
            >
              <ArrowUp size={16} className="mr-2" />
              Back to Top
            </Button>
          </motion.div>
        </div>

        <Separator className="mb-6" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, margin: "-100px" }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2025 Noor Osama Abd-elsabour. Built with</span>
            <Heart size={14} className="text-red-500 fill-current" />
            <span>and React.</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <span>Last updated: January 2025</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}