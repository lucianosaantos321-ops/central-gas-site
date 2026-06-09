import { screenshots } from "../../data/screenshots";

export function ScreenshotGallery() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {screenshots.map((shot) => (
        <figure
          key={shot.title}
          className="overflow-hidden rounded-[1.75rem] border border-orange-100 bg-white shadow-soft"
        >
          <div className="bg-slate-950 p-2">
            <img
              src={shot.src}
              alt={shot.alt}
              loading="lazy"
              className="aspect-[2/3] w-full rounded-[1.35rem] object-cover"
            />
          </div>
          <figcaption className="min-h-[112px] p-5">
            <h3 className="text-lg font-black text-slate-950">{shot.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{shot.description}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
