import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MapPin, Home, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

export function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: MapPin, path: "/pontos", label: "Coleta" },
    { icon: Home, path: "/", label: "Home" },
    { icon: ShoppingCart, path: "/empresas", label: "Empresas" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-gray-200 dark:border-slate-700 px-4 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map(({ icon: Icon, path, label }) => {
          const isActive = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={cn(
                "flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200 hover:bg-sage-50 dark:hover:bg-slate-800 hover:text-sage-600 dark:hover:text-sage-400 hover:scale-105",
                isActive
                  ? "text-sage-600 bg-sage-100 dark:bg-slate-800 dark:text-sage-400"
                  : "text-gray-500 dark:text-slate-400",
              )}
            >
              <Icon size={24} />
              <span className="text-xs">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
