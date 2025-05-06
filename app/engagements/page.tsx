import { columns } from "./columns"
import { DataTable } from "@/components/data-table"
import {getEngagementAll} from "@/lib/api/gmap-api";

export default async function EngagementsPage() {
    const data = await getEngagementAll()

    return (
        <div className="container mx-auto py-10">
            <DataTable
                columns={columns}
                data={data}
                title="Engagements"
                description="Liste complète des engagements depuis le 1er janvier 2024"
            />
        </div>
    )
}
