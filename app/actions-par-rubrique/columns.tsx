"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatDate, formatCurrency } from "@/lib/utils"

export type ActionsParRubrique = {
    typeDep: string
    TYPELIGNE: string
    id: number
    Id_ParagrapheBudget_AnneeBudgetaire: number
    Numero: string
    Montant: number
    objet: string
    Date_effet: string
    Id_Sous_Ordonnateur: number
    Id_Engagement: number
}

export const columns: ColumnDef<ActionsParRubrique>[] = [
    {
        accessorKey: "id",
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
        accessorKey: "typeDep",
        header: "Type Dépense",
        filterFn: "includesString",
    },
    {
        accessorKey: "TYPELIGNE",
        header: "Type Ligne",
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
        accessorKey: "objet",
        header: "Objet",
        size: 250,
        filterFn: "includesString",
    },
    {
        accessorKey: "Date_effet",
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Date d&apos;effet
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            return formatDate(row.getValue("Date_effet"))
        },
    },
    {
        accessorKey: "Id_Sous_Ordonnateur",
        header: "ID Sous-Ordonnateur",
    },
    {
        accessorKey: "Id_Engagement",
        header: "ID Engagement",
    },
]
