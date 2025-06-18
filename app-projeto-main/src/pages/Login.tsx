import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "@/components/ui/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepConnected, setKeepConnected] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple navigation to home for demo
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 flex flex-col">
      {/* Logo Section */}
      <div className="flex justify-center pt-16 pb-12">
        <Logo size="lg" />
      </div>

      {/* Login Form */}
      <div className="flex-1 px-6">
        <h1 className="text-2xl font-semibold text-center bg-gradient-to-r from-gray-800 to-gray-600 dark:from-slate-200 dark:to-slate-300 bg-clip-text text-transparent mb-8">
          LOGIN
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-4 px-4 bg-gray-100 dark:bg-slate-900 border-0 rounded-xl text-gray-800 dark:text-slate-200 placeholder:text-gray-600 dark:placeholder:text-slate-400"
          />

          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-4 px-4 bg-gray-100 dark:bg-slate-900 border-0 rounded-xl text-gray-800 dark:text-slate-200 placeholder:text-gray-600 dark:placeholder:text-slate-400"
          />

          <div className="flex items-center space-x-2 py-2">
            <Checkbox
              id="keep-connected"
              checked={keepConnected}
              onCheckedChange={(checked) =>
                setKeepConnected(checked as boolean)
              }
              className="data-[state=checked]:bg-sage-600 data-[state=checked]:border-sage-600"
            />
            <label
              htmlFor="keep-connected"
              className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
            >
              Manter-me conectado
            </label>
          </div>

          <div className="space-y-3 pt-4">
            <Button
              type="submit"
              className="w-full py-4 bg-sage-500 hover:bg-sage-600 dark:bg-sage-600 dark:hover:bg-sage-700 text-white rounded-xl font-semibold text-lg"
            >
              Entrar
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/cadastro")}
              className="w-full py-4 bg-gray-100/80 dark:bg-slate-900 hover:bg-gray-200 dark:hover:bg-slate-800 text-gray-800 dark:text-slate-200 border-0 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-[1.02]"
            >
              Cadastre-se
            </Button>
          </div>

          <div className="text-center pt-4">
            <button
              type="button"
              className="text-gray-600 dark:text-gray-400 text-sm hover:text-gray-800 dark:hover:text-gray-200"
              onClick={() => navigate("/esqueci-senha")}
            >
              Esqueceu sua senha?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
