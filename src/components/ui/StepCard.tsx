import type { LucideIcon } from "lucide-react";

export function StepCard({
  index,
  title,
  description,
  icon: Icon,
}: {
  index: number;
  title: string;
  description: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="relative rounded-3xl border border-orange-100 bg-white p-6 shadow-soft">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl app-gradient text-sm font-black text-white">
          {index}
        </div>
        {Icon ? (
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-brand-600">
            <Icon size={22} aria-hidden="true" />
          </div>
        ) : null}
      </div>
      <h3 className="text-xl font-black text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </div>
  );
}
