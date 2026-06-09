import { Building2 } from "lucide-react";
import { LinkButton } from "./Button";

export function PartnerCTA() {
  return (
    <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-soft">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-brand-600">
        <Building2 size={24} aria-hidden="true" />
      </div>
      <h3 className="text-2xl font-black text-slate-950">Tem uma revenda?</h3>
      <p className="mt-3 leading-7 text-slate-600">
        O Central Gás ajuda operações locais a receber pedidos digitais e organizar a experiência dos clientes.
      </p>
      <LinkButton to="/revendas" variant="secondary" className="mt-5" showArrow>
        Conhecer página de revendas
      </LinkButton>
    </div>
  );
}
