import appImage from "../../assets/logo/central-gas-app.png";

export function AppMockup() {
  return (
    <div className="relative mx-auto max-w-[340px]">
      <div className="absolute inset-8 rounded-full bg-orange-300/30 blur-3xl" aria-hidden="true" />
      <div className="relative rounded-[2.5rem] border border-white/40 bg-white/20 p-3 shadow-glow backdrop-blur">
        <img
          src={appImage}
          alt="Visual do app Central Gás"
          className="w-full rounded-[2rem] object-cover"
          loading="eager"
        />
      </div>
    </div>
  );
}
