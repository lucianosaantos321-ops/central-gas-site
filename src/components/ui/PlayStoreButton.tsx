import { Download } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { LinkButton } from "./Button";

export function PlayStoreButton({ className = "" }: { className?: string }) {
  const isPlaceholder = siteConfig.playStoreUrl === "PLAY_STORE_URL";

  return (
    <LinkButton
      href={isPlaceholder ? "/app" : siteConfig.playStoreUrl}
      target={isPlaceholder ? undefined : "_blank"}
      rel={isPlaceholder ? undefined : "noreferrer"}
      className={className}
      aria-label="Baixar o app Central Gás para Android na Play Store"
    >
      <Download size={18} aria-hidden="true" />
      Baixar para Android
    </LinkButton>
  );
}
