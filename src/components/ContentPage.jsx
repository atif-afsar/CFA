import { Link } from "react-router-dom";

export default function ContentPage({ title, subtitle, children }) {
  return (
    <article className="py-10 md:py-16 px-gutter bg-surface-bright min-h-[60vh]">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-secondary font-semibold text-sm mb-6 md:mb-8 hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Back to Home
        </Link>
        <header className="mb-8 md:mb-10 pb-6 border-b border-outline-variant/30">
          <h1 className="text-headline-responsive text-primary font-bold mb-2">{title}</h1>
          {subtitle && (
            <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">{subtitle}</p>
          )}
        </header>
        <div className="page-content">{children}</div>
      </div>
    </article>
  );
}
