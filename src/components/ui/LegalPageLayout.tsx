import type { ReactNode } from "react";

export function LegalPageLayout({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-soft md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-600">
          Central Gás
        </p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
        <div className="prose prose-slate mt-8 max-w-none prose-headings:font-black prose-a:text-brand-700">
          {children}
        </div>
      </div>
    </main>
  );
}
