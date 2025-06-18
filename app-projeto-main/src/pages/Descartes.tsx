import React from "react";
import { ArrowLeft, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Descartes() {
  const navigate = useNavigate();

  const disposals = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];

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
            Meus descartes
          </h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm dark:shadow-slate-900/20">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Total de lixo descartados: 10
          </h2>

          <div className="grid grid-cols-3 gap-4">
            {disposals.map((disposal) => (
              <div
                key={disposal.id}
                className="aspect-square rounded-lg bg-gray-100 dark:bg-slate-600 shadow-sm dark:shadow-slate-900/20"
              ></div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Button
            onClick={() => navigate("/adicionar-descarte")}
            className="w-full py-4 bg-sage-500 hover:bg-sage-600 dark:bg-sage-600 dark:hover:bg-sage-700 text-white rounded-xl font-semibold text-lg"
          >
            Adicionar Descarte
          </Button>

          <Button
            onClick={() => navigate("/")}
            className="w-full py-4 bg-sage-400 hover:bg-sage-500 dark:bg-sage-500 dark:hover:bg-sage-600 text-white rounded-xl font-semibold text-lg"
          >
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
}
