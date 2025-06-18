import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Lixeiras() {
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
            Lixeiras
          </h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=200&fit=crop"
            alt="Blue recycling bin"
            className="w-full h-48 object-cover"
          />

          <div className="p-4 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              lixeira seletiva azul
            </h2>

            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                <span className="font-semibold">Pode:</span> folhas em geral,
                cadernos usados, livros, jornais, revistas, papelão, papel
                kraft, embalagens de papel, envelopes e embalagens Tetra Pak.
              </p>

              <p>
                <span className="font-semibold">Não pode:</span> lenços,
                guardanapos, papel higiênico, fotografias, papel carbono ou
                metalizado, papel celofane ou plastificado, fita crepe, etiqueta
                adesiva e papéis sujos de óleo ou graxa.
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={() => navigate("/")}
          className="w-full py-4 bg-sage-400 hover:bg-sage-500 dark:bg-sage-500 dark:hover:bg-sage-600 text-white rounded-xl font-semibold text-lg"
        >
          Voltar
        </Button>
      </div>
    </div>
  );
}
