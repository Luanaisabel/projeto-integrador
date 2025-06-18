import React from "react";
import { ArrowLeft, MapPin, Clock, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function PontosColeta() {
  const navigate = useNavigate();

  const pontosColeta = [
    {
      id: 1,
      nome: "Ecoponto Panamá",
      endereco:
        "Rua Sagarana com Avenida José Barbosa Hugo Rodrigues, Bairro Panamá",
      horario: "Segunda a Sexta: 7h às 17h, Sábado: 7h às 12h",
      telefone: "(67) 3314-3700",
      tipos: ["Papel", "Plástico", "Metal", "Vidro", "Orgânicos"],
      distancia: "1.5 km",
    },
    {
      id: 2,
      nome: "Ecoponto Noroeste",
      endereco: "Rua Piraputanga, esquina com Rua Guarulhos, Jardim Noroeste",
      horario: "Segunda a Sexta: 7h às 17h, Sábado: 7h às 12h",
      telefone: "(67) 3314-3701",
      tipos: ["Papel", "Plástico", "Metal", "Vidro", "Eletrônicos"],
      distancia: "2.3 km",
    },
    {
      id: 3,
      nome: "Ecoponto Nova Lima",
      endereco: "Rua Pacajus, 194, Bairro Nova Lima",
      horario: "Segunda a Sexta: 7h às 17h, Sábado: 7h às 12h",
      telefone: "(67) 3314-3702",
      tipos: ["Papel", "Plástico", "Metal", "Vidro", "Têxtil"],
      distancia: "3.1 km",
    },
    {
      id: 4,
      nome: "Ecoponto União",
      endereco:
        "Avenida Roseira, esquina com Rua Carmem Bazzano Pedra, Bairro União",
      horario: "Segunda a Sexta: 7h às 17h, Sábado: 7h às 12h",
      telefone: "(67) 3314-3703",
      tipos: ["Papel", "Plástico", "Metal", "Vidro", "Óleo de Cozinha"],
      distancia: "1.8 km",
    },
    {
      id: 5,
      nome: "Ecoponto Moreninhas",
      endereco:
        "Rua Copaíba, entre as ruas Antônio David Macedo e Amado Nogueira Moraes, Bairro Moreninhas",
      horario: "Segunda a Sexta: 7h às 17h, Sábado: 7h às 12h",
      telefone: "(67) 3314-3704",
      tipos: ["Papel", "Plástico", "Metal", "Vidro", "Pilhas e Baterias"],
      distancia: "2.7 km",
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
            Pontos de Coleta
          </h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm dark:shadow-slate-900/20">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Pontos de coleta próximos a você
          </h2>

          {/* Mapa do Google Maps */}
          <div className="w-full h-64 rounded-lg overflow-hidden mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57905.44076248129!2d-54.646404!3d-20.462521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e8202b2db531%3A0x2ba52ac48c9f7c5a!2sCampo%20Grande%2C%20MS!5e0!3m2!1spt!2sbr!4v1640000000000!5m2!1spt!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>

          {/* Lista de pontos de coleta */}
          <div className="space-y-4">
            {pontosColeta.map((ponto) => (
              <div
                key={ponto.id}
                className="border dark:border-slate-600 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                      {ponto.nome}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <MapPin size={14} className="mr-1" />
                      {ponto.endereco}
                    </div>
                  </div>
                  <div className="bg-sage-100 dark:bg-sage-900 text-sage-700 dark:text-sage-300 px-2 py-1 rounded-full text-xs font-medium">
                    {ponto.distancia}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2" />
                    {ponto.horario}
                  </div>
                  <div className="flex items-center">
                    <Phone size={14} className="mr-2" />
                    {ponto.telefone}
                  </div>
                </div>

                <div className="mt-3">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Aceita:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {ponto.tipos.map((tipo, index) => (
                      <span
                        key={index}
                        className="bg-sage-200 dark:bg-sage-800 text-sage-800 dark:text-sage-200 px-2 py-1 rounded-md text-xs"
                      >
                        {tipo}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t dark:border-slate-600">
                  <button className="text-sage-600 dark:text-sage-400 hover:text-sage-700 dark:hover:text-sage-300 text-sm font-medium">
                    Ver no mapa →
                  </button>
                </div>
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
