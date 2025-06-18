import React, { useState } from "react";
import { ArrowLeft, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdicionarDescarte() {
  const navigate = useNavigate();
  const [wasteType, setWasteType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/descartes");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="bg-sage-300 dark:bg-slate-800 px-4 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/descartes")}
            className="p-2 text-gray-800 dark:text-gray-200"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Adicionar descartes
          </h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1586022740982-c8ad47b5d7b8?w=400&h=200&fit=crop"
            alt="Red recycling bin with utensils"
            className="w-full h-48 object-cover"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Tipo resíduo"
            value={wasteType}
            onChange={(e) => setWasteType(e.target.value)}
            className="w-full py-4 px-4 bg-gray-100 dark:bg-slate-900 border-0 rounded-xl text-gray-800 dark:text-slate-200 placeholder:text-gray-600 dark:placeholder:text-slate-400"
          />

          <Input
            placeholder="Quantidade"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full py-4 px-4 bg-gray-100 border-0 rounded-xl text-gray-800 placeholder:text-gray-600"
          />

          <Input
            placeholder="Data de descarte"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full py-4 px-4 bg-gray-100 border-0 rounded-xl text-gray-800 placeholder:text-gray-600"
          />

          <div className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-slate-900 rounded-xl">
            <Camera size={20} className="text-gray-600 dark:text-slate-400" />
            <span className="text-gray-600 dark:text-slate-400">
              Anexar imagem
            </span>
          </div>

          <Button
            type="submit"
            className="w-full py-4 bg-sage-500 hover:bg-sage-600 dark:bg-sage-600 dark:hover:bg-sage-700 text-white rounded-xl font-semibold text-lg"
          >
            Voltar
          </Button>
        </form>
      </div>
    </div>
  );
}
