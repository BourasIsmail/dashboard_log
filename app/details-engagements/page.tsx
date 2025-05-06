import { columns } from "./columns"
import { DataTable } from "@/components/data-table"
import {getDetailsEngagementBCMarche} from "@/lib/api/gmap-api";

export default async function DetailsEngagementsPage() {
    const data = await getDetailsEngagementBCMarche()

    return (
        <div className="container mx-auto py-10">
            <DataTable
                columns={columns}
                data={data}
                title="Détails des Engagements BC/Marché"
                description="Informations détaillées sur les engagements liés aux bons de commande et marchés depuis 2024"
            />
        </div>
    )
}
