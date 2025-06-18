import React from "react";
import { ArrowLeft, Mail, User, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Perfil() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="bg-sage-300 dark:bg-slate-800 px-4 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="p-2 text-gray-800 dark:text-gray-200"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Perfil
          </h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 space-y-6">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mb-4 flex items-center justify-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full"></div>
            </div>
            <div className="space-y-2 text-center">
              <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Nível: 3
              </div>
              <div className="text-lg font-semibold text-gray-800">
                Meus pontos: 25
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Valor dos pontos convertidos:
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Input
                value="luanaisabel@gmail.com"
                readOnly
                className="pr-10 bg-gray-50 dark:bg-slate-900 dark:text-slate-200"
              />
              <Mail
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>

            <div className="relative">
              <Input
                value="Luana Izabel"
                readOnly
                className="pr-10 bg-gray-50 dark:bg-slate-900 dark:text-slate-200"
              />
              <User
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>

            <div className="relative">
              <Input
                value="075.453.241-02"
                readOnly
                className="pr-10 bg-purple-100 dark:bg-slate-900 dark:text-slate-200"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                📱
              </div>
            </div>

            <div className="relative">
              <Input
                value="79091-540"
                readOnly
                className="pr-10 bg-gray-50 dark:bg-slate-900 dark:text-slate-200"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                📱
              </div>
            </div>

            <div className="relative">
              <Input
                value="12"
                readOnly
                className="pr-10 bg-gray-50 dark:bg-slate-900 dark:text-slate-200"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                📱
              </div>
            </div>

            <div className="relative">
              <Input
                type="password"
                value="*****"
                readOnly
                className="pr-10 bg-gray-50 dark:bg-slate-900 dark:text-slate-200"
              />
              <Eye
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>

            <div className="relative">
              <Input
                type="password"
                value="*****"
                readOnly
                className="pr-10 bg-gray-50 dark:bg-slate-900 dark:text-slate-200"
              />
              <Eye
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>
        </div>

        <Button
          onClick={() => navigate("/")}
          className="w-full py-4 bg-sage-400 hover:bg-sage-500 dark:bg-sage-500 dark:hover:bg-sage-600 text-white rounded-xl font-semibold text-lg"
        >
          Salvar
        </Button>
      </div>
    </div>
  );
}
