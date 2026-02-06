import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border text-text py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text/70">
          © {new Date().getFullYear()} Kashish Ramnani. All rights reserved.
        </p>
        <div className="flex gap-5 text-xl">
          <a
            href="mailto:kashish@example.com"
            className="transition"
            style={{ color: "var(--color-accent)" }}
            aria-label="Google"
          >
            <FaGoogle />
          </a>

          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="transition"
            style={{ color: "var(--color-accent)" }}
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="transition"
            style={{ color: "var(--color-accent)" }}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
