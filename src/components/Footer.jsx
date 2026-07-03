import { Link } from "react-router-dom";
import AnimateIn from "./AnimateIn";
import { FOOTER_LINKS } from "../constants/site";

export default function Footer() {
  return (
    <footer className="w-full py-10 md:py-section-gap px-gutter flex flex-col items-center gap-unit bg-primary pb-[calc(1.5rem+env(safe-area-inset-bottom))] md:pb-section-gap">
      <div className="max-w-container-max mx-auto w-full flex flex-col items-center">
        <AnimateIn animation="fade-in">
          <div className="mb-8 md:mb-10 flex flex-col items-center gap-3 md:gap-4">
            <Link to="/">
              <img alt="CFA Footer Logo" className="h-16 w-16 md:h-20 md:w-20 object-contain" src="/images/logo-footer.png" loading="lazy" />
            </Link>
            <span className="font-headline-md text-lg md:text-headline-md font-bold text-secondary-fixed text-center px-4">
              Coaching Federation of Aligarh
            </span>
          </div>
        </AnimateIn>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-x-4 gap-y-3 sm:gap-8 mb-8 md:mb-12 w-full max-w-sm sm:max-w-none">
          {FOOTER_LINKS.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className="text-on-primary/70 hover:text-secondary-container transition-colors font-label-sm text-xs md:text-label-sm tracking-wide text-center py-1"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="w-full max-w-2xl border-t border-on-primary/10 pt-6 md:pt-8 flex flex-col items-center">
          <p className="font-label-sm text-xs md:text-label-sm text-on-primary/50 text-center mb-4 px-4">
              © 2026 Coaching Federation of Aligarh (CFA). All Rights Reserved.
          </p>
          <div className="flex gap-5">
            <a className="text-on-primary/70 hover:text-secondary-fixed transition-transform active:scale-95 p-2" href="mailto:info@cfaaligarh.org" aria-label="Email">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
