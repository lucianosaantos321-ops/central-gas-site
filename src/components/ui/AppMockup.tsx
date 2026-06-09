import appImage from "../../assets/logo/central-gas-phone-monitoring.jpeg";

export function AppMockup() {
  return (
    <div className="floating-mockup relative mx-auto w-full max-w-[430px]">
      <img
        src={appImage}
        alt="Visual do app Central Gás em um celular"
        className="w-full rounded-[1.75rem] object-cover shadow-glow"
        loading="eager"
      />
    </div>
  );
}
