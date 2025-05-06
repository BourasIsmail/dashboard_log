import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Home } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Tableau de bord des données",
    description: "Visualisation des données de la base MarchesPubliques",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr">
        <body className={inter.className}>
        <header className=" border-b border-gray-300 bg-blue-600 px-3">
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
            </div>
        </header>
        <main className="bg-white min-h-screen px-3">{children}</main>
        </body>
        </html>
    )
}
