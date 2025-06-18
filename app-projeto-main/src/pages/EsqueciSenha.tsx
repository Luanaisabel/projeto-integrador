import React, { useState } from "react";
import { ArrowLeft, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Logo } from "@/components/ui/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function EsqueciSenha() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular envio de email (2 segundos)
    setTimeout(() => {
      setIsLoading(false);
      // Mostrar mensagem de sucesso ou navegar de volta
      alert(
        "Se o email estiver cadastrado, você receberá as instruções para redefinir sua senha.",
      );
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 flex flex-col">
      {/* Botão Voltar */}
      <div className="p-4">
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 p-2 text-gray-600 dark:text-gray-300 hover:text-sage-600 dark:hover:text-sage-400 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="text-sm">Voltar</span>
        </button>
      </div>

      {/* Logo Section */}
      <div className="flex justify-center pt-8 pb-12">
        <Logo size="lg" />
      </div>

      {/* Form Section */}
      <div className="flex-1 px-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-semibold text-center bg-gradient-to-r from-gray-800 to-gray-600 dark:from-slate-200 dark:to-slate-300 bg-clip-text text-transparent mb-4">
            Esqueceu sua senha?
          </h1>

          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 text-sm leading-relaxed">
            Digite seu email abaixo e enviaremos instruções para redefinir sua
            senha.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full py-4 px-4 pl-12 bg-gray-100 dark:bg-slate-900 border-0 rounded-xl text-gray-800 dark:text-slate-200 placeholder:text-gray-600 dark:placeholder:text-slate-400"
              />
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500"
                size={20}
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-sage-500 hover:bg-sage-600 dark:bg-sage-600 dark:hover:bg-sage-700 text-white rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isLoading ? "Enviando..." : "Enviar Nova Senha"}
            </Button>
          </form>

          <div className="text-center pt-6">
            <button
              onClick={() => navigate("/login")}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-sage-600 dark:hover:text-sage-400 transition-colors"
            >
              Lembrou sua senha?{" "}
              <span className="font-semibold">Faça login</span>
            </button>
          </div>
        </div>
      </div>

      {/* Spacer for bottom */}
      <div className="h-16"></div>
    </div>
  );
}
