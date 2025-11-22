import { FooterBottom } from "./footer-bottom";
import { FooterBrand } from "./footer-brand";
import { FooterLinks } from "./footer-links";
import { FooterSocial } from "./footer-social";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-[var(--border-color)] border-t bg-[var(--bg-primary)] pt-20 pb-10">
      {/* Background Text */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full select-none overflow-hidden text-center">
        <h1 className="translate-y-1/3 font-bold font-heading text-[15vw] text-[var(--text-secondary)]/5 leading-none">
          NYATINTE
        </h1>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Main Footer Content */}
        <div className="mb-20 grid gap-12 md:grid-cols-4">
          <FooterBrand />
          <FooterLinks />
          <FooterSocial />
        </div>

        {/* Footer Bottom */}
        <FooterBottom />
      </div>
    </footer>
  );
}
