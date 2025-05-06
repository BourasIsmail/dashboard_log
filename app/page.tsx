import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Database, FileSpreadsheet, BarChart3, FileText, Table } from "lucide-react"

export default function Home() {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-8">Tableau de bord des données</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileSpreadsheet className="h-5 w-5" />
                            Actions Par Rubrique
                        </CardTitle>
                        <CardDescription>Données des actions par rubrique depuis 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-sm text-muted-foreground">
                            Affiche les actions par rubrique avec leurs montants et dates d&apos;effet.
                        </p>
                        <Link href="/actions-par-rubrique">
                            <Button className="w-full">Voir les données</Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Database className="h-5 w-5" />
                            Engagements
                        </CardTitle>
                        <CardDescription>Tous les engagements depuis 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-sm text-muted-foreground">
                            Liste complète des engagements avec leurs détails financiers.
                        </p>
                        <Link href="/engagements">
                            <Button className="w-full">Voir les données</Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="h-5 w-5" />
                            Marchés en Exécution
                        </CardTitle>
                        <CardDescription>Marchés en exécution pour 2024-2025</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-sm text-muted-foreground">
                            Détails des marchés en cours d&apos;exécution avec leurs montants.
                        </p>
                        <Link href="/marches-execution">
                            <Button className="w-full">Voir les données</Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileText className="h-5 w-5" />
                            Reste à Mandater
                        </CardTitle>
                        <CardDescription>Données du reste à mandater 2024-2025</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-sm text-muted-foreground">Montants restant à mandater par ligne budgétaire.</p>
                        <Link href="/reste-a-mandater">
                            <Button className="w-full">Voir les données</Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Table className="h-5 w-5" />
                            Détails Engagements BC/Marché
                        </CardTitle>
                        <CardDescription>Détails des engagements BC et marchés depuis 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-sm text-muted-foreground">
                            Informations détaillées sur les engagements liés aux bons de commande et marchés.
                        </p>
                        <Link href="/details-engagements">
                            <Button className="w-full">Voir les données</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
