"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import {columns, ResteAMandater} from "./columns"
import { DataTable } from "@/components/data-table"
import { YearSelector } from "@/components/year-selector"
import { getAvailableYears, getResteAMandaterData } from "./actions"

export default function ResteAMandaterPage() {
    const [data, setData] = useState<ResteAMandater[]>([])
    const [selectedYear, setSelectedYear] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [availableYears, setAvailableYears] = useState<string[]>([])
    const [error, setError] = useState<string | null>(null)

    // Fetch available years when the component mounts
    useEffect(() => {
        const fetchYears = async () => {
            try {
                const years = await getAvailableYears()
                setAvailableYears(years)
            } catch (err) {
                console.error("Error fetching years:", err)
                setError("Impossible de récupérer la liste des années disponibles.")
            }
        }
        fetchYears()
    }, [])

    const handleYearSelected = async (year: string) => {
        setLoading(true)
        setError(null)
        try {
            const result = await getResteAMandaterData(year)
            setData(result)
            setSelectedYear(year)
        } catch (err) {
            console.error("Error fetching data:", err)
            setError("Une erreur s'est produite lors de la récupération des données. Veuillez réessayer.")
        } finally {
            setLoading(false)
        }
    }

    if (error) {
        return (
            <div className="container mx-auto py-10">
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Erreur: </strong>
                    <span className="block sm:inline">{error}</span>
                    <Button onClick={() => window.location.reload()} className="mt-2" variant="outline">
                        Réessayer
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto py-10">
            {!selectedYear ? (
                <YearSelector
                    availableYears={availableYears}
                    onYearSelected={handleYearSelected}
                    title="Reste à Mandater"
                    description="Veuillez sélectionner une année pour afficher les montants restant à mandater"
                />
            ) : (
                <>
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                        </div>
                    ) : (
                        <>
                            <div className="mb-4">
                                <Button
                                    onClick={() => setSelectedYear(null)}
                                    variant="outline"
                                    className="border-gray-300 text-gray-700"
                                >
                                    ← Changer d&apos;année
                                </Button>
                            </div>
                            <DataTable
                                columns={columns}
                                data={data}
                                title="Reste à Mandater"
                                description={`Montants restant à mandater par ligne budgétaire pour l'année ${selectedYear}`}
                            />
                        </>
                    )}
                </>
            )}
        </div>
    )
}
