import React, { useState } from "react";
import {
  Menu,
  Search,
  X,
  User,
  Recycle,
  MapPin,
  ShoppingCart,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Logo } from "./logo";
import { DarkModeToggle } from "./dark-mode-toggle";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { icon: User, label: "Perfil", path: "/perfil" },
    { icon: Recycle, label: "Descartes", path: "/descartes" },
    { icon: MapPin, label: "Pontos De Coleta", path: "/pontos-coleta" },
    { icon: ShoppingCart, label: "Empresas Parceiras", path: "/empresas" },
    { icon: LogOut, label: "Sair", path: "/login" },
  ];

  const handleMenuClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="flex items-center p-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-200 dark:border-slate-700">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="p-2 text-sage-600 hover:bg-sage-50 rounded-lg transition-all duration-200 dark:text-sage-400 dark:hover:bg-slate-800 hover:scale-105"
        >
          <Menu size={24} />
        </button>
        <div className="flex-1 flex justify-center">
          <Logo size="md" />
        </div>
        <DarkModeToggle />
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="fixed left-0 top-0 h-full w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-2xl dark:shadow-slate-900/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center p-4 border-b dark:border-slate-700">
              <div className="w-10"></div>
              <div className="flex-1 flex justify-center">
                <Logo size="md" />
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-500 dark:text-gray-400"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="py-4">
              {menuItems.map(({ icon: Icon, label, path }) => (
                <button
                  key={path}
                  onClick={() => handleMenuClick(path)}
                  className="flex items-center gap-3 w-full px-6 py-3 text-left hover:bg-sage-50 dark:hover:bg-slate-800 hover:text-sage-700 dark:hover:text-sage-300 transition-all duration-200 group hover:translate-x-1"
                >
                  <Icon
                    size={20}
                    className="text-gray-600 dark:text-slate-400 group-hover:text-sage-600 dark:group-hover:text-sage-400 transition-colors"
                  />
                  <span className="text-gray-800 dark:text-slate-200">
                    {label}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
