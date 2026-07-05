import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../constants/site";

function NavLink({ to, label, active, onClick, mobile }) {
  if (mobile) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`block w-full py-3.5 px-4 rounded-lg text-base font-semibold transition-colors ${
          active
            ? "bg-secondary-container/30 text-primary border-l-4 border-secondary"
            : "text-on-surface-variant hover:bg-surface-container active:bg-surface-container"
        }`}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`whitespace-nowrap text-xs lg:text-sm ${
        active
          ? "text-secondary font-bold border-b-2 border-secondary tracking-wide"
          : "text-on-surface-variant hover:text-primary transition-colors tracking-wide"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!isHome) return;

    const sectionIds = NAV_LINKS.map((l) => l.hash);
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, [isHome]);

  const sectionTo = (hash) => `/#${hash}`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-surface-bright/95 backdrop-blur-md border-b border-outline-variant/30 safe-top">
      <div className="max-w-container-max mx-auto w-full flex justify-between items-center px-gutter py-3 md:py-4">
        <Link to="/" className="flex items-center gap-2.5 min-w-0" onClick={closeMenu}>
          <img alt="CFA Logo" className="h-9 w-9 md:h-10 md:w-10 object-contain shrink-0" src="/images/logo-nav.png" />
          <span className="font-headline-md text-lg md:text-headline-md font-bold text-primary truncate">CFA</span>
        </Link>

        <div className="hidden md:flex flex-1 items-center justify-end gap-3 lg:gap-5 min-w-0 ml-6">
          <div className="flex items-center gap-3 lg:gap-5 xl:gap-6 min-w-0">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.hash}
                to={sectionTo(link.hash)}
                label={link.label}
                active={isHome && activeSection === link.hash}
              />
            ))}
          </div>
          <Link className="nav-cta-btn btn-primary shrink-0" to={sectionTo("membership-form")}>
            Join CFA
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg text-primary active:bg-surface-container transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="material-symbols-outlined text-[26px]">{menuOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {menuOpen && (
        <>
          <button
            type="button"
            className="mobile-menu-backdrop md:hidden fixed inset-0 top-[57px] bg-primary/20 backdrop-blur-[2px] z-40"
            onClick={closeMenu}
            aria-label="Close menu"
          />
          <div className="mobile-menu-panel md:hidden absolute top-full left-0 w-full z-50 bg-surface-bright border-b border-outline-variant/30 shadow-xl max-h-[calc(100dvh-57px)] overflow-y-auto">
            <div className="px-gutter py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.hash}
                  to={sectionTo(link.hash)}
                  label={link.label}
                  mobile
                  active={isHome && activeSection === link.hash}
                  onClick={closeMenu}
                />
              ))}
              <Link
                className="mt-3 w-full py-3.5 btn-primary btn-touch rounded-lg font-bold text-sm uppercase tracking-wider text-center"
                to={sectionTo("membership-form")}
                onClick={closeMenu}
              >
                Join CFA
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
