"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatDate, formatCurrency } from "@/lib/utils"

export type DetailsEngagement = {
    Id_EngagementMarcheBC_Budget: number
    montantEngage: number
    numeroEngagement: string
    MontantDispoAvantEngagement: number
    MarcheExecution_IntituleFr: string
    Id_Marche_Execution: number
    Prestataire_IntituleFr: string
    LigneCCGN: string
    Id_Paragraphe_Budget: number
    Id_LigneNN: string
    budget: string
    Annee: string
    RIB: string
    DomicileFr: string
    totalInscrit: number
    codeLigne: string
    ParagrapheBudget_AnneeBudgetaire_IntituleFr: string
    PMN_IntituleFr: string
    objetEngagement: string
    Date_Effet: string
    Date_Visa: string
    Id_Pieces_Jointes: number
    TotalDepenses: number
    ResteAmandater: number
    Id_Sous_Ordonnateur_IntituleFr: string
    MarcheON: number
    typeBudget: string
    LigneSource: string
    IHM: number
}

export const columns: ColumnDef<DetailsEngagement>[] = [
    {
        accessorKey: "Id_EngagementMarcheBC_Budget",
        header: "ID",
        size: 80,
    },
    {
        accessorKey: "numeroEngagement",
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
        accessorKey: "objetEngagement",
        header: "Objet",
        size: 250,
        filterFn: "includesString",
    },
    {
        accessorKey: "Prestataire_IntituleFr",
        header: "Prestataire",
        filterFn: "includesString",
    },
    {
        accessorKey: "montantEngage",
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Montant engagé
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = Number.parseFloat(row.getValue("montantEngage"))
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
        accessorKey: "ResteAmandater",
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Reste à mandater
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = Number.parseFloat(row.getValue("ResteAmandater"))
            return formatCurrency(amount)
        },
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
        accessorKey: "MarcheExecution_IntituleFr",
        header: "Marché exécution",
        filterFn: "includesString",
    },
    {
        accessorKey: "Id_Sous_Ordonnateur_IntituleFr",
        header: "Sous-ordonnateur",
        filterFn: "includesString",
    },
    {
        accessorKey: "ParagrapheBudget_AnneeBudgetaire_IntituleFr",
        header: "Paragraphe budget",
        filterFn: "includesString",
    },
]
