import { Link } from "react-router-dom";
import { siteConfig } from "../../data/siteConfig";
import { PlayStoreButton } from "../ui/PlayStoreButton";
import { WhatsAppButton } from "../ui/WhatsAppButton";

const columns = [
  {
    title: "Central Gás",
    links: [
      ["Sobre", "/"],
      ["App", "/app"],
      ["Como funciona", "/como-funciona"],
      ["Monitoramento", "/monitoramento"],
    ],
  },
  {
    title: "Atendimento",
    links: [
      ["Suporte", "/suporte"],
      ["FAQ", "/faq"],
      ["Contato", "/contato"],
      ["Revendas", "/revendas"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Política de privacidade", "/politica-de-privacidade"],
      ["Termos de uso", "/termos-de-uso"],
      ["Exclusão de conta", "/exclusao-de-conta"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-12 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src="/favicon.png" alt="" className="h-11 w-11 rounded-2xl" />
            <div className="font-black">{siteConfig.name}</div>
          </div>
          <p className="mt-4 leading-7 text-slate-300">{siteConfig.slogan}</p>
          <p className="mt-4 text-sm text-slate-400">{siteConfig.region}</p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="font-black">{column.title}</h3>
            <div className="mt-4 grid gap-3">
              {column.links.map(([label, href]) => (
                <Link key={href} to={href} className="text-sm text-slate-300 hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h3 className="font-black">Baixe o app</h3>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Primeira versao disponivel para Android.
          </p>
          <div className="mt-4 grid gap-3">
            <PlayStoreButton className="bg-white text-brand-700 shadow-none" />
            <WhatsAppButton className="border-white/20 bg-white/10 text-white shadow-none" />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Central Gás. Atendimento e disponibilidade conforme operação local.
      </div>
    </footer>
  );
}
