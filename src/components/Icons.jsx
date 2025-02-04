import React from "react";
import { Github, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import "../css/Icons.css"; // Import the CSS file
const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="mailto: kingkushwaha93@gmail.com" className="icon email" aria-label="Send email">
        <Mail />
      </a>
      <a href="https://www.instagram.com/creative_kushwahaji/" className="icon instagram" target="_blank" rel="noopener noreferrer" aria-label="Follow on Instagram">
        <Instagram />
      </a>
      <a href="https://www.linkedin.com/in/dilip-kushwaha-777602257/" className="icon linkedin" target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn">
        <Linkedin />
      </a>
      <a href="https://x.com/mahakalsons" className="icon x" target="_blank" rel="noopener noreferrer" aria-label="Follow on X">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <a href="https://youtu.be/PgpA2Jj3Okw" className="icon youtube" target="_blank" rel="noopener noreferrer" aria-label="Subscribe on YouTube">
        <Youtube />
      </a>
      <a href="https://github.com/creativekushwahaji01" className="icon github" target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
        <Github />
      </a>
    </div>
  );
};

export default SocialIcons;
