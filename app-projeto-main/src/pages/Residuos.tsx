import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Residuos() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-green-300 to-green-400">
      <div className="px-4 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="p-2 text-gray-800 dark:text-white"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            Resíduos
          </h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=200&fit=crop"
            alt="Organic waste"
            className="w-full h-48 object-cover"
          />

          <div className="p-4 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              resíduos orgânicos
            </h2>

            <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              <p>
                O lixo orgânico é todo resíduo originado de um organismo vivo e
                que pode ser atacado por organismos decompositores. Isso
                significa que restos de alimento de origem animal ou vegetal
                fazem parte desse grupo.
              </p>

              <p>
                Você pode usar os restos de comida para fazer um adubo orgânico
                em casa. Seja pela compostagem, em que minhocas e outros
                micro-organismos ajudam a transformar os restos vegetais em
                húmus, ou através de técnicas mais simples, é possível
                aproveitar os restos para adubar o jardim.
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
