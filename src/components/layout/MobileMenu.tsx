import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems, siteConfig } from "../../data/siteConfig";
import { PlayStoreButton } from "../ui/PlayStoreButton";
import { WhatsAppButton } from "../ui/WhatsAppButton";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm lg:hidden">
      <div className="ml-auto flex h-full w-full max-w-sm flex-col bg-white p-5 shadow-soft">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={onClose} className="flex items-center gap-3">
            <img src="/favicon.png" alt="" className="h-10 w-10 rounded-xl" />
            <span className="font-black text-slate-950">{siteConfig.name}</span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl p-3 text-slate-700 hover:bg-orange-50"
            aria-label="Fechar menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mt-8 grid gap-2" aria-label="Menu mobile">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={onClose}
              className="rounded-2xl px-4 py-3 font-bold text-slate-700 hover:bg-orange-50 hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto grid gap-3">
          <PlayStoreButton />
          <WhatsAppButton />
        </div>
      </div>
    </div>
  );
}
