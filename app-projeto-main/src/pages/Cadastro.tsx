import React, { useState } from "react";
import { ArrowLeft, Mail, User, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Cadastro() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="px-4 py-4">
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => navigate("/login")}
            className="p-2 text-gray-800 dark:text-gray-200"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200 text-center flex-1">
            Criar Conta
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 px-2">
          <div className="relative">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-4 px-4 bg-gray-100 dark:bg-slate-900 border-0 rounded-xl text-gray-800 dark:text-slate-200 placeholder:text-gray-600 dark:placeholder:text-slate-400 pr-12"
            />
            <Mail
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>

          <div className="relative">
            <Input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-4 px-4 bg-gray-100 dark:bg-slate-900 border-0 rounded-xl text-gray-800 dark:text-slate-200 placeholder:text-gray-600 dark:placeholder:text-slate-400 pr-12"
            />
            <User
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>

          <div className="relative">
            <Input
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              className="w-full py-4 px-4 bg-gray-100 dark:bg-slate-900 border-0 rounded-xl text-gray-800 dark:text-slate-200 placeholder:text-gray-600 dark:placeholder:text-slate-400 pr-12"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              📱
            </div>
          </div>

          <div className="relative">
            <Input
              type="text"
              placeholder="CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              className="w-full py-4 px-4 bg-gray-100 dark:bg-slate-900 border-0 rounded-xl text-gray-800 dark:text-slate-200 placeholder:text-gray-600 dark:placeholder:text-slate-400 pr-12"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              📱
            </div>
          </div>

          <div className="relative">
            <Input
              type="text"
              placeholder="Número"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full py-4 px-4 bg-gray-100 dark:bg-slate-900 border-0 rounded-xl text-gray-800 dark:text-slate-200 placeholder:text-gray-600 dark:placeholder:text-slate-400 pr-12"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              📱
            </div>
          </div>

          <div className="relative">
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-4 px-4 bg-gray-100 dark:bg-slate-900 border-0 rounded-xl text-gray-800 dark:text-slate-200 placeholder:text-gray-600 dark:placeholder:text-slate-400 pr-12"
            />
            <Eye
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>

          <div className="relative">
            <Input
              type="password"
              placeholder="Confirmar Senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full py-4 px-4 bg-gray-100 dark:bg-slate-900 border-0 rounded-xl text-gray-800 dark:text-slate-200 placeholder:text-gray-600 dark:placeholder:text-slate-400 pr-12"
            />
            <Eye
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full py-4 bg-sage-500 hover:bg-sage-600 dark:bg-sage-600 dark:hover:bg-sage-700 text-white rounded-xl font-semibold text-lg"
            >
              Cadastrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
