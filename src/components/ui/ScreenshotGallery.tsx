import { screenshots } from "../../data/screenshots";

export function ScreenshotGallery() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {screenshots.map((shot) => (
        <figure key={shot.title} className="rounded-3xl border border-orange-100 bg-white p-4 shadow-soft">
          <img
            src={shot.src}
            alt={shot.alt}
            loading="lazy"
            className="mx-auto aspect-[1/2] max-h-[520px] w-full rounded-[2rem] object-contain"
          />
          <figcaption className="mt-4">
            <h3 className="font-black text-slate-950">{shot.title}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">{shot.description}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
