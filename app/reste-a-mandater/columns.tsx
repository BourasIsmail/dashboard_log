"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatCurrency } from "@/lib/utils"

export type ResteAMandater = {
    Id_Ligne_Budgetaire: number
    Id_ParagrapheBudget_AnneeBudgetaire: number
    IntituleFr: string
    Numero: string
    Montant: number
    code: string
    ParagrapheBudget_IntituleFr: string
    Budget_IntituleFr: string
    AnneeBudgetaire_IntituleFr: string
    NumeroMarche: string
    Id_Marche_Execution: number
    TotalDepenses: number
    RetourEngagement: number
    Report: number
    APayer: number
    Id_Sous_Ordonnateur_IntituleFr: string
    raison_social: string
    LigneSource: string
    Id_Type_Engagement_IntituleFr: string
    Id_Annee_Budgetaire_IntituleFr: string
    Id_Annee_Budgetaire: number
    Id_Type_Depense: number
    Id_Prestataire: number
    Id_Sous_Ordonnateur: number
    Id_Budget: number
    Id_Chapitre_Budget: number
    Id_Article_Budget: number
    Id_Paragraphe_Budget: number
}

export const columns: ColumnDef<ResteAMandater>[] = [
    {
        accessorKey: "Id_Ligne_Budgetaire",
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
        accessorKey: "IntituleFr",
        header: "Intitulé",
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
        accessorKey: "ParagrapheBudget_IntituleFr",
        header: "Paragraphe budget",
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
        accessorKey: "raison_social",
        header: "Raison sociale",
        filterFn: "includesString",
    },
]
