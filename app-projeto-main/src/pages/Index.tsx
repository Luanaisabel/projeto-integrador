import React from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/ui/header";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import { Input } from "@/components/ui/input";

export default function Index() {
  const navigate = useNavigate();

  const trashBins = [{ id: 1 }, { id: 2 }, { id: 3 }];

  const wasteTypes = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 pb-20">
      <Header />

      <main className="px-4 py-6 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Input
            placeholder="Pesquise"
            className="pl-4 pr-12 py-3 rounded-xl bg-gray-100 dark:bg-slate-900 border-0 text-gray-600 dark:text-gray-300 placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
          <Search
            size={20}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-sage-600 dark:text-sage-400"
          />
        </div>

        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden h-48">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=200&fit=crop"
            alt="Recycling hero image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Trash Bins Section */}
        <section>
          <h2 className="text-lg font-semibold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-slate-200 dark:to-slate-300 bg-clip-text text-transparent mb-4 text-left">
            lixeiras
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {trashBins.map((bin) => (
              <button
                key={bin.id}
                onClick={() => navigate("/lixeiras")}
                className="aspect-square rounded-xl bg-gray-100 dark:bg-slate-700 hover:bg-sage-100 dark:hover:bg-slate-600 hover:border-2 hover:border-sage-300 dark:hover:border-sage-500 transition-all duration-200 shadow-sm dark:shadow-slate-900/20"
              ></button>
            ))}
          </div>
        </section>

        {/* Waste Types Section */}
        <section>
          <h2 className="text-lg font-semibold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-slate-200 dark:to-slate-300 bg-clip-text text-transparent mb-4 text-left">
            tipos de resíduos
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {wasteTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => navigate("/residuos")}
                className="aspect-square rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-sage-100 dark:hover:bg-sage-900 hover:border-2 hover:border-sage-300 dark:hover:border-sage-600 transition-all duration-200"
              ></button>
            ))}
          </div>
        </section>
      </main>

      <BottomNavigation />
    </div>
  );
}
