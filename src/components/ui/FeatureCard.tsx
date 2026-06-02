import type { LucideIcon } from "lucide-react";
import { Card } from "./Card";

export function FeatureCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <Card className="group h-full transition hover:-translate-y-1 hover:border-orange-200">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
        <Icon size={24} aria-hidden="true" />
      </div>
      <h3 className="text-xl font-black text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </Card>
  );
}
