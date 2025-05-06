import { columns } from "./columns"
import { DataTable } from "@/components/data-table"
import {getMarcheExecutionView} from "@/lib/api/gmap-api";

export default async function MarchesExecutionPage() {
    const data = await getMarcheExecutionView()

    return (
        <div className="container mx-auto py-10">
            <DataTable
                columns={columns}
                data={data}
                title="Marchés en Exécution"
                description="Liste des marchés en exécution pour 2024-2025"
            />
        </div>
    )
}
