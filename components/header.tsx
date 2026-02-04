"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LogOut, User } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";

export function Header() {
  const { isAuthenticated, user, logout } = useAuth();
  const pathname = usePathname();

  // Don't show header on login page
  if (pathname === "/login") {
    return null;
  }

  return (
    <header className="border-b border-gray-300 bg-blue-600 px-3">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold text-white hover:text-blue-200 transition-colors"
          >
            <Home className="h-4 w-4" />
            Accueil
          </Link>
        </div>
        <div className="text-lg font-bold text-white">Tableau de bord GMAP</div>
        {isAuthenticated && (
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-sm text-blue-100">
              <User className="h-4 w-4" />
              {user?.username}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={logout}
              className="text-white hover:text-blue-200 hover:bg-blue-700"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Déconnexion
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
