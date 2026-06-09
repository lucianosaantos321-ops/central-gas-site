import { Flame, Info, RotateCcw } from "lucide-react";
import { Card } from "../components/ui/Card";
import { CTASection } from "../components/ui/CTASection";
import { RevealOnScroll } from "../components/ui/RevealOnScroll";
import { SectionTitle } from "../components/ui/SectionTitle";
import { SEO } from "../components/ui/SEO";

export function Monitoramento() {
  return (
    <>
      <SEO
        title="Monitoramento estimado do gás"
        path="/monitoramento"
        description="Entenda como funciona o monitoramento estimado do botijão no app Central Gás."
      />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <RevealOnScroll>
        <SectionTitle
          eyebrow="Diferencial"
          title="Monitoramento estimado do botijão"
          description="O Central Gás ajuda você a planejar melhor a próxima troca com base na média de consumo informada no app."
        />
        </RevealOnScroll>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <RevealOnScroll delay={0}>
          <Card>
            <Flame className="text-brand-600" size={30} />
            <h2 className="mt-4 text-xl font-black">Informe sua média</h2>
            <p className="mt-3 leading-7 text-slate-600">O usuário informa quantos dias o botijão costuma durar.</p>
          </Card>
          </RevealOnScroll>
          <RevealOnScroll delay={80}>
          <Card>
            <RotateCcw className="text-brand-600" size={30} />
            <h2 className="mt-4 text-xl font-black">Última troca</h2>
            <p className="mt-3 leading-7 text-slate-600">O app usa a data ou dias desde a última troca para calcular a estimativa.</p>
          </Card>
          </RevealOnScroll>
          <RevealOnScroll delay={160}>
          <Card>
            <Info className="text-brand-600" size={30} />
            <h2 className="mt-4 text-xl font-black">Reset após entrega</h2>
            <p className="mt-3 leading-7 text-slate-600">Quando um pedido é entregue, a estimativa pode voltar para 100%.</p>
          </Card>
          </RevealOnScroll>
        </div>
        <RevealOnScroll className="mt-8 rounded-[2rem] border border-orange-200 bg-orange-50 p-6 leading-8 text-slate-700">
          <strong className="text-slate-950">Aviso de transparência:</strong> o monitoramento
          é estimado e depende das informações preenchidas pelo usuário. O app não mede
          fisicamente o peso ou volume do botijão.
        </RevealOnScroll>
      </main>
      <CTASection title="Use a estimativa para pedir antes de acabar" />
    </>
  );
}
