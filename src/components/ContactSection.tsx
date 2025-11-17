import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Copy } from 'lucide-react';
import { FaTelegramPlane, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  const email = 'edilsonnavasis@gmail.com';
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {}
  };

  return (
    <section id="contact" className="section bg-secondary/30">
      <div className="container">
        <h2 className="text-3xl font-semibold text-white text-center mb-6">Contact</h2>
        <div className="max-w-xl mx-auto bg-secondary/40 border border-border p-6 rounded-lg text-center animate-fade-up">
          <p className="text-gray-300 mb-2">{email}</p>
          <p className="text-gray-400 mb-6">Brazil · Available for Remote Work</p>
          <p className="text-gray-500 mb-4 text-sm">For all inquiries, please reach out by email first.</p>
          <div className="flex justify-center gap-3">
            <a href={`mailto:${email}`}>
              <Button className="bg-gradient-purple text-white hover:opacity-90" aria-label="Email me">
                <Mail className="mr-2 h-4 w-4" /> Email Me
              </Button>
            </a>
            <Button variant="outline" onClick={copyEmail} aria-label="Copy email">
              <Copy className="mr-2 h-4 w-4" /> Copy
            </Button>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <a href="https://t.me/your_username" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <Button variant="ghost" size="icon" className="hover:bg-secondary/60">
                <FaTelegramPlane className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://wa.me/819036033119" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <Button variant="ghost" size="icon" className="hover:bg-secondary/60">
                <FaWhatsapp className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://github.com/your_username" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Button variant="ghost" size="icon" className="hover:bg-secondary/60">
                <FaGithub className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Button variant="ghost" size="icon" className="hover:bg-secondary/60">
                <FaLinkedin className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

