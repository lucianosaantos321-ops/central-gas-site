import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { AppPage } from "../pages/AppPage";
import { ComoFunciona } from "../pages/ComoFunciona";
import { Contato } from "../pages/Contato";
import { ExclusaoConta } from "../pages/ExclusaoConta";
import { FAQ } from "../pages/FAQ";
import { Home } from "../pages/Home";
import { Monitoramento } from "../pages/Monitoramento";
import { PoliticaPrivacidade } from "../pages/PoliticaPrivacidade";
import { Revendas } from "../pages/Revendas";
import { Suporte } from "../pages/Suporte";
import { TermosUso } from "../pages/TermosUso";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="app" element={<AppPage />} />
        <Route path="como-funciona" element={<ComoFunciona />} />
        <Route path="monitoramento" element={<Monitoramento />} />
        <Route path="revendas" element={<Revendas />} />
        <Route path="suporte" element={<Suporte />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="termos-de-uso" element={<TermosUso />} />
        <Route path="exclusao-de-conta" element={<ExclusaoConta />} />
        <Route path="contato" element={<Contato />} />
      </Route>
    </Routes>
  );
}
