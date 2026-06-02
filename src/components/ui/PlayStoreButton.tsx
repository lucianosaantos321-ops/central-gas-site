import { Download } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { LinkButton } from "./Button";

export function PlayStoreButton({ className = "" }: { className?: string }) {
  const isPlaceholder = siteConfig.playStoreUrl === "PLAY_STORE_URL";
  return (
    <LinkButton
      href={isPlaceholder ? "/app" : siteConfig.playStoreUrl}
      className={className}
      aria-label="Baixar o app Central Gás na Play Store"
    >
      <Download size={18} aria-hidden="true" />
      Baixar app
    </LinkButton>
  );
}
