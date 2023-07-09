const fetch = require("node-fetch");

async function getFestivalsOccitanie() {
    const apiUrl = 'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&facet=region&facet=domaine&facet=complement_domaine&facet=departement&facet=mois_habituel_de_debut&refine.region=Occitanie';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Vérification de la réponse
        if (!response.ok) {
             new Error(data.detail || 'Une erreur est survenue lors de la récupération des données.');
        }

        // Extraction des festivals
        return data.records.map(record => record.fields);

    } catch (error) {
        console.error(error);
         new Error('Une erreur est survenue lors de la récupération des festivals de la région Paca.');
    }
}

module.exports = getFestivalsOccitanie;