"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon } from "lucide-react"

interface YearSelectorProps {
    availableYears: string[]
    onYearSelected: (year: string) => void
    title: string
    description?: string
}

export function YearSelector({ availableYears, onYearSelected, title, description }: YearSelectorProps) {
    const [selectedYear, setSelectedYear] = useState<string>("")

    const handleYearChange = (year: string) => {
        setSelectedYear(year)
    }

    const handleSubmit = () => {
        if (selectedYear) {
            onYearSelected(selectedYear)
        }
    }

    return (
        <Card className="w-full max-w-md mx-auto border-gray-300 bg-white shadow-sm">
            <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-blue-600" />
                    {title}
                </CardTitle>
                {description && <CardDescription className="text-gray-500">{description}</CardDescription>}
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="year-select" className="text-sm font-medium text-gray-700">
                            Sélectionnez une année
                        </label>
                        <Select value={selectedYear} onValueChange={handleYearChange}>
                            <SelectTrigger id="year-select" className="w-full border-gray-300">
                                <SelectValue placeholder="Choisir une année" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-gray-300">
                                {availableYears.map((year) => (
                                    <SelectItem key={year} value={year} className="text-gray-700">
                                        {year}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <Button
                        onClick={handleSubmit}
                        disabled={!selectedYear}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                        Afficher les données
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
