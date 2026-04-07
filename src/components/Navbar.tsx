import { useState, useEffect } from "react";
import logo from "@/assets/helloq-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Features", "Community", "Safety"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <a href="#" className="flex-shrink-0">
          <img src={logo} alt="HelloQ" className="h-10 md:h-12" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className={`font-heading transition-colors text-base font-semibold ${scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-sky"}`}
            >
              {l}
            </a>
          ))}
          <a
            href="#download"
            className="btn-gradient px-6 py-2.5 rounded-full font-heading text-sm font-semibold"
          >
            Download App
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`block w-6 h-0.5 transition-transform ${scrolled ? "bg-foreground" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 transition-opacity ${scrolled ? "bg-foreground" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 transition-transform ${scrolled ? "bg-foreground" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-border/20 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-heading text-base font-semibold text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {l}
            </a>
          ))}
          <a href="#download" className="btn-gradient px-6 py-2.5 rounded-full font-heading text-sm font-semibold text-center">
            Download App
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
