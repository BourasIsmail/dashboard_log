import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Database, FileSpreadsheet, BarChart3, FileText, Table } from "lucide-react"

export default function Home() {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-8 text-gray-900">Tableau de bord des données</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-gray-300 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-gray-900">
                            <FileSpreadsheet className="h-5 w-5 text-blue-600" />
                            Actions Par Rubrique
                        </CardTitle>
                        <CardDescription className="text-gray-500">Données des actions par rubrique depuis 2020</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-sm text-gray-500">
                            Affiche les actions par rubrique avec leurs montants et dates d&apos;effet.
                        </p>
                        <Link href="/actions-par-rubrique">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Voir les données</Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card className="border-gray-300 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-gray-900">
                            <Database className="h-5 w-5 text-blue-600" />
                            Engagements
                        </CardTitle>
                        <CardDescription className="text-gray-500">Tous les engagements depuis 2020</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-sm text-gray-500">Liste complète des engagements avec leurs détails financiers.</p>
                        <Link href="/engagements">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Voir les données</Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card className="border-gray-300 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-gray-900">
                            <BarChart3 className="h-5 w-5 text-blue-600" />
                            Marchés en Exécution
                        </CardTitle>
                        <CardDescription className="text-gray-500">Marchés en exécution pour 2020-2025</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-sm text-gray-500">Détails des marchés en cours d&apos;exécution avec leurs montants.</p>
                        <Link href="/marches-execution">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Voir les données</Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card className="border-gray-300 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-gray-900">
                            <FileText className="h-5 w-5 text-blue-600" />
                            Reste à Mandater
                        </CardTitle>
                        <CardDescription className="text-gray-500">Données du reste à mandater par année</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-sm text-gray-500">Montants restant à mandater par ligne budgétaire.</p>
                        <Link href="/reste-a-mandater">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Voir les données</Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card className="border-gray-300 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-gray-900">
                            <Table className="h-5 w-5 text-blue-600" />
                            Détails Engagements BC/Marché
                        </CardTitle>
                        <CardDescription className="text-gray-500">
                            Détails des engagements BC et marchés depuis 2020
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-sm text-gray-500">
                            Informations détaillées sur les engagements liés aux bons de commande et marchés.
                        </p>
                        <Link href="/details-engagements">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Voir les données</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
