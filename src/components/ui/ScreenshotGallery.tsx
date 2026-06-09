import { screenshots } from "../../data/screenshots";

export function ScreenshotGallery() {
  return (
    <div className="screenshot-strip flex snap-x gap-5 overflow-x-auto pb-3 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 xl:grid-cols-4">
      {screenshots.map((shot) => (
        <figure
          key={shot.title}
          className="screenshot-card min-w-[78%] snap-start overflow-hidden rounded-[1.75rem] border border-orange-100 bg-white shadow-soft sm:min-w-0"
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
