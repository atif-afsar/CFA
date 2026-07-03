import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: pathname === "/" ? "auto" : "smooth" });
  }, [pathname, hash]);

  return (
    <div className="bg-surface-bright text-on-background selection:bg-secondary-fixed">
      <Navbar />
      <main className="pt-[57px] md:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
