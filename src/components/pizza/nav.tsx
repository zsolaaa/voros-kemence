"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const linksLeft = [
  { href: "/", label: "Főoldal" },
  { href: "/etlap", label: "Étlap" },
];
const linksRight = [
  { href: "/galeria", label: "Galéria" },
  { href: "/rolunk", label: "Rólunk" },
];
const allLinks = [...linksLeft, ...linksRight];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 56);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navClass = `vk-nav${scrolled ? " vk-nav--scrolled" : ""}`;
  const iconColor = scrolled ? "var(--vk-ink)" : "currentColor";

  return (
    <>
      <nav className={navClass} aria-label="Főnavigáció">
        <div className="vk-nav__inner">
          <div className="vk-nav__group">
            {linksLeft.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`vk-nav__link${pathname === href ? " vk-nav__link--active" : ""}`}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </div>

          <Link href="/" className="vk-nav__wordmark" onClick={() => setOpen(false)}>
            Pinocchio Pizza & Pasta
          </Link>

          <div className="vk-nav__group vk-nav__group--right">
            {linksRight.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`vk-nav__link${pathname === href ? " vk-nav__link--active" : ""}`}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
            <Link href="tel:+3612345678" className="vk-nav__cta">
              Foglalás
            </Link>
            <button
              className="vk-nav__toggle"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke={iconColor} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                {open ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`vk-mobile-menu${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigáció"
      >
        <button
          className="vk-mobile-menu__close"
          onClick={() => setOpen(false)}
          aria-label="Bezárás"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {allLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="vk-mobile-menu__link"
            onClick={() => setOpen(false)}
            aria-current={pathname === href ? "page" : undefined}
          >
            {label}
          </Link>
        ))}

        <Link href="tel:+3612345678" className="vk-btn vk-btn--primary" onClick={() => setOpen(false)}>
          Foglalás
        </Link>
      </div>
    </>
  );
}
