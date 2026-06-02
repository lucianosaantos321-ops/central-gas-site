import { PlayStoreButton } from "./PlayStoreButton";
import { WhatsAppButton } from "./WhatsAppButton";

export function CTASection({
  title = "Pronto para pedir gás com mais praticidade?",
  description = "Baixe o app quando estiver disponível na Play Store ou fale com o suporte da Central Gás pelo WhatsApp.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] app-gradient p-8 text-white shadow-glow md:p-12">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/90">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <PlayStoreButton className="bg-white text-brand-700 shadow-none" />
            <WhatsAppButton className="border-white/30 bg-white/10 text-white shadow-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
