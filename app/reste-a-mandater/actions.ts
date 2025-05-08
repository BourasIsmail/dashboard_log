"use server"


import {executeQuery} from "@/lib/api/gmap-api";

export async function getResteAMandaterData(year?: string) {
    // If a year is provided, add it to the WHERE clause
    const yearFilter = year ? `WHERE AnneeBudgetaire_IntituleFr = '${year}'` : `WHERE AnneeBudgetaire_IntituleFr >='2020'`

    const query = `
      SELECT [Id_Ligne_Budgetaire]
              ,[Id_ParagrapheBudget_AnneeBudgetaire]
              ,[IntituleFr]
              ,[Numero]
              ,[Montant]
              ,[code]
              ,[ParagrapheBudget_IntituleFr]
              ,[Budget_IntituleFr]
              ,[AnneeBudgetaire_IntituleFr]
              ,[NumeroMarche]
              ,[Id_Marche_Execution]
              ,[TotalDepenses]
              ,[RetourEngagement]
              ,[Report]
              ,[APayer]
              ,[Id_Sous_Ordonnateur_IntituleFr]
              ,[raison_social]
              ,[LigneSource]
              ,[Id_Type_Engagement_IntituleFr]
              ,[Id_Annee_Budgetaire_IntituleFr]
              ,[Id_Annee_Budgetaire]
              ,[Id_Type_Depense]
              ,[Id_Prestataire]
              ,[Id_Sous_Ordonnateur]
              ,[Id_Budget]
              ,[Id_Chapitre_Budget]
              ,[Id_Article_Budget]
              ,[Id_Paragraphe_Budget]
      FROM [MarchesPubliques].[dbo].[ResteAMandater]
      ${yearFilter}
      ORDER BY
          AnneeBudgetaire_IntituleFr DESC
  `
    try {
        return await executeQuery(query)
    } catch (error) {
        console.error("Error fetching Reste à Mandater data:", error)
        throw new Error("Failed to fetch data")
    }
}

export async function getAvailableYears() {
    const query = `
      SELECT DISTINCT [AnneeBudgetaire_IntituleFr] 
      FROM [MarchesPubliques].[dbo].[ResteAMandater]
      WHERE AnneeBudgetaire_IntituleFr IS NOT NULL
      ORDER BY [AnneeBudgetaire_IntituleFr] DESC
  `
    try {
        const results = await executeQuery(query)
        return results.map((row: { AnneeBudgetaire_IntituleFr: string }) => row.AnneeBudgetaire_IntituleFr.toString())
    } catch (error) {
        console.error("Error fetching available years:", error)
        throw new Error("Failed to fetch years")
    }
}
