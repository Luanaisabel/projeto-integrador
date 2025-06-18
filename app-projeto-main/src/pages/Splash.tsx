import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "@/components/ui/logo";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-sage-200 flex items-center justify-center">
      <Logo size="lg" />
    </div>
  );
}
