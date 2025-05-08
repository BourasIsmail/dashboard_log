import sql from "mssql"
import mysql from "mysql2/promise"

// Configuration de la connexion SQL Server
const sqlConfig = {
    user: process.env.GMAP_DB_USER || "gemapuser",
    password: process.env.GMAP_DB_PASSWORD || "EN*sn3TM9*SIC",
    server: process.env.GMAP_DB_HOST || "172.16.20.110",
    database: process.env.GMAP_DB_NAME || "MarchesPubliques",
    options: {
        encrypt: false, // Pour les connexions locales ou sans SSL
        trustServerCertificate: true, // Nécessaire pour les environnements locaux
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
}

// Fonction pour exécuter une requête SQL
export async function executeQuery(query: string) {
    let pool: sql.ConnectionPool | undefined;
    try {
        pool = await sql.connect(sqlConfig);
        const result = await pool.request().query(query);
        return result.recordset;
    } catch (err) {
        console.error("SQL error", err);
        throw new Error(`Erreur lors de l'exécution de la requête: ${err}`);
    } finally {
        if (pool) {
            await pool.close();
        }
    }
}

export async function connectToGmapDB() {
    try {
        // Création d'une connexion à la base de données GMAP
        const connection = await mysql.createConnection({
            host: process.env.GMAP_DB_HOST || "172.16.20.110",
            user: process.env.GMAP_DB_USER || "gemapuser",
            password: process.env.GMAP_DB_PASSWORD || "EN*sn3TM9*SIC",
            database: process.env.GMAP_DB_NAME || "MarchesPubliques",
        })

        return connection
    } catch (error) {
        console.error("Erreur de connexion à la base de données GMAP:", error)
        if (error instanceof Error) {
            throw new Error(`Erreur de connexion à la base de données GMAP: ${error.message}`)
        }
        throw new Error("Erreur de connexion à la base de données GMAP: Une erreur inconnue est survenue")
    }
}

export async function executeGmapQuery(query: string, params: (string | number | boolean | null)[] = []) {
    let connection
    try {
        connection = await connectToGmapDB()
        const [results] = await connection.execute(query, params)
        return results
    } catch (error) {
        console.error("Erreur lors de l'exécution de la requête GMAP:", error)
        if (error instanceof Error) {
            throw new Error(`Erreur lors de l'exécution de la requête GMAP: ${error.message}`)
        }
        throw new Error("Erreur lors de l'exécution de la requête GMAP: Une erreur inconnue est survenue")
    } finally {
        if (connection) {
            await connection.end()
        }
    }
}

// Requêtes spécifiques pour GMAP
export async function getActionsParRubrique() {
    const query = `
        SELECT [typeDep]
                ,[TYPELIGNE]
                ,[id]
                ,[Id_ParagrapheBudget_AnneeBudgetaire]
                ,[Numero]
                ,[Montant]
                ,[objet]
                ,[Date_effet]
                ,[Id_Sous_Ordonnateur]
                ,[Id_Engagement]
        FROM [MarchesPubliques].[dbo].[ActionsParRubrique]
        WHERE Date_effet >='2020-01-01'
    `
    return executeQuery(query)
}

export async function getEngagementAll() {
    const query = `
        SELECT [id]
                ,[Id_ParagrapheBudget_AnneeBudgetaire]
                ,[Id_Marche_Execution]
                ,[Id_Ligne_Source]
                ,[Id_Type_Engagement]
                ,[TypeEngagement_IntituleFr]
                ,[Id_Engagement_Report]
                ,[Id_Prestataire]
                ,[Id_PMN]
                ,[Id_Sous_Ordonnateur]
                ,[numero]
                ,[montant]
                ,[objet]
                ,[Date_Effet]
                ,[Date_Visa]
                ,[LigneCCGN]
                ,[Id_Paragraphe_Budget]
                ,[Id_LigneNN]
                ,[budget]
                ,[Annee]
                ,[Prestataire_IntituleFr]
                ,[RIB]
                ,[DomicileFr]
                ,[totalInscrit]
                ,[codeLigne]
                ,[ParagrapheBudget_AnneeBudgetaire_IntituleFr]
                ,[typeBudget]
                ,[sousOrdonnateur_Intitulefr]
        FROM [MarchesPubliques].[dbo].[EngagementAll]
        WHERE Date_effet >='2020-01-01'
    `
    return executeQuery(query)
}

export async function getMarcheExecutionView() {
    const query = `
        SELECT [Id_Marche_Execution]
                ,[Numero]
                ,[Objet]
                ,[Montant]
                ,[Raison_Social]
                ,[PMN]
                ,[Id_Lot]
                ,[Id_Prestataire]
                ,[Id_PMN]
                ,[Id_Etat_Lot]
                ,[Id_Annee_Budgetaire]
                ,[AnneeBudgetaire_IntituleFr]
                ,[Budget_IntituleFr]
                ,[Id_Sous_Ordonnateur]
                ,[LigneSource]
                ,[Id_Sous_Ordonnateur_IntituleFr]
                ,[Id_Mode_Passation]
                ,[Id_Type_Engagement_IntituleFr]
                ,[TotalDepenses]
                ,[total_PenRet]
                ,[total_InterMor]
                ,[APayer]
        FROM [MarchesPubliques].[dbo].[MarcheExecution_View]
            Numero LIKE '%2020%'
            OR Numero LIKE '%2021%'
            OR Numero LIKE '%2022%'
            OR Numero LIKE '%2023%'
            OR Numero LIKE '%2024%'
            OR Numero LIKE '%2025%'
        ORDER BY
            [Id_Marche_Execution],
            [Numero]
    `
    return executeQuery(query)
}

export async function getResteAMandater() {
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
        WHERE AnneeBudgetaire_IntituleFr IN ('2023', '2024', '2025','2022','2021','2020')
        ORDER BY
            AnneeBudgetaire_IntituleFr DESC,
            [Id_Ligne_Budgetaire]
    `
    return executeQuery(query)
}

export async function getDetailsEngagementBCMarche() {
    const query = `
        SELECT [Id_EngagementMarcheBC_Budget]
                ,[montantEngage]
                ,[numeroEngagement]
                ,[MontantDispoAvantEngagement]
                ,[MarcheExecution_IntituleFr]
                ,[Id_Marche_Execution]
                ,[Prestataire_IntituleFr]
                ,[LigneCCGN]
                ,[Id_Paragraphe_Budget]
                ,[Id_LigneNN]
                ,[budget]
                ,[Annee]
                ,[RIB]
                ,[DomicileFr]
                ,[totalInscrit]
                ,[codeLigne]
                ,[ParagrapheBudget_AnneeBudgetaire_IntituleFr]
                ,[PMN_IntituleFr]
                ,[objetEngagement]
                ,[Date_Effet]
                ,[Date_Visa]
                ,[Id_Pieces_Jointes]
                ,[TotalDepenses]
                ,[ResteAmandater]
                ,[Id_Sous_Ordonnateur_IntituleFr]
                ,[MarcheON]
                ,[typeBudget]
                ,[LigneSource]
                ,[IHM]
        FROM [MarchesPubliques].[dbo].[v_detailsEngagementBCMarche]
        WHERE Date_effet >='2020-01-01'
    `
    return executeQuery(query)
}
