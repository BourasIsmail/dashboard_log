import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/lib/auth-context";
import { ProtectedLayout } from "@/components/protected-layout";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tableau de bord des données",
  description: "Visualisation des données de la base MarchesPubliques",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <ProtectedLayout>
            <main className="bg-white min-h-screen px-3">{children}</main>
          </ProtectedLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
