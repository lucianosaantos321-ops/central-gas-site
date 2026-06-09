import { MessageCircle } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { LinkButton } from "./Button";

export function WhatsAppButton({
  floating = false,
  className = "",
  label = "Falar no WhatsApp",
}: {
  floating?: boolean;
  className?: string;
  label?: string;
}) {
  if (floating) {
    return (
      <div className="whatsapp-floating fixed bottom-5 right-5 z-40 flex items-center gap-3">
        <span className="whatsapp-tooltip hidden rounded-2xl bg-slate-950 px-4 py-2 text-sm font-black text-white shadow-soft md:inline-flex">
          Falar no WhatsApp
        </span>
        <a
          href={siteConfig.whatsappUrl}
          aria-label="Falar com a Central Gás pelo WhatsApp"
          className="whatsapp-pulse flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow transition hover:scale-105"
        >
          <MessageCircle size={26} aria-hidden="true" />
        </a>
      </div>
    );
  }

  return (
    <LinkButton href={siteConfig.whatsappUrl} variant="secondary" className={className}>
      <MessageCircle size={18} aria-hidden="true" />
      {label}
    </LinkButton>
  );
}
