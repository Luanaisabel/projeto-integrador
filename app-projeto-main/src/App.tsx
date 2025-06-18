import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Splash from "./pages/Splash";
import Cadastro from "./pages/Cadastro";
import EsqueciSenha from "./pages/EsqueciSenha";
import Descartes from "./pages/Descartes";
import Empresas from "./pages/Empresas";
import Perfil from "./pages/Perfil";
import Lixeiras from "./pages/Lixeiras";
import Residuos from "./pages/Residuos";
import PontosColeta from "./pages/PontosColeta";
import AdicionarDescarte from "./pages/AdicionarDescarte";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/splash" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/esqueci-senha" element={<EsqueciSenha />} />
        <Route path="/" element={<Index />} />
        <Route path="/descartes" element={<Descartes />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/lixeiras" element={<Lixeiras />} />
        <Route path="/residuos" element={<Residuos />} />
        <Route path="/pontos-coleta" element={<PontosColeta />} />
        <Route path="/pontos" element={<PontosColeta />} />
        <Route path="/adicionar-descarte" element={<AdicionarDescarte />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
