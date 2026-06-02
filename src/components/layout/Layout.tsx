import { Outlet } from "react-router-dom";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white">
      <Header />
      <Outlet />
      <Footer />
      <WhatsAppButton floating />
    </div>
  );
}
