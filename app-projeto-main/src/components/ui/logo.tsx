import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({
  className = "",
  showText = true,
  size = "md",
}: LogoProps) {
  const logoSizes = {
    sm: "h-6",
    md: "h-8",
    lg: "h-12",
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo para modo claro */}
      <img
        src="https://cdn.builder.io/api/v1/assets/4d5c2d126429431e9895e1c22db9887b/logo-no-formato-claro-0dc1a9?format=webp&width=800"
        alt="Comunidade Recicla"
        className={`${logoSizes[size]} object-contain dark:hidden transition-opacity duration-200`}
      />

      {/* Logo para modo escuro */}
      <img
        src="https://cdn.builder.io/api/v1/assets/4d5c2d126429431e9895e1c22db9887b/logo-no-formato-escuroo-90fef7?format=webp&width=800"
        alt="Comunidade Recicla"
        className={`${logoSizes[size]} object-contain hidden dark:block transition-opacity duration-200`}
      />
    </div>
  );
}
