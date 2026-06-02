import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navItems, siteConfig } from "../../data/siteConfig";
import { PlayStoreButton } from "../ui/PlayStoreButton";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-orange-100/70 bg-white/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="Página inicial Central Gás">
            <img src="/favicon.png" alt="" className="h-11 w-11 rounded-2xl shadow-sm" />
            <div>
              <div className="text-base font-black leading-tight text-slate-950">
                {siteConfig.name}
              </div>
              <div className="hidden text-xs font-semibold text-slate-500 sm:block">
                Entrega de gás pelo app
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Menu principal">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `rounded-2xl px-3 py-2 text-sm font-bold transition ${
                    isActive
                      ? "bg-orange-50 text-brand-700"
                      : "text-slate-600 hover:bg-orange-50 hover:text-brand-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <PlayStoreButton className="min-h-11 px-4 py-2" />
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="rounded-2xl border border-orange-100 bg-white p-3 text-slate-800 shadow-sm lg:hidden"
            aria-label="Abrir menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
