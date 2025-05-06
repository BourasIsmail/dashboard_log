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
        <header className="border-b">
            <div className="container mx-auto py-4 px-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2 text-sm font-medium">
                        <Home className="h-4 w-4" />
                        Accueil
                    </Link>
                </div>
                <div className="text-lg font-bold">Tableau de bord des données</div>
            </div>
        </header>
        <main className="px-3">{children}</main>
        </body>
        </html>
    )
}
