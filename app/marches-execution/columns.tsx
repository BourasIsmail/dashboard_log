"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatCurrency } from "@/lib/utils"

export type MarcheExecution = {
    Id_Marche_Execution: number
    Numero: string
    Objet: string
    Montant: number
    Raison_Social: string
    PMN: string
    Id_Lot: number
    Id_Prestataire: number
    Id_PMN: number
    Id_Etat_Lot: number
    Id_Annee_Budgetaire: number
    AnneeBudgetaire_IntituleFr: string
    Budget_IntituleFr: string
    Id_Sous_Ordonnateur: number
    LigneSource: string
    Id_Sous_Ordonnateur_IntituleFr: string
    Id_Mode_Passation: number
    Id_Type_Engagement_IntituleFr: string
    TotalDepenses: number
    total_PenRet: number
    total_InterMor: number
    APayer: number
}

export const columns: ColumnDef<MarcheExecution>[] = [
    {
        accessorKey: "Id_Marche_Execution",
        header: "ID",
        size: 80,
    },
    {
        accessorKey: "Numero",
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
        accessorKey: "Objet",
        header: "Objet",
        size: 250,
        filterFn: "includesString",
    },
    {
        accessorKey: "Raison_Social",
        header: "Raison sociale",
        filterFn: "includesString",
    },
    {
        accessorKey: "Montant",
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Montant
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = Number.parseFloat(row.getValue("Montant"))
            return formatCurrency(amount)
        },
    },
    {
        accessorKey: "TotalDepenses",
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Total dépenses
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = Number.parseFloat(row.getValue("TotalDepenses"))
            return formatCurrency(amount)
        },
    },
    {
        accessorKey: "APayer",
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    À payer
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = Number.parseFloat(row.getValue("APayer"))
            return formatCurrency(amount)
        },
    },
    {
        accessorKey: "AnneeBudgetaire_IntituleFr",
        header: "Année budgétaire",
        filterFn: "includesString",
    },
    {
        accessorKey: "Budget_IntituleFr",
        header: "Budget",
        filterFn: "includesString",
    },
    {
        accessorKey: "Id_Sous_Ordonnateur_IntituleFr",
        header: "Sous-ordonnateur",
        filterFn: "includesString",
    },
    {
        accessorKey: "Id_Type_Engagement_IntituleFr",
        header: "Type d'engagement",
        filterFn: "includesString",
    },
]
