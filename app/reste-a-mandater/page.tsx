import { columns } from "./columns"
import { DataTable } from "@/components/data-table"
import {getResteAMandater} from "@/lib/api/gmap-api";

export default async function ResteAMandaterPage() {
    const data = await getResteAMandater()

    return (
        <div className="container mx-auto py-10">
            <DataTable
                columns={columns}
                data={data}
                title="Reste à Mandater"
                description="Montants restant à mandater par ligne budgétaire pour 2024-2025"
            />
        </div>
    )
}
