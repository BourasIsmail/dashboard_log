import { columns } from "./columns"
import { DataTable } from "@/components/data-table"
import {getActionsParRubrique} from "@/lib/api/gmap-api";

export default async function ActionsParRubriquePage() {
    const data = await getActionsParRubrique()

    return (
        <div className="container mx-auto py-10">
            <DataTable
                columns={columns}
                data={data}
                title="Actions Par Rubrique"
                description="Liste des actions par rubrique depuis le 1er janvier 2024"
            />
        </div>
    )
}
