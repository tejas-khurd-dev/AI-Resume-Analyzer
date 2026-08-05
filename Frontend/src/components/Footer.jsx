import React from "react";
import { footerLinks } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-4! sm:px-6! lg:px-8! py-8! flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto! border-t border-border">
      <p className="text-sm text-muted">© 2026 ResumeAI Inc. All rights reserved.</p>
      <div className="flex items-center gap-6">
        {footerLinks.map((link) => (
          <a key={link.name} href={link.href} className="text-sm text-muted hover:opacity-80">
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;