import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Empresas() {
  const navigate = useNavigate();

  const companies = [
    {
      id: 1,
      name: "care",
      points: "5 Pontos = 1 R$",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Ctext x='10' y='20' font-family='Arial' font-size='14' fill='%23666'%3Ecare%3C/text%3E%3C/svg%3E",
    },
    {
      id: 2,
      name: "natura",
      points: "1 Ponto = 1 R$",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Ctext x='10' y='20' font-family='Arial' font-size='14' fill='%23666'%3Enatura%3C/text%3E%3C/svg%3E",
    },
    {
      id: 3,
      name: "pantys",
      points: "15 Pontos = 5 R$",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30'%3E%3Ctext x='10' y='20' font-family='Arial' font-size='14' fill='%23ff4444'%3Epantys%3C/text%3E%3C/svg%3E",
    },
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
            Empresas parceiras
          </h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm dark:shadow-slate-900/20">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Compre com seus pontos!!!
          </h2>

          <div className="space-y-3">
            {companies.map((company) => (
              <div
                key={company.id}
                className="bg-white dark:bg-slate-700 border dark:border-slate-600 rounded-lg p-4 flex items-center justify-between shadow-sm dark:shadow-slate-900/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-8 bg-gray-100 rounded flex items-center justify-center">
                    <span
                      className={`text-sm font-semibold ${
                        company.name === "pantys"
                          ? "text-red-500"
                          : "text-gray-600"
                      }`}
                    >
                      {company.name}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {company.points}
                    </div>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="bg-sage-500 hover:bg-sage-600 dark:bg-sage-600 dark:hover:bg-sage-700 text-white px-6"
                >
                  Compre
                </Button>
              </div>
            ))}
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
