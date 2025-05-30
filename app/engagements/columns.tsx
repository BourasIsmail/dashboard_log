"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatDate, formatCurrency } from "@/lib/utils"

export type Engagement = {
    id: number
    Id_ParagrapheBudget_AnneeBudgetaire: number
    Id_Marche_Execution: number
    Id_Ligne_Source: string
    Id_Type_Engagement: number
    TypeEngagement_IntituleFr: string
    Id_Engagement_Report: number
    Id_Prestataire: number
    Id_PMN: number
    Id_Sous_Ordonnateur: number
    numero: string
    montant: number
    objet: string
    Date_Effet: string
    Date_Visa: string
    LigneCCGN: string
    Id_Paragraphe_Budget: number
    Id_LigneNN: string
    budget: string
    Annee: string
    Prestataire_IntituleFr: string
    RIB: string
    DomicileFr: string
    totalInscrit: number
    codeLigne: string
    ParagrapheBudget_AnneeBudgetaire_IntituleFr: string
    typeBudget: string
    sousOrdonnateur_Intitulefr: string
}

export const columns: ColumnDef<Engagement>[] = [
    {
        accessorKey: "id",
        header: "ID",
        size: 80,
    },
    {
        accessorKey: "numero",
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Numéro
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "TypeEngagement_IntituleFr",
        header: "Type d'engagement",
        filterFn: "includesString",
    },
    {
        accessorKey: "Prestataire_IntituleFr",
        header: "Prestataire",
        filterFn: "includesString",
    },
    {
        accessorKey: "montant",
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Montant
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = Number.parseFloat(row.getValue("montant"))
            return formatCurrency(amount)
        },
    },
    {
        accessorKey: "objet",
        header: "Objet",
        size: 250,
        filterFn: "includesString",
    },
    {
        accessorKey: "Date_Effet",
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Date d&apos;effet
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            return formatDate(row.getValue("Date_Effet"))
        },
    },
    {
        accessorKey: "Date_Visa",
        header: "Date visa",
        cell: ({ row }) => {
            return formatDate(row.getValue("Date_Visa"))
        },
    },
    {
        accessorKey: "sousOrdonnateur_Intitulefr",
        header: "Sous-ordonnateur",
        filterFn: "includesString",
    },
    {
        accessorKey: "ParagrapheBudget_AnneeBudgetaire_IntituleFr",
        header: "Paragraphe budget",
        filterFn: "includesString",
    },
    {
        accessorKey: "Annee",
        header: "Année",
        filterFn: "includesString",
    },
]
