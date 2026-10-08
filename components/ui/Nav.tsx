"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { NAV_LINKS } from "@/data";
import { Magnetic } from "./Magnetic";

type NavProps = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

export function Nav({ theme, toggleTheme }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <motion.nav
      aria-label="Main navigation"
      initial={prefersReducedMotion ? false : { y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }
      }
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        padding: scrolled ? "14px 40px" : "22px 40px",
        background: scrolled ? "color-mix(in srgb, var(--bg) 78%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(1.2)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.2)" : "none",
        borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
        transition:
          "padding 0.4s ease, background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
      }}
    >
      {/* Brand */}
      <a
        href="#top"
        data-cursor="link"
        style={{ display: "flex", alignItems: "baseline", gap: 14 }}
      >
        <span
          className="font-serif"
          style={{
            fontStyle: "italic",
            fontSize: 22,
            color: "var(--accent)",
          }}
        >
          SA
        </span>
        <span
          className="nav__brand-name font-mono"
          style={{
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--ink-3)",
          }}
        >
          Sriashika&nbsp;Addala
        </span>
      </a>

      {/* Center links */}
      <div className="nav__center" style={{ display: "flex", gap: 36, justifySelf: "center" }}>
        {NAV_LINKS.map((n) => (
          <NavLink key={n.id} href={`#${n.id}`} label={n.label} />
        ))}
      </div>

      {/* Mobile menu and theme toggle */}
      <div style={{ justifySelf: "end", display: "flex", alignItems: "center", gap: 10 }}>
        <button
          ref={menuToggleRef}
          type="button"
          className="nav__menu-toggle font-mono"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
          onKeyDown={(event) => {
            if (event.key === "Escape" && menuOpen) {
              setMenuOpen(false);
              menuToggleRef.current?.focus();
            }
          }}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <Magnetic strength={0.25} as="div">
          <button
            type="button"
            onClick={toggleTheme}
            data-cursor="link"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            style={{
              display: "flex",
              alignItems: "center",
              minHeight: 44,
              minWidth: 44,
              gap: 10,
              border: "1px solid var(--rule)",
              padding: "6px 12px 6px 8px",
              borderRadius: 999,
              transition: "border-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--rule-strong)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--rule)")}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: theme === "dark" ? "var(--ink)" : "var(--accent)",
                transition: "background 0.4s ease",
              }}
            />
            <span
              className="font-mono"
              style={{
                fontSize: 10,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
              }}
            >
              {theme === "dark" ? "Dark" : "Light"}
            </span>
          </button>
        </Magnetic>
      </div>

      <div
        id="mobile-navigation"
        className="nav__mobile-panel"
        hidden={!menuOpen}
        role="group"
        aria-label="Mobile navigation"
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setMenuOpen(false);
            menuToggleRef.current?.focus();
          }
        }}
      >
        {NAV_LINKS.map((n) => (
          <NavLink
            key={n.id}
            href={`#${n.id}`}
            label={n.label}
            onClick={() => setMenuOpen(false)}
          />
        ))}
      </div>

      <style jsx>{`
        @media (min-width: 1025px) and (max-width: 1280px) {
          .nav__center {
            gap: 24px !important;
          }
        }
        @media (max-width: 1024px) {
          nav {
            grid-template-columns: 1fr auto !important;
            padding: ${scrolled ? "12px 20px" : "18px 20px"} !important;
          }
          .nav__center {
            display: none !important;
          }
          .nav__menu-toggle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 44px;
            min-width: 44px;
            padding: 8px 12px;
            border: 1px solid var(--rule);
            border-radius: 999px;
            color: var(--ink-2);
            font-size: 10px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
          }
          .nav__mobile-panel {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            display: flex;
            flex-direction: column;
            gap: 4px;
            padding: 12px 20px 18px;
            background: var(--bg);
            border-bottom: 1px solid var(--rule);
            box-shadow: 0 16px 30px color-mix(in srgb, var(--bg) 72%, transparent);
          }
          .nav__mobile-panel a {
            display: flex;
            align-items: center;
            min-height: 44px;
            padding: 12px 4px;
          }
          .nav__mobile-panel[hidden] {
            display: none !important;
          }
        }
        @media (max-width: 380px) {
          .nav__brand-name {
            display: none;
          }
        }
        @media (min-width: 1025px) {
          .nav__menu-toggle,
          .nav__mobile-panel {
            display: none !important;
          }
        }
      `}</style>
    </motion.nav>
  );
}

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={() => {
        onClick?.();
        document.getElementById(href.slice(1))?.focus({ preventScroll: true });
      }}
      data-cursor="link"
      className="font-mono"
      style={{
        fontSize: 11,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "var(--ink-3)",
        position: "relative",
        padding: "6px 0",
        transition: "color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-3)")}
    >
      {label}
    </a>
  );
}
